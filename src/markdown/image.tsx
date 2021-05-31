import Token from 'markdown-it/lib/token';
import * as React from 'react';
import { resolve } from 'url';
import { RenderContext } from './renderContext';
import styled from 'styled-components';

const maxHeight = 375;

const Image = styled.img`
    clear: both;
    display: block;
    margin-left: auto;
    margin-right: auto;
    max-height: ${maxHeight}px;
`;

export function renderImage(token: Token, ctx: RenderContext) {
    let src = token.attrGet('src');

    if (!src.startsWith('http://') && !src.startsWith('https://')) {
        let asset = ctx.assetManager.lookup(resolve(ctx.fpat, token.attrGet("src")), "imageAsset");
        let src = asset.url.toString();
        const h = Math.min(asset.height, maxHeight);
        const w = h / asset.height * asset.width;
        return (
            <Image
                style={{ background: asset.dominantColor, width: w, height: h }}
                src={src}
            />
        );
    } else {
        return <Image src={src} />;
    }
}