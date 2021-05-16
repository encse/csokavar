import fs, { PathLike } from 'fs';
import path, { ParsedPath } from 'path';
import { Post, Page, PostList, PageTemplateProps } from './post';
import { chunks } from './util';
import ReactDOMServer from 'react-dom/server';
import React from 'react';

type Asset = ParsedPath;


function renderReactChild(child: React.ReactChild | null): string {
    if (child == null) {
        return ''
    } else if (typeof (child) === 'string') {
        return child;
    } else if (typeof (child) === 'number') {
        return '' + child;
    } else {
        return ReactDOMServer.renderToStaticMarkup(child)
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


function collectPostlike<T>(dir: string, create: (markdown:string, assets: Asset[]) => T): T[] {
    const result: T[] = [];
    for (const item of fs.readdirSync(dir)) {
        const markdown = fs.readFileSync(path.join(dir, item, 'index.md'), 'utf8');
        const assets = [...files(path.join(dir, item))]
            .filter(fpat => fpat.name != 'index.md')
        result.push(create(markdown, assets));
    }
    return result;
}


function generate(fpatIn: string, fpatOut: string, writeFile: (fpat: string, content: string | NodeJS.ArrayBufferView) => void) {
    const templateHtml = fs.readFileSync(path.join(fpatIn, 'src/page.template.html'), 'utf8');

    const template = (props: PageTemplateProps) => {
        return templateHtml
            .replace('{{ heading-classes }}', props.headingClasses.map(c => ' ' + c).join(''))
            .replace('{{ title }}', renderReactChild(props.title))
            .replace('{{ subtitle }}', renderReactChild(props.subtitle))
            .replace('{{ featured-image }}', props.featuredImage)
            .replace('{{ post-content }}', renderReactChild(props.postContent))
            .replace('{{ footer }}', renderReactChild(props.footer))
    }

    const pages: Page[] = collectPostlike('site/page', (md, assets) => new Page(template, md, assets));
    const posts: Post[] = collectPostlike('site/post', (md, assets) => new Post(template, md, assets));

    for (const p of [...posts, ...pages]) {
        const pDir = path.join(fpatOut, p.uri)
        writeFile(path.join(pDir, 'index.html'), p.htmlContent);
        for (let asset of p.assets) {
            writeFile(
                path.join(pDir, asset.dir, asset.base), 
                fs.readFileSync(path.join(asset.root, asset.dir, asset.base)));
        }
    }


    let page = 1;
    let chunkSize = 5;
    for (let chunk of chunks([...posts].sort((a, b) => b.date.getTime() - a.date.getTime()), chunkSize)) {

        let fpat = page == 1 ? path.join(fpatOut, "index.html") : path.join(fpatOut, `page/${page}/index.html`);

        writeFile(
            fpat,
            new PostList(template,
                'Csókavár',
                'Németh Cs. Dávid blogja',
                'https://d1tyrc4sjyi164.cloudfront.net/wp-content/uploads/2021/01/Screen-Shot-2021-01-14-at-20.47.03-scaled.jpg',
                '',
                chunk, page, posts.length).htmlContent
        );
        page++;
    }


}

fs.rmdirSync("build", { recursive: true });

generate('.', 'build', (fpat: string, content: string | NodeJS.ArrayBufferView) => {
    fs.mkdirSync(path.parse(fpat).dir, { recursive: true });
    fs.writeFileSync(fpat, content);
});

