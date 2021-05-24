import MarkdownIt from 'markdown-it';
import metadataParse from 'markdown-yaml-metadata-parser';
import { slugify, formatDate, zeroPad } from "./util";
import * as React from 'react';
import markdownKatex from '@iktakahiro/markdown-it-katex';
import markdown_it_iframe_plugin from './markdown-it-iframe';
import markdown_it_youtube_plugin from './markdown-it-youtube';
import markdown_it_gallery_plugin from './markdown-it-gallery';
import markdown_it_image_plugin from './markdown-it-image';
import {AssetManager, ImageAsset} from './assets';
import { ParsedPath } from 'path';

export type PageTemplateProps = {
    headingClasses: string[],
    title: React.ReactChild,
    subtitle: React.ReactChild,
    featuredImage: string,
    postContent: React.ReactChild
    footer: React.ReactChild
}

export type Template<T> = (t: T) => string;

export class PostList {

    readonly #htmlContent: string;

    constructor(
        template: Template<PageTemplateProps>,
        title: string,
        subtitle: string,
        coverImage: string,
        baseUri: string,
        posts: Post[],
        page: number,
        postCount: number
    ) {
        let content: React.ReactElement<any>[] = [];
        for (let post of posts) {
            content.push(
                <article key={post.uri}>
                    <header>
                        <h2 className="title"><a href={post.uri} rel="bookmark">{post.title}</a></h2>
                        <p className="subtitle">{formatDate(post.date)}</p>
                    </header>
                    <section>
                        {post.excerpt}
                    </section>
                </article>
            );
        }

        const hasPrev = page > 1;
        const hasNext = postCount / posts.length > page;

        if (hasPrev || hasNext) {
            content.push(
                <div className="pager">
                    {
                        hasPrev && page > 2 ?
                            <div className="previous"><a href={`${baseUri}/page/${page - 1}`}>« Előző</a></div> :
                            hasPrev ?
                                <div className="previous"><a href={baseUri}>« Előző</a></div> :
                                null
                    }
                    {
                        hasNext ?
                            <div className="next"><a href={`${baseUri}/page/${page + 1}`}>Következő »</a></div> :
                            null
                    }
                </div>
            );
        }

        this.#htmlContent = template(
            {
                headingClasses: ['home-page-heading'],
                title, subtitle,
                featuredImage: coverImage,
                postContent: <>{content}</>,
                footer: null
            }
        )
    }

    async render(): Promise<string> {
        return this.#htmlContent
    }
}

function markdownToReact(md: string, assetManager: AssetManager): React.ReactElement<any> {
    const markdownIt = MarkdownIt({
        html: true
    });
    markdownIt.use(markdownKatex, {
        output: "html",
        errorColor: "#cc0000"
    })
        .use(markdown_it_iframe_plugin)
        .use(markdown_it_youtube_plugin)
        .use(markdown_it_gallery_plugin, { assetManager: assetManager })
        .use(markdown_it_image_plugin);
    let html = markdownIt.render(md);
    return <div dangerouslySetInnerHTML={{ __html: html }} />
}


export class Page {
    readonly title: string;
    readonly subtitle: string;
    readonly coverImage: ImageAsset | null;
    readonly date: Date;
    readonly tags: string[];
    readonly #htmlContent: string;
    readonly slug: string;
    readonly uri: string;
    readonly #mdContent: string;
    readonly #template: Template<PageTemplateProps>;
    public assetManager: AssetManager;

    constructor(
        template: Template<PageTemplateProps>,
        md: string,
        private readonly assetPaths: ParsedPath[]
    ) {

        const { metadata, content } = metadataParse(md);
        this.date = new Date(metadata.date);
        this.title = metadata.title;
        this.subtitle = metadata.subtitle;


        this.tags = metadata.tags || [];
        this.slug = metadata.slug || slugify(this.title);
        this.uri = '/'+this.slug;
        this.assetManager = new AssetManager(this.assetPaths, this.uri);

        this.coverImage = metadata.coverImage ? this.assetManager.lookup(metadata.coverImage) : null;

        this.#template = template;
        this.#mdContent = content;
    }

    async render(): Promise<string> {
        const html = markdownToReact(this.#mdContent, this.assetManager);
        return this.#template(
            {
                headingClasses: ['home-page-heading'],
                title: this.title,
                subtitle: this.subtitle,
                featuredImage: this.coverImage?.uri,
                postContent: html,
                footer: null
            }
        );
    }
}

export class Post {
    readonly title: string;
    readonly coverImage: ImageAsset;
    readonly date: Date;
    readonly tags: string[];
    readonly #htmlContent: string;
    readonly #mdContent: string;
    readonly #template: Template<PageTemplateProps>;
    readonly slug: string;
    readonly uri: string;
    readonly excerpt: React.ReactElement<any>;

    public assetManager: AssetManager;

    constructor(
        template: Template<PageTemplateProps>,
        md: string,
        private readonly assetPaths: ParsedPath[]
    ) {
        const { metadata, content } = metadataParse(md);
        this.date = new Date(metadata.date);
        this.title = metadata.title;
        this.tags = metadata.tags || [];
        this.slug = metadata.slug || slugify(this.title);

        this.#template = template;
        this.#mdContent = content;

        this.uri = `/blog/${zeroPad(this.date.getFullYear(), 4)}/${zeroPad(this.date.getMonth() + 1, 2)}/${this.slug}/`;

        this.assetManager = new AssetManager(this.assetPaths, this.uri);
        this.coverImage = metadata.coverImage != null ? this.assetManager.lookup(metadata.coverImage) : null;

        this.excerpt = <></>;

        const markdownIt = MarkdownIt({
            html: true
        });

        for (let block of markdownIt.parse(content, {})) {
            if (block.content != '') {
                this.excerpt =
                    <p>
                        <span dangerouslySetInnerHTML={{ __html: markdownIt.renderer.render([block], { html: true }, {}) }} />
                        <a href={this.uri} rel="bookmark">…</a>
                    </p>;
                break;
            }
        }
    }

    async render(): Promise<string> {
        let footer: React.ReactElement = null;
        if (this.tags.length > 0) {
            footer = <p>
                <span className="tags-icon" />
                {this.tags.map((tag, i) => [
                    i == 0 ? ' ' : ', ',
                    <a href={`/blog/tag/${slugify(tag)}/`} rel="tag">{tag}</a>
                ])}
            </p>
        }

        const html = markdownToReact(this.#mdContent, this.assetManager);
        return this.#template(
            {
                headingClasses: [],
                title: this.title,
                subtitle: <time className="posted-on" dateTime={this.date.toISOString()}>{formatDate(this.date)}</time>,
                featuredImage: this.coverImage?.uri,
                postContent: html,
                footer: footer
            }
        );
    }
}
