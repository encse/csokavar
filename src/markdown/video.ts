import StateInline from 'markdown-it/lib/rules_inline/state_inline';
import MarkdownIt from 'markdown-it';

import Token from 'markdown-it/lib/token';
import * as React from 'react';
import { resolve } from 'url';
import { RenderContext } from './renderContext';

export function render(token: Token, ctx: RenderContext) {
    const src: string = token.attrGet("src");
    const asset = ctx.assetManager.lookup(resolve(ctx.fpat, src), "fileAsset");
    return React.createElement("center", {},
        React.createElement("video", {"width": "70%", "src": asset.dstPath, "controls": "controls"})
    );
}


export function plugin(md: MarkdownIt) {

    function process(state: StateInline, silent: boolean) {
        const rx = /\[video src="(.*)"\]/s;
        const slice: string = state.src.slice(state.pos, state.src.length)

        const m = slice.match(rx);
        if (!m) {
            return false;
        }

        state.pos += m[0].length;

        if (!silent) {
            console.log("xxxx", m[1])
            const token = state.push("video_embed", "", 0);
            token.attrs = [["src", m[1]]];
        }

        return true;
    }

    md.inline.ruler.before("text", "youtube", process)
}
