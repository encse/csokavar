import fs from 'fs';
import path from 'path';
import { Post, Page, PostList } from './post';


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


    writeFile(path.join(fpatOut, "index.html"), 
        new PostList(pageTemplate, "x", [...posts].sort((a, b) => b.date.getTime() - a.date.getTime() ).slice(0, 5)).htmlContent
    );
}

generate('.', 'build', (fpat: string, content: string | NodeJS.ArrayBufferView) => {
    fs.mkdirSync(path.parse(fpat).dir, { recursive: true });
    fs.writeFileSync(fpat, content);
});

