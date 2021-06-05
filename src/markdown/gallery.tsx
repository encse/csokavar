import StateBlock from 'markdown-it/lib/rules_block/state_block';
import MarkdownIt from 'markdown-it';
import Token from 'markdown-it/lib/token';
import * as React from 'react';
import { resolve } from 'url';
import { RenderContext } from './renderContext';
import { renderImageAsset } from './image';
import styled from 'styled-components';

const Gallery = styled.div.attrs(() => ({
    'data-gallery': true,
}))`
    position: relative;
    height: 800px;

    img {
        position: absolute;
        object-fit: cover;
        max-height: unset;
        transition: 1s ease-in-out;
    }
`;

export function renderGallery(token: Token, ctx: RenderContext) {
    const src: string[] = JSON.parse(token.attrGet("src"));

    return  React.createElement(Gallery, {},
        ...src.map(item => {
            const asset = ctx.assetManager.lookup(resolve(ctx.fpat, item), "imageAsset");
            return renderImageAsset(asset);
        })
    );
}

export default function plugin(md: MarkdownIt) {

    function process(state: StateBlock, startLine: number, endLine: number, silent: boolean) {

        function getLine(i: number) {
            return state.src.slice(state.bMarks[i], state.eMarks[i]).trim();
        }

        let i = startLine;
        const items: string[] = [];
        if (getLine(i) != '[gallery]') {
            return false;
        }
        i++;
        while (getLine(i) != '[/gallery]') {
            items.push(getLine(i).trim());
            i++;
            if (startLine > endLine) {
                return false;
            }
        }
        state.line = i + 1;

        if (!silent) {
            const token = state.push("gallery", "", 0);
            token.attrs = [["src", JSON.stringify(items)]];
        }

        return true;
    }

    md.block.ruler.before("table", "gallery", process);
}
