import fs from 'fs';
import path, { ParsedPath } from 'path';
import { Post, Page, PostList, PageTemplateProps } from './post';
import { chunks } from './util';
import ReactDOMServer from 'react-dom/server';
import React from 'react';

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


function generate(fpatIn: string, fpatOut: string, writeFile: (fpat: string, content: string | NodeJS.ArrayBufferView) => void) {
    const posts: Post[] = [];
    const postsDir = path.join(fpatIn, 'site/post');
    const pageTemplateHtml = fs.readFileSync(path.join(fpatIn, 'src/page.template.html'), 'utf8');

    const pageTemplate = (props: PageTemplateProps) => {
        return pageTemplateHtml
            .replace('{{ heading-classes }}', props.headingClasses.map(c => ' ' + c).join(''))
            .replace('{{ title }}', renderReactChild(props.title))
            .replace('{{ subtitle }}', renderReactChild(props.subtitle))
            .replace('{{ featured-image }}', props.featuredImage)
            .replace('{{ post-content }}', renderReactChild(props.postContent))
            .replace('{{ footer }}', renderReactChild(props.footer))
    }

    for (const item of fs.readdirSync(postsDir)) {
        const markdown = fs.readFileSync(path.join(postsDir, item, 'index.md'), 'utf8');

        const assets = [...files(path.join(postsDir, item))]
            .filter(fpat => fpat.name != 'index.md')

        posts.push(new Post(pageTemplate, markdown, assets));
    }

  

    for (const post of posts) {
        const postDir = path.join(fpatOut, post.uri)
        writeFile(path.join(postDir, 'index.html'), post.htmlContent);
        for (let asset of post.assets) {
            writeFile(
                path.join(postDir, asset.dir, asset.base), 
                fs.readFileSync(path.join(asset.root, asset.dir, asset.base)));
        }
    }

    const pages: Page[] = [];
    const pageDir = path.join(fpatIn, 'site/page');

    for (const item of fs.readdirSync(pageDir)) {
        const markdown = fs.readFileSync(path.join(pageDir, item, 'index.md'), 'utf8');
        pages.push(new Page(pageTemplate, markdown));
    }

    for (const page of pages) {
        writeFile(path.join(
            fpatOut,
            page.slug,
            "index.html",
        ), page.htmlContent);
    }

    let page = 1;
    let chunkSize = 5;
    for (let chunk of chunks([...posts].sort((a, b) => b.date.getTime() - a.date.getTime()), chunkSize)) {

        let fpat = page == 1 ? path.join(fpatOut, "index.html") : path.join(fpatOut, `page/${page}/index.html`);

        writeFile(
            fpat,
            new PostList(pageTemplate,
                'Csókavár',
                'Németh Cs. Dávid blogja',
                'https://d1tyrc4sjyi164.cloudfront.net/wp-content/uploads/2021/01/Screen-Shot-2021-01-14-at-20.47.03-scaled.jpg',
                '',
                chunk, page, posts.length).htmlContent
        );
        page++;
    }


}

generate('.', 'build', (fpat: string, content: string | NodeJS.ArrayBufferView) => {
    fs.mkdirSync(path.parse(fpat).dir, { recursive: true });
    fs.writeFileSync(fpat, content);
});

