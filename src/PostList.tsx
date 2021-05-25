import { formatDate } from "./util";
import * as React from 'react';
import path from 'path';
import { Template, PageTemplateProps, Post } from './post';
import { ImageAsset } from "./assets";


export class PostList {

    readonly uri: string;

    constructor(
        private readonly template: Template<PageTemplateProps>,
        private readonly title: string,
        private readonly subtitle: string,
        private readonly coverImage: ImageAsset,
        private readonly baseUri: string,
        private readonly posts: Post[],
        private readonly page: number,
        private readonly postCount: number
    ) {
        this.uri = this.getUriForPage(page);
    }

    getUriForPage(page: number): string {
        return page == 1 ? this.baseUri : path.join(this.baseUri, `page/${page}`);
    }

    async render(): Promise<string> {
        let content: React.ReactElement<any>[] = [];
        for (let post of this.posts) {
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

        const hasPrev = this.page > 1;
        const hasNext = this.postCount / this.posts.length > this.page;

        if (hasPrev || hasNext) {
            content.push(
                <div className="pager">
                    {hasPrev ?
                        <div className="previous"><a href={`${this.getUriForPage(this.page - 1)}`}>« Előző</a></div> :
                        null}
                    {hasNext ?
                        <div className="next"><a href={`${this.getUriForPage(this.page + 1)}`}>Következő »</a></div> :
                        null}
                </div>
            );
        }

        return this.template({
            headingClasses: ['home-page-heading'],
            title: this.title, 
            subtitle: this.subtitle,
            coverImage: this.coverImage,
            postContent: <>{content}</>,
            footer: null
        });
    }
}
