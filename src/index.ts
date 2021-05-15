import fs from 'fs';
import path from 'path';
import { Post, Page, PostList,PageTemplateProps } from './post';
import { chunks } from './util';
import ReactDOMServer from 'react-dom/server';
import React from 'react';

function renderReactChild(child: React.ReactChild | null): string {
    if (child == null){
        return ''
    } else if (typeof(child) === 'string'){
        return child;
    } else if (typeof(child) === 'number'){
        return '' + child;
    } else {
        return ReactDOMServer.renderToStaticMarkup(child)
    }
}

function generate(fpatIn: string, fpatOut: string, writeFile: (fpat: string, content: string | NodeJS.ArrayBufferView) => void) {
    const posts: Post[] = [];
    const postsDir = path.join(fpatIn, 'site/post');
    const pageTemplateHtml = fs.readFileSync(path.join(fpatIn, 'src/page.template.html'), 'utf8');

    const pageTemplate = (props: PageTemplateProps) => {
        return pageTemplateHtml
            .replace('{{ heading-classes }}', props.headingClasses.map(c => ' ' + c).join(''))
            .replace('{{ title }}', renderReactChild(props.title))
            .replace('{{ subtitle }}',renderReactChild(props.subtitle))
            .replace('{{ featured-image }}', props.featuredImage)
            .replace('{{ post-content }}', renderReactChild(props.postContent))
            .replace('{{ footer }}', renderReactChild(props.footer))
    }

    for (const item of fs.readdirSync(postsDir)) {
        const markdown = fs.readFileSync(path.join(postsDir, item, 'index.md'), 'utf8');
        posts.push(new Post(pageTemplate, markdown));
    }

    for (const post of posts) {
        writeFile(path.join(fpatOut, post.uri, 'index.html'), post.htmlContent);
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

