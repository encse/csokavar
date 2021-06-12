import metadataParse from 'markdown-yaml-metadata-parser';
import { slugify } from "../util";
import { AssetManager, ImageAsset } from '../assets';
import { markdownToReact } from '../markdown/markdownToReact';
import { resolve } from 'url';
import { PageTemplateProps, Template } from '../template/template';


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
        this.uri = '/' + slug + '/';

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
