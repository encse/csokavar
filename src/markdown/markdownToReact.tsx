import MarkdownIt from 'markdown-it';
import * as React from 'react';
import markdownKatex from '@iktakahiro/markdown-it-katex';
import markdown_it_iframe_plugin from './markdown-it-iframe';
import markdown_it_youtube_plugin from './markdown-it-youtube';
import markdown_it_gallery_plugin from './markdown-it-gallery';
import markdown_it_image_plugin from './markdown-it-image';
import { AssetManager } from '../assets';

export function markdownToReact(md: string, assetManager: AssetManager, fpat: string): React.ReactElement<any> {
    const markdownIt = MarkdownIt({html: true})
        .use(markdownKatex, { output: "html",  errorColor: "#cc0000" })
        .use(markdown_it_iframe_plugin)
        .use(markdown_it_youtube_plugin)
        .use(markdown_it_gallery_plugin, { assetManager: assetManager, fpat: fpat })
        .use(markdown_it_image_plugin, { assetManager: assetManager, fpat: fpat });
    let html = markdownIt.render(md);
    return <div dangerouslySetInnerHTML={{ __html: html }} />;
}

export function markdownToReactExcerpt(md: string, uri: string): React.ReactElement<any>{

    const markdownIt = MarkdownIt({html: true})
        .use(markdownKatex, { output: "html",  errorColor: "#cc0000" })

    for (let block of markdownIt.parse(md, {})) {
        if (block.content != '') {
            return (
                <p>
                    <span dangerouslySetInnerHTML={{ __html: markdownIt.renderer.render([block], { html: true }, {}) }} />
                    <a href={uri} rel="bookmark">…</a>
                </p>
            );
        }
    }
    return <></>;
}