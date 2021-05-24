import MarkdownIt from 'markdown-it';
import Token from 'markdown-it/lib/token';
import ReactDOMServer from 'react-dom/server';
import * as React from 'react';

export default function plugin(md: MarkdownIt) {

  function imageToken(tokens: Token[], idx: number, options, env, self) {

    const token = tokens[idx];
    return ReactDOMServer.renderToStaticMarkup(<img src={token.attrGet("src")} className="image" />);
  };

  md.renderer.rules['image'] = imageToken;
}
