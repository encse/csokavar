import { ServerStyleSheet } from 'styled-components';
import { AssetManager, ImageAsset, JsAsset } from '../assets';
import React from 'react';
import { PageComponent } from '../components/page';
import { baseStyle } from './baseStyle';
import ReactDOMServer from 'react-dom/server';

export type TemplateProps = {
    assetManager: AssetManager,
    homePageHeading: boolean,
    title: string,
    subtitle: React.ReactChild,
    coverImage: ImageAsset,
    postContent: React.ReactChild
    footer: React.ReactChild,
    styleSheet?: ServerStyleSheet | null,
}

export function template(props: TemplateProps): string {
    const coverImage = props.coverImage;
    const featuredImage: React.CSSProperties = {
        backgroundImage: `url(${coverImage.url})`,
        backgroundColor: coverImage.dominantColor
    };

    const styleSheet = props.styleSheet ?? new ServerStyleSheet();
    let result =  "<!DOCTYPE html>" + renderReactChild(
        <Template title={props.title} js={props.assetManager.lookupAll("", "jsAsset")}>
            <PageComponent
                featuredImage={featuredImage}
                footer={props.footer}
                postContent={props.postContent}
                subtitle={props.subtitle}
                title={props.title}
                homePageHeading={props.homePageHeading}
            />
        </Template>, styleSheet);
    return result
        .replace('{{ style }}', styleSheet.getStyleTags() + baseStyle);
};

function renderReactChild(child: React.ReactChild | null, styleSheet: ServerStyleSheet): string {
    if (child == null) {
        return '';
    } else if (typeof (child) === 'string') {
        return child;
    } else if (typeof (child) === 'number') {
        return '' + child;
    } else {
        return ReactDOMServer.renderToStaticMarkup(styleSheet.collectStyles(child));
    }
}

const Template: React.FC<{title: string, js: JsAsset[]}> = (props) => 
    <html>
        <head>
            <meta charSet="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link
                rel="stylesheet"
                href="https://fonts.googleapis.com/css2?family=Noto+Sans:ital,wght@0,400;0,700;1,400;1,700&display=swap"
            />
            {[props.js.map(asset =><script src={asset.url.toString()} async></script>)]}
            {"{{ style }}"}
            <title>{props.title} &#8211; Csókavár</title>
        </head>
        <body>
            { props.children }
        </body>
    </html>;
