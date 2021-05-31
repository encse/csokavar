import fs from 'fs';
import path, { ParsedPath } from 'path';
import { Post, Page, PageTemplateProps, Template } from './post';
import { PostList } from "./postList";
import { chunks } from './util';
import ReactDOMServer from 'react-dom/server';
import React from 'react';
import { AssetManager, ImageAsset } from './assets';
import { Tag } from './tag';
import process from 'process';
import { ServerStyleSheet } from 'styled-components';
import { PageComponent } from './page';

type Settings = {
    'cdn': string
};

const config: {[key: string]:Settings } = {
    local: {
        'cdn': 'http://127.0.0.1:8080'
    },
    prod: {
        'cdn': 'https://d1tyrc4sjyi164.cloudfront.net/'
    }
}

const settings = config[process.argv[2]];
console.log(settings);


function renderReactChild(child: React.ReactChild | null): {html: string, style: string} {
    if (child == null) {
        return {html: '', style: ''}
    } else if (typeof (child) === 'string') {
        return {html: child, style: ''};
    } else if (typeof (child) === 'number') {
        return {html: '' + child, style: ''}
    } else {
        const sheet = new ServerStyleSheet()
        const html = ReactDOMServer.renderToStaticMarkup(sheet.collectStyles(child));
        const style = sheet.getStyleTags() 
        sheet.seal();
        return {html, style};
    }
}

function* files(root: string, dir: string = ''): Iterable<ParsedPath> {
    for (let file of fs.readdirSync(path.resolve(root, dir))) {
        const fpat = path.join(dir, file);
        if (fs.statSync(path.resolve(root, fpat)).isDirectory()) {
            yield* files(root, fpat);
        } else {
            const parsed = path.parse(fpat);
            parsed.root = root;
            yield parsed;
        }
    }
};


function collectPostlike<T>(dir: string, assetManager: AssetManager, create: (fpat: string, markdown: string) => T): T[] {
    const result: T[] = [];
    for (const item of fs.readdirSync(dir)) {
        const fpat = path.join(dir, item, 'index.md')
        const markdown = fs.readFileSync(fpat, 'utf8');
        result.push(create(fpat, markdown));
    }
    return result;
}

type FileWriter = (fpat: string, content: string | NodeJS.ArrayBufferView) => void;

async function generate(fpatIn: string, writeFile: FileWriter) {
    const templateHtml = fs.readFileSync(path.join(fpatIn, 'src/page.template.html'), 'utf8');

    const assetManager = new AssetManager(settings.cdn, ".media");

    const template = (props: PageTemplateProps) => {
        const featuredImage:React.CSSProperties = props.coverImage ? {
                backgroundImage: `url(${props.coverImage.url})`,
                backgroundColor: props.coverImage.dominantColor
            } : {
                backgroundImage: 'linear-gradient(to right, #0f2027, #203a43, #2c5364)',
            };


        const page = renderReactChild(
            <PageComponent 
                featuredImage={featuredImage} 
                footer={props.footer} 
                postContent={props.postContent} 
                subtitle={props.subtitle} 
                title={props.title}
                homePageHeading={props.homePageHeading}
            />);

        return templateHtml
            .replace('{{ site.js }}', assetManager.lookup('site/assets/site.js', "jsAsset").url.toString())
            .replace('{{ style }}', page.style)
            .replace('{{ page }}', page.html);
    };


    for (let assetPath of [...files('site')].filter(fpat => fpat.base !== 'index.md')) {
       await assetManager.register(assetPath);
    }

    const pages: Page[] = collectPostlike(
        'site/page',
        assetManager,
        (fpat, md) => new Page(template, fpat, md, assetManager)
    );

    const posts: Post[] = collectPostlike(
        'site/post',
        assetManager,
        (fpat, md) => new Post(template, fpat, md, assetManager)
    );

    for (const p of [...posts, ...pages]) {
        const pDir = p.uri;
        const htmlContent = await p.render();
        writeFile(path.join(pDir, 'index.html'), htmlContent);

    }

    for (let asset of assetManager.assets) {
        writeFile(
            asset.url.pathname,
            fs.readFileSync(path.join(asset.srcPath)));
    }

    generateList(
        posts,
        '/',
        template,
        'Csókavár',
        'Németh Cs. Dávid blogja',
        assetManager.lookup('site/assets/main-bg.jpg', "imageAsset"),
        writeFile
    );

    const tags = new Map<string, Tag>();
    const tagCount = new Map<string, number>();
    for (const post of posts) {
        for (const tag of post.tags) {
            tags.set(tag.name, tag);
            tagCount.set(tag.name, (tagCount.get(tag.name) ?? 0) + 1)
        }
    }

    for (const [_, tag] of tags) {
        if (tagCount.get(tag.name) == 1) {
            console.log(tag.name);
        }
        await generateList(
            posts.filter(post => post.tags.some(t => t.uri === tag.uri)),
            tag.uri,
            template,
            `Címke: ${tag.name}`,
            '',
            assetManager.lookup('site/assets/main-bg.jpg', "imageAsset"),
            writeFile
        )
    }
}


async function generateList(
    posts: Post[],
    baseUri: string,
    template: Template<PageTemplateProps>,
    title: string,
    subtitle: string,
    coverImage: ImageAsset,
    writeFile: FileWriter
) {
    let page = 1;
    let chunkSize = 5;
    for (let chunk of chunks([...posts].sort((a, b) => b.date.getTime() - a.date.getTime()), chunkSize)) {

        const postList = new PostList(template,
            title,
            subtitle,
            coverImage,
            baseUri,
            chunk, page, posts.length);

        const htmlContent = await postList.render();
        writeFile(path.join(postList.uri, "index.html"), htmlContent);
        page++;
    }
}

async function build(){
    
    const tmpDir = fs.mkdtempSync("build_");
    try {
        fs.chmodSync(tmpDir, 0o755);

        await generate('.', (fpat: string, content: string | NodeJS.ArrayBufferView) => {
            fpat = path.join(tmpDir, fpat);
            fs.mkdirSync(path.parse(fpat).dir, { recursive: true });
            fs.writeFileSync(fpat, content);
        })
        
        fs.rmdirSync("build", { recursive: true });
        fs.renameSync(tmpDir, "build");
    } finally {
        if (fs.existsSync(tmpDir)) {
            fs.rmdirSync(tmpDir, { recursive: true });
        }
    }
}

build();




