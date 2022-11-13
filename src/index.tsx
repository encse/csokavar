import fs from 'fs';
import path from 'path';
import { Post } from './blog/post';
import { Page } from "./blog/page";
import { PostList } from "./blog/postList";
import { chunks, files } from './util';
import { AssetManager, ImageAsset, mkDstPath } from './assets';
import { Tag } from './blog/tag';
import process from 'process';
import { SearchPage } from './blog/search';
import { convertToWebp } from './convert';

function header(){
    console.log(`
         ██████╗███████╗ ██████╗ ██╗  ██╗ █████╗ ██╗   ██╗ █████╗ ██████╗ 
        ██╔════╝██╔════╝██╔═══██╗██║ ██╔╝██╔══██╗██║   ██║██╔══██╗██╔══██╗
        ██║     ███████╗██║   ██║█████╔╝ ███████║██║   ██║███████║██████╔╝
        ██║     ╚════██║██║   ██║██╔═██╗ ██╔══██║╚██╗ ██╔╝██╔══██║██╔══██╗
        ╚██████╗███████║╚██████╔╝██║  ██╗██║  ██║ ╚████╔╝ ██║  ██║██║  ██║ 
    `);
}

function collectPostlike<T>(dir: string, create: (fpat: string, markdown: string) => T): T[] {
    const result: T[] = [];
    for (const item of fs.readdirSync(dir)) {
        const fpat = path.join(dir, item, 'index.md')
        const markdown = fs.readFileSync(fpat, 'utf8');
        result.push(create(fpat, markdown));
    }
    return result;
}

type FileWriter = (fpat: string, content: string | NodeJS.ArrayBufferView) => void;

async function generate(writeFile: FileWriter) {

    const assetManager = new AssetManager(mkDstPath("/"), ".media");

    let success: boolean = true;

    success = convertToWebp('site');
    
    async function guardAsync(fpat: string, cb: () => Promise<void>): Promise<void> {
        try {
            await cb();
        } catch (e) {
            console.error(fpat);
            console.error(e);
            success = false;
        }
    }


    for (let assetPath of [...files('site')].filter(fpat => fpat.base !== 'index.md')) {
        await guardAsync(assetPath.name, () => assetManager.register(assetPath));
    }

    const pages: Page[] = collectPostlike(
        'site/page',
        (fpat, md) => new Page(fpat, md, assetManager)
    );

    const posts: Post[] = collectPostlike(
        'site/post',
        (fpat, md) => new Post(fpat, md, assetManager)
    );

    for (const p of [...posts, ...pages]) {
        await guardAsync(p.uri, async () => {
            const pDir = p.uri;
            const htmlContent = await p.render();
            writeFile(path.join(pDir, 'index.html'), htmlContent);
        });
    }

    for (let asset of assetManager.assets) {
        writeFile(
            asset.dstPath,
            fs.readFileSync(path.join(asset.srcPath)));
    }

    generateList(
        assetManager,
        posts,
        '/',
        'Csókavár',
        'Németh Cs. Dávid blogja',
        assetManager.lookup('site/backgrounds/main-bg.webp', "imageAsset"),
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
        await generateList(
            assetManager,
            posts.filter(post => post.tags.some(t => t.uri === tag.uri)),
            tag.uri,
            tag.name,
            '',
            assetManager.lookup('site/backgrounds/main-bg.webp', "imageAsset"),
            writeFile
        )
    }

    const search = new SearchPage(assetManager, posts);
    writeFile(path.join(search.uri, 'index.html'), await search.render());

    for (let staticFile of [...files('static')]) {
        const fpatDst = path.join(staticFile.dir, staticFile.base);
        const fpatSrc = path.join(staticFile.root, staticFile.dir, staticFile.base);
        writeFile(fpatDst, fs.readFileSync(fpatSrc));
    }

    return success;
}


async function generateList(
    assetManager: AssetManager,
    posts: Post[],
    baseUri: string,
    title: string,
    subtitle: string,
    coverImage: ImageAsset,
    writeFile: FileWriter
) {
    let page = 1;
    let chunkSize = 5;
    for (let chunk of chunks([...posts].sort((a, b) => b.date.getTime() - a.date.getTime()), chunkSize)) {

        const postList = new PostList(
            assetManager,
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

async function build() {

    header();

    const tmpDir = fs.mkdtempSync("build_");
    try {
        console.log('Generating....');
        fs.chmodSync(tmpDir, 0o755);

        let success = await generate((fpat: string, content: string | NodeJS.ArrayBufferView) => {
            fpat = path.join(tmpDir, fpat);
            fs.mkdirSync(path.parse(fpat).dir, { recursive: true });
            fs.writeFileSync(fpat, content);
        })

        if (success ){
            if (fs.existsSync("build")) {
                fs.rmSync("build", { recursive: true });
            }
            if (fs.existsSync("docs")) {
                fs.rmSync("docs", { recursive: true });
            }
            fs.renameSync(tmpDir, "docs");
        }
        console.log('Done');
        return success;
    } finally {
        if (fs.existsSync(tmpDir)) {
            fs.rmSync(tmpDir, { recursive: true });
        }
    }
}

build().then(success => {
    if (!success) {
        process.exitCode = 1;
    }
})
