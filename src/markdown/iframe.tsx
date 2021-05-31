import StateInline from 'markdown-it/lib/rules_inline/state_inline';
import Token from 'markdown-it/lib/token';
import * as React from 'react';
import { RenderContext } from './renderContext';
import styled from 'styled-components';
import MarkdownIt from 'markdown-it';

export const tokenId = "iframe 4:3"

export function addIframeToken(state: StateInline, src: string) {
    const token = state.push(tokenId, "", 0);
    token.attrs = [["src", src]];
}

const IframeContainer = styled.div`
    max-height: 375px;
    position: relative;
    overflow: hidden;
`;

const Iframe = styled.iframe`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: 0;
`;

export function render(token: Token, ctx: RenderContext) {
    let src = token.attrGet('src');

    return <IframeContainer>
        <div style={{ paddingTop: '75%', position: 'relative' }}>
            <div style={{ position: 'absolute', top: 0, bottom: 0, left: 0, right: 0 }}></div>
        </div>
        <div style={{ position: 'absolute', top: 0, bottom: 0, left: 0, right: 0, textAlign: 'center' }}>
            <div style={{ display: 'inline-block', height: '100%', position: 'relative' }}>
                <img
                    style={{ height: '100%' }}
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAADCAQAAAAe/WZNAAAADklEQVR42mNkgAJGDAYAAFEABCaLYqoAAAAASUVORK5CYII="
                />
                <Iframe src={src} frameBorder={0} />
            </div>
        </div>

    </IframeContainer>;
}

export function plugin(md: MarkdownIt) {

    function process(state: StateInline, silent: boolean) {
        const rx = /\[iframe src="(.*)"\]/s;
        const slice: string = state.src.slice(state.pos, state.src.length)

        const m = slice.match(rx);
        if (!m) {
            return false;
        }

        state.pos += m[0].length;

        if (!silent) {
            addIframeToken(state, m[1]);
        }

        return true;
    }

    md.inline.ruler.before("text", "iframe", process)
}
