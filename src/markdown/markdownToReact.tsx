import MarkdownIt from 'markdown-it';
import * as React from 'react';
import markdownKatex from '@iktakahiro/markdown-it-katex';
import markdown_it_iframe_plugin from './markdown-it-iframe';
import markdown_it_youtube_plugin from './markdown-it-youtube';
import markdown_it_gallery_plugin, { renderGallery } from './markdown-it-gallery';
import { AssetManager } from '../assets';
import Token from 'markdown-it/lib/token';
import { RenderContext } from './RenderContext';
import { renderImage } from './markdown-it-image';

function snakeToCamel(snake: string) {
    return (
        snake
            .split("-")
            .map(
                (part, i) =>
                    i == 0 ?
                        part :
                        part[0].toUpperCase() + part.substring(1))
            .join('')
    );
}

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


export function render(tokens: Token[], ctx: RenderContext): React.ReactElement<any> {

    let i = 0;
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
            children().push(render(token.children, ctx));
        } else if (token.type === "text") {
            children().push(<>{token.content}</>);
        } else if (token.type === "html_block") {
            children().push(<div dangerouslySetInnerHTML={{ __html: token.content }} />);
        } else if (token.type === "html_inline") {
            children().push(<>{token.content}</>);
        } else if (token.type === "gallery") {
            children().push(renderGallery(token, ctx));
        } else if (token.tag === "img") {
            children().push(renderImage(token, ctx));
        } else {
            if (token.tag == '') {
                throw new Error(`invalid token ${token.type}}`);
            }
            if (token.type.endsWith("_close")) {
                stack.push([
                    React.createElement(
                        token.tag,
                        getProps(tokenStack.pop().attrs),
                        stack.pop())
                ]);
            } else {
                stack.push([
                    React.createElement(token.tag, getProps(token.attrs))
                ]);
            }
        }
    }

    return <>{stack.flat()}</>;
}

export function markdownToReact(md: string, assetManager: AssetManager, fpat: string): React.ReactElement<any> {
    const markdownIt = MarkdownIt({ html: true })
        .use(markdownKatex, { output: "html", errorColor: "#cc0000" })
        .use(markdown_it_iframe_plugin)
        .use(markdown_it_youtube_plugin)
        .use(markdown_it_gallery_plugin)
        ;

    return <div>{render(markdownIt.parse(md, {}), {assetManager, fpat})}</div>;
}

export function markdownToReactExcerpt(md: string, uri: string, assetManager: AssetManager, fpat: string): React.ReactElement<any> {

    const markdownIt = MarkdownIt({ html: true })
        .use(markdownKatex, { output: "html", errorColor: "#cc0000" })
        .use(markdown_it_iframe_plugin)
        .use(markdown_it_youtube_plugin)
        .use(markdown_it_gallery_plugin)
        ;

    for (let block of markdownIt.parse(md, {})) {
        if (block.content != '') {
            return (
                <p>
                    {render([block], {assetManager, fpat})}
                    <a href={uri} rel="bookmark">…</a>
                </p>
            );
        }
    }
    return <></>;
}