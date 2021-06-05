import Token from 'markdown-it/lib/token';
import * as React from 'react';
import { resolve } from 'url';
import { RenderContext } from './renderContext';
import styled from 'styled-components';
import { ImageAsset } from '../assets';

const maxHeight = 375;

const Image = styled.img`
    clear: both;
    display: block;
    margin-left: auto;
    margin-right: auto;
    max-height: ${maxHeight}px;
    width: auto;
    height: auto;
    max-width: 100%;
`;

export function renderImageAsset(asset: ImageAsset){
    let src = asset.url.toString();
    const h = Math.min(asset.height, maxHeight);
    const w = h / asset.height * asset.width;
    return (
        <Image
            style={{ background: asset.dominantColor }}
            data-preload
            width={w}
            height={h}
            src={src}
        />
    );
}

export function renderImage(token: Token, ctx: RenderContext) {
    let src = token.attrGet('src');

    if (!src.startsWith('http://') && !src.startsWith('https://')) {
        let asset = ctx.assetManager.lookup(resolve(ctx.fpat, token.attrGet("src")), "imageAsset");
        return renderImageAsset(asset);
    } else {
        return <Image src={src} />;
    }
}