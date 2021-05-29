import MarkdownIt from 'markdown-it';
import Token from 'markdown-it/lib/token';
import ReactDOMServer from 'react-dom/server';
import * as React from 'react';
import { AssetManager } from '../assets';
import {resolve} from 'url';

type ImagePluginOption = {
  fpat: string,
  assetManager: AssetManager
}

export default function plugin(md: MarkdownIt, options: ImagePluginOption) {
  const {fpat, assetManager} = options;

  function imageToken(tokens: Token[], idx: number, options, env, self) {

    const token = tokens[idx];
    let src = token.attrGet('src');
    if (!src.startsWith('http://') && !src.startsWith('https://')) {
      let asset = assetManager.lookup(resolve(fpat, token.attrGet("src")), "imageAsset");
      let src = asset.url.toString();
      return ReactDOMServer.renderToStaticMarkup(<img style={{background: asset.dominantColor}} src={src} className="image" />);
    } else {
      return ReactDOMServer.renderToStaticMarkup(<img src={src} className="image" />);
    }
  };

  md.renderer.rules['image'] = imageToken;
}
