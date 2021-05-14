import fs from 'fs';
import path from 'path';
import { Post, Page, PostList } from './post';
import { chunks } from './util';


function generate(fpatIn: string, fpatOut: string, writeFile: (fpat: string, content: string | NodeJS.ArrayBufferView) => void) {
    const posts: Post[] = [];
    const postsDir = path.join(fpatIn, 'site/post');
    const postTemplate = fs.readFileSync(path.join(fpatIn, 'src/page.template.html'), 'utf8');

    for (const item of fs.readdirSync(postsDir)) {
        const markdown = fs.readFileSync(path.join(postsDir, item, 'index.md'), 'utf8');
        posts.push(new Post(postTemplate, markdown));
    }

    for (const post of posts) {
        writeFile(path.join(fpatOut, post.uri, 'index.html'), post.htmlContent);
    }

    const pages: Page[] = [];
    const pageDir = path.join(fpatIn, 'site/page');
    const pageTemplate = fs.readFileSync(path.join(fpatIn, 'src/page.template.html'), 'utf8');

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

