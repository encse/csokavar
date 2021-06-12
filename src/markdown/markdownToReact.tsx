import MarkdownIt from 'markdown-it';
import * as React from 'react';
import markdownKatex from '@iktakahiro/markdown-it-katex';
import * as iframePlugin from './iframe';
import markdown_it_youtube_plugin from './youtube';
import markdown_it_gallery_plugin, { renderGallery } from './gallery';
import { AssetManager } from '../assets';
import Token from 'markdown-it/lib/token';
import { RenderContext } from './renderContext';
import { renderImage } from './image';
import { snakeToCamel } from '../util';
import {resolve} from 'url';
import { renderMath } from './math';


function getProps(attrs: [string, string][] | null) {
    let props = {};
    for (let [name, value] of attrs ?? []) {
        name = snakeToCamel(name);
        if (name === "frameborder") {
            name = "frameBorder";
        }

        if (name === "style") {
            let styles = {};
            for (let [propName, prop] of value.split(';').map(v => v.split('='))) {
                styles[snakeToCamel(propName)] = prop;
            }
            props[name] = styles;
        } else {
            props[name] = value;
        }
    }
    return props;
}


export function render(tokens: Token[], ctx: RenderContext, markdownIt: MarkdownIt): React.ReactElement<any> {

    let stack: React.ReactElement<any>[][] = [[]];
    let tokenStack: Token[] = [];
    function children() {
        return stack[stack.length - 1];
    }

    for (let token of tokens) {
        if (token.type.endsWith("_open")) {
            tokenStack.push(token);
            stack.push([]);
        } else if (token.type === "inline") {
            children().push(render(token.children, ctx, markdownIt));
        } else if (token.type === "text") {
            children().push(<>{token.content}</>);
        } else if (token.type === "html_block") {
            if (!ctx.excerpt) {
                children().push(<div dangerouslySetInnerHTML={{ __html: token.content }} />);
            }
        } else if (token.type === "gallery") {
            if (!ctx.excerpt) {
                children().push(renderGallery(token, ctx));
            }
        } else if (token.type === iframePlugin.tokenId) {
            children().push(iframePlugin.render(token, ctx));
        } else if (token.type === "image") {
            children().push(renderImage(token, ctx));
        } else if (token.tag === "math") {
            children().push(renderMath(token, markdownIt));
        } else if (token.type === "code_inline") {
            children().push(<code>{token.content}</code>);
        } else if (token.type === "fence") {
            children().push(<pre><code>{token.content}</code></pre>);
        }else {
            if (token.content != null && token.content != ''){
                throw new Error('content is not empty');
            }
            if (token.tag == '') {
                throw new Error(`invalid token ${token.type}}`);
            }
            if (token.type.endsWith("_close")) {

                const content = stack.pop();
                const tokenOpen = tokenStack.pop();

                if (token.tag === 'a') {
                    let href = tokenOpen.attrGet('href');
                    if (
                        !href.startsWith('http://') && 
                        !href.startsWith('https://') &&
                        !href.startsWith('ftp://') &&
                        !href.startsWith('mailto:')
                    ) {
                        const asset = ctx.assetManager.lookupAsset(
                                resolve(ctx.fpat, href)
                            );
                        tokenOpen.attrSet('href', asset.url.toString());
                    }
                } 

                children().push(
                    React.createElement(
                        token.tag,
                        getProps(tokenOpen.attrs),
                        ...content)
                );
            } else {
                children().push(
                    React.createElement(token.tag, getProps(token.attrs))
                );
            }
        }
    }

    return React.createElement(React.Fragment, {}, ...stack.flat());
}


export function markdownToTextContent(md: string): string {
    const markdownIt = MarkdownIt({ html: true })
        .use(markdownKatex, { output: "html", errorColor: "#cc0000" })
        .use(iframePlugin.plugin)
        .use(markdown_it_youtube_plugin)
        .use(markdown_it_gallery_plugin)
        ;

    const tokens = markdownIt.parse(md, {});
    let text = '';
    for(let token of tokens){
        if (token.type == 'inline') {
            text += token.content;
        }
    }
    return text;
}

export function markdownToReact(md: string, assetManager: AssetManager, fpat: string): React.ReactElement<any> {
    const markdownIt = MarkdownIt({ html: true })
        .use(markdownKatex, { output: "html", errorColor: "#cc0000" })
        .use(iframePlugin.plugin)
        .use(markdown_it_youtube_plugin)
        .use(markdown_it_gallery_plugin)
        ;

    return <div>{render(markdownIt.parse(md, {}), {assetManager, fpat, excerpt: false}, markdownIt)}</div>;
}

export function markdownToReactExcerpt(md: string, uri: string, assetManager: AssetManager, fpat: string): React.ReactElement<any> {

    const markdownIt = MarkdownIt({ html: true })
        .use(markdownKatex, { output: "html", errorColor: "#cc0000" })
        .use(iframePlugin.plugin)
        .use(markdown_it_youtube_plugin)
        .use(markdown_it_gallery_plugin)
        ;

    for (let block of markdownIt.parse(md, {})) {
        if (block.content != '') {
            return (
                <p>
                    {render([block], {assetManager, fpat, excerpt: true}, markdownIt)}
                    <a href={uri} rel="bookmark">…</a>
                </p>
            );
        }
    }
    return <></>;
}