import metadataParse from 'markdown-yaml-metadata-parser';
import { slugify, formatDate, zeroPad, pick } from "./util";
import * as React from 'react';
import {AssetManager, ImageAsset} from './assets';
import { Tag } from './tag';
import { markdownToReact, markdownToReactExcerpt, markdownToTextContent } from './markdown/markdownToReact';
import {resolve} from 'url';
import { TagsIcon } from './components/fontAwesame';
import { ServerStyleSheet } from 'styled-components';

export type PageTemplateProps = {
    homePageHeading: boolean,
    title: string,
    subtitle: React.ReactChild,
    coverImage: ImageAsset,
    postContent: React.ReactChild
    footer: React.ReactChild,
    styleSheet?: ServerStyleSheet | null,
}

export type Template<T> = (t: T) => string;

export class Page {
    readonly title: string;
    readonly subtitle: string;
    readonly coverImage: ImageAsset | null;
    readonly uri: string;
    readonly mdContent: string;
    readonly #template: Template<PageTemplateProps>;

    constructor(
        template: Template<PageTemplateProps>,
        private fpat: string,
        md: string,
        private assetManager: AssetManager
    ) {

        const { metadata, content } = metadataParse(md);
        this.title = metadata.title;
        this.subtitle = metadata.subtitle;
       
        const slug = metadata.slug || slugify(this.title);
        this.uri = '/'+slug+'/';

        this.coverImage = this.assetManager.lookup(resolve(fpat, metadata.coverImage), "imageAsset");

        this.#template = template;
        this.mdContent = content;
    }

    async render(): Promise<string> {
        const html = markdownToReact(this.mdContent, this.assetManager, this.fpat);
        return this.#template(
            {
                homePageHeading: true,
                title: this.title,
                subtitle: this.subtitle,
                coverImage: this.coverImage,
                postContent: html,
                footer: null,
            }
        );
    }
}

export class Post {
    readonly title: string;
    readonly coverImage: ImageAsset;
    readonly date: Date;
    readonly tags: Tag[];
    readonly keywords: string[];
    readonly mdContent: string;
    readonly #template: Template<PageTemplateProps>;
    readonly uri: string;
    readonly excerpt: React.ReactElement<any>;

    constructor(
        template: Template<PageTemplateProps>,
        private fpat: string,
        md: string,
        private assetManager: AssetManager
    ) {
        const { metadata, content } = metadataParse(md);
        this.date = new Date(metadata.date);
        this.title = metadata.title;

        this.tags = (metadata.tags || []).map(name => new Tag(name, assetManager));
        this.keywords = [...(metadata.keywords || []), ...(metadata.tags || []), metadata.title];

        this.#template = template;
        this.mdContent = content;

        const slug = metadata.slug || slugify(this.title);
        this.uri = `/blog/${zeroPad(this.date.getFullYear(), 4)}/${zeroPad(this.date.getMonth() + 1, 2)}/${slug}/`;

        if (metadata.coverImage != null) {
            this.coverImage = this.assetManager.lookup(resolve(fpat, metadata.coverImage), "imageAsset");
        } else {
            let backgrounds = this.tags.flatMap(tag => tag.backgrounds);
            if (backgrounds.length == 0) {
                backgrounds.push(...new Tag('generic', assetManager).backgrounds);
            }
            this.coverImage = pick(backgrounds);
        }

        this.excerpt = markdownToReactExcerpt(content, this.uri, this.assetManager, fpat);
        
    }

    textContent(): string {
       return markdownToTextContent(this.mdContent, this.assetManager, this.fpat);
    }

    async render(): Promise<string> {
        let footer: React.ReactElement = null;
        if (this.tags.length > 0) {
            footer = <p>
                <TagsIcon />
                {this.tags.map((tag, i) => [
                    i == 0 ? ' ' : ', ',
                    <a href={tag.uri} rel="tag">{tag.name}</a>
                ])}
            </p>
        }

        const html = markdownToReact(this.mdContent, this.assetManager, this.fpat);
        return this.#template(
            {
                homePageHeading: false,
                title: this.title,
                subtitle: <time className="posted-on" dateTime={this.date.toISOString()}>{formatDate(this.date)}</time>,
                coverImage: this.coverImage,
                postContent: html,
                footer: footer
            }
        );
    }
}
