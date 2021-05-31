import MarkdownIt from 'markdown-it';
import Token from 'markdown-it/lib/token';
import ReactDOMServer from 'react-dom/server';
import * as React from 'react';
import { AssetManager } from '../assets';
import { resolve } from 'url';
import { RenderContext } from './RenderContext';

export function renderImage(token: Token, ctx: RenderContext) {
  let src = token.attrGet('src');
  if (!src.startsWith('http://') && !src.startsWith('https://')) {
    let asset = ctx.assetManager.lookup(resolve(ctx.fpat, token.attrGet("src")), "imageAsset");
    let src = asset.url.toString();
    const h = Math.min(asset.height, 375);
    const w = h / asset.height * asset.width;
    return (
          <img
              style={{ background: asset.dominantColor, width: w, height: h}}
              src={src}
              className="image"
          />
   );
  } else {
    return <img src={src} className="image" />;
  }
}