import MarkdownIt from 'markdown-it';
import metadataParse from 'markdown-yaml-metadata-parser';
import { slugify, formatDate, zeroPad } from "./util";
import * as React from 'react';
import { ParsedPath } from 'path';
import mjAPI from 'mathjax-node';
import mk from 'markdown-it-katex';


function decodeEntities(encodedString: string) {
    let translate_re = /&(nbsp|amp|quot|lt|gt);/g;
    let translate = {
        "nbsp":" ",
        "amp" : "&",
        "quot": "\"",
        "lt"  : "<",
        "gt"  : ">"
    };
    return encodedString.replace(translate_re, function(match, entity) {
        return translate[entity];
    }).replace(/&#(\d+);/gi, function(match, numStr) {
        let num = parseInt(numStr, 10);
        return String.fromCharCode(num);
    });
}


function typeset(encodedString: string): Promise<string> {
    let st = decodeEntities(encodedString)

    mjAPI.config({
        MathJax: {
        }
    });
    
    mjAPI.start();
    
    return new Promise<string>((resolve, reject) => {
        
        let format = "TeX"
        if (st.startsWith("$$")){
            st = st.substring(2);
        }
        if (st.endsWith("$$")){
            st = st.substring(0, st.length - 2);
        }
        if (st.startsWith("[latex]")){
            format="inline-TeX";
            st = st.substring("[latex]".length);
        }
        if (st.endsWith("[/latex]")) {
            st = st.substring(0, st.length - "[/latex]".length);
        }

        mjAPI.typeset({
            math: st,
            format: format,
            html: true,
          }, function (data: any) {
            if (!data.errors) {
                resolve(data.html)
            } else {
                reject(data.errors)
            }
          });
    });
}


export type PageTemplateProps = {
    headingClasses: string[],
    title: React.ReactChild,
    subtitle: React.ReactChild,
    featuredImage: string,
    postContent: React.ReactChild
    footer:React.ReactChild
}

type Template<T> = (t:T) => string;

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

    async render(): Promise<string>{
        return this.#htmlContent
    }
}

async function markdownToReact(md: string): Promise<React.ReactElement<any>>{
    const markdownIt = MarkdownIt({
        html: true
    });
    markdownIt.use(mk);
    


    let html = markdownIt.render(md);

    if (md.includes('$$'))  
        console.log(html);

    
    // for (const rx of [/\[latex\].*?\[\/latex\]/sg, /\$\$.*?\$\$/sg]){
    //     let matches = [...html.matchAll(rx)].reverse();
    //     for (let match of matches) {

    //         const tex = match[0];

    //         console.log(tex);
    //         const mathjax = await typeset(tex);
    //         html = html.substring(0, match.index) + mathjax + html.substring(match.index + tex.length);
    //     }
    // }

    return <div dangerouslySetInnerHTML={{__html: html}} />
}

export class Page {
    readonly title: string;
    readonly subtitle: string;
    readonly coverImage: string;
    readonly date: Date;
    readonly tags: string[];
    readonly #htmlContent: string;
    readonly slug: string;
    readonly uri: string;
    readonly #mdContent: string;
    readonly #template: Template<PageTemplateProps>;

    constructor(
        template: Template<PageTemplateProps>, 
        md: string, 
        public readonly assets: readonly ParsedPath[]
    ) {
        const { metadata, content } = metadataParse(md);
        this.date = new Date(metadata.date);
        this.title = metadata.title;
        this.subtitle = metadata.subtitle;
        this.coverImage = metadata.coverImage;
        this.tags = metadata.tags || [];
        this.slug = metadata.slug || slugify(this.title);
        this.uri = this.slug;
        this.#template = template;
        this.#mdContent = content;
    }

    async render(): Promise<string> {
        const html = await markdownToReact(this.#mdContent);
        return this.#template(
            {
                headingClasses: ['home-page-heading'],
                title: this.title, 
                subtitle: this.subtitle, 
                featuredImage: `images/${this.coverImage}`,
                postContent: html,
                footer: null
            }
        );
    }
}

export class Post {
    readonly title: string;
    readonly coverImage: string;
    readonly date: Date;
    readonly tags: string[];
    readonly #htmlContent: string;
    readonly #mdContent: string;
    readonly #template: Template<PageTemplateProps>;
    readonly slug: string;
    readonly uri: string;
    readonly excerpt: React.ReactElement<any>;


    constructor(
        template: Template<PageTemplateProps>, 
        md: string, 
        public readonly assets: readonly ParsedPath[]
    ) {
        const { metadata, content } = metadataParse(md);
        this.date = new Date(metadata.date);
        this.title = metadata.title;
        this.coverImage = `images/${metadata.coverImage}`;
        this.tags = metadata.tags || [];
        this.slug = metadata.slug || slugify(this.title);

        let footer: React.ReactElement = null;
        if (this.tags.length > 0) {
            footer = <p>
                <span className="tags-icon" />
                {this.tags.map((tag, i) => [
                    i == 0 ? ' ' : ', ',
                    <a href={`/blog/tag/${tag}/`} rel="tag">{tag}</a>
                ])}
            </p>
        }

        this.#template = template;
        this.#mdContent = content;

        this.uri = `/blog/${zeroPad(this.date.getFullYear(), 4)}/${zeroPad(this.date.getMonth() + 1, 2)}/${this.slug}/`;

        this.excerpt = <></>;

        const markdownIt = MarkdownIt({
            html: true
        });
        
        for (let block of markdownIt.parse(content, {})) {
            if (block.content != '') {
                this.excerpt = 
                    <p>
                        <span dangerouslySetInnerHTML={{__html:markdownIt.renderer.render([block], {html: true}, {})} }/>
                        <a href={this.uri} rel="bookmark">…</a>
                    </p>;
                break;
            }
        }
    }

    async render(): Promise<string>{
        const html = await markdownToReact(this.#mdContent);
        return this.#template(
            {
                headingClasses: ['home-page-heading'],
                title: this.title, 
                subtitle: <time className="posted-on" dateTime={this.date.toISOString()}>{formatDate(this.date)}</time>, 
                featuredImage: `images/${this.coverImage}`,
                postContent: html,
                footer: null
            }
        );
    }
}
