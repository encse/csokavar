import MarkdownIt from 'markdown-it';
import metadataParse from 'markdown-yaml-metadata-parser';
import { slugify, formatDate, zeroPad } from "./util";

export class PostList {
    readonly htmlContent: string;
    constructor(template: string, title: string, posts: Post[]) {
        let content = '';
        for (let post of posts) {
            content += `<article>
                <header>
                    <h2 class="title"><a href="${post.uri}" rel="bookmark">${post.title}</a></h2>
                    <p class="subtitle">${formatDate(post.date)}</p>
                </header>
                <section>
                    ${post.excerpt}
                </section>
            </article>`
        }

        this.htmlContent = template
            .replace('{{ title }}', title)
            .replace('{{ subtitle }}', '')
            .replace('{{ featured-image }}', posts[0].coverImage)
            .replace('{{ post-content }}', content)
            .replace('{{ footer }}', '');
    }
}

export class Page {
    readonly title: string;
    readonly coverImage: string;
    readonly date: Date;
    readonly tags: string[];
    readonly htmlContent: string;
    readonly slug: string;

    constructor(template: string, md: string) {
        const { metadata, content } = metadataParse(md);
        this.date = new Date(metadata.date);
        this.title = metadata.title;
        this.coverImage = metadata.coverImage;
        this.tags = metadata.tags || [];
        this.slug = metadata.slug || slugify(this.title);

        const markdownIt = MarkdownIt({
            html: true
        });

        const postContent = markdownIt.render(content);

        this.htmlContent = template
            .replace('{{ title }}', metadata.title)
            .replace('{{ subtitle }}', '')
            .replace('{{ featured-image }}', `images/${metadata.coverImage}`)
            .replace('{{ post-content }}', postContent)
            .replace('{{ footer }}', '');
    }
}

export class Post {
    readonly title: string;
    readonly coverImage: string;
    readonly date: Date;
    readonly tags: string[];
    readonly htmlContent: string;
    readonly slug: string;
    readonly uri: string;
    readonly excerpt: string;


    constructor(template: string, md: string) {
        const { metadata, content } = metadataParse(md);
        this.date = new Date(metadata.date);
        this.title = metadata.title;
        this.coverImage = `images/${metadata.coverImage}`;
        this.tags = metadata.tags || [];
        this.slug = metadata.slug || slugify(this.title);

        const markdownIt = MarkdownIt({
            html: true
        });

        const postContent = markdownIt.render(content);
        let footer = '';
        if (this.tags.length > 0) {
            const stTags = this.tags.map(tag => `<a href="/blog/tag/${tag}/" rel="tag">${tag}</a>`).join(' ');
            footer = `<p><span class="tags-icon"></span> ${stTags}</p>`;
        }

        this.htmlContent = template
            .replace('{{ title }}', metadata.title)
            .replace('{{ subtitle }}', `<time class="posted-on" datetime="${this.date.toISOString()}">${formatDate(this.date)}</time>`)
            .replace('{{ featured-image }}', `images/${metadata.coverImage}`)
            .replace('{{ post-content }}', postContent)
            .replace('{{ footer }}', footer);

        this.uri = `blog/${zeroPad(this.date.getFullYear(), 4)}/${zeroPad(this.date.getMonth() + 1, 2)}/${this.slug}/`;

        this.excerpt = '';

        for (let block of markdownIt.parse(content, {})) {
            if (block.content != '') {
                this.excerpt = `<p>
                    ${markdownIt.renderer.render([block], {html: true}, {})}
                    <a href="${this.uri}" rel="bookmark">…</a>
                    </p>`;
                break;
            }
        }
    }
}
