import { formatDate } from "../util";
import * as React from 'react';
import path from 'path';
import { AssetManager, ImageAsset } from "../assets";
import styled from 'styled-components';
import { Post } from "./post";
import { renderTemplate } from "../render/template";

const Title = styled.h2``;

const Subtitle = styled.p`
    margin-top: 0;
    font-variant: all-small-caps;
`;

const Pager = styled.div`
    display: flex;
    padding: 0;
    margin: 0;
`;

const PageLink = styled.a`
    font-weight: 700;
    letter-spacing: 1px;
    text-transform: uppercase;
    font-size: 16px;
    line-height: 24px;
    text-decoration: none;
`;

const PreviousPage = styled(PageLink)`
`;

const NextPage = styled(PageLink)`
    flex-grow: 1;
    text-align: right;
`;

export class PostList {

    readonly uri: string;

    constructor(
        private readonly assetManager: AssetManager,
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

    static renderItem(post: Post) {
        return <article>
            <header>
                <Title><a href={post.uri} rel="bookmark">{post.title}</a></Title>
                <Subtitle>{formatDate(post.date)}</Subtitle>
            </header>
            <section>
                {post.excerpt}
            </section>
        </article>;
    }

    async render(): Promise<string> {
        let content: React.ReactElement<any>[] = [];
        for (let post of this.posts) {
            content.push(PostList.renderItem(post));
        }

        const hasPrev = this.page > 1;
        const hasNext = this.postCount / this.posts.length >= this.page + 1;

        if (hasPrev || hasNext) {
            content.push(
                <Pager>
                    {hasPrev ?
                        <PreviousPage href={`${this.getUriForPage(this.page - 1)}`}>« Előző</PreviousPage> :
                        null}
                    {hasNext ?
                        <NextPage href={`${this.getUriForPage(this.page + 1)}`}>Következő »</NextPage> :
                        null}
                </Pager>
            );
        }

        return renderTemplate({
            assetManager: this.assetManager,
            homePageHeading: true,
            title: this.title, 
            subtitle: this.subtitle,
            coverImage: this.coverImage,
            postContent: React.createElement(React.Fragment, {}, ...content),
            footer: null
        });
    }
}
