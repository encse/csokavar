import { ServerStyleSheet } from 'styled-components';
import { AssetManager, ImageAsset } from '../assets';
import path from 'path';
import fs from 'fs';
import React from 'react';
import { PageComponent } from '../components/page';
import { baseStyle } from './baseStyle';
import ReactDOMServer from 'react-dom/server';

export type PageTemplateProps = {
    homePageHeading: boolean,
    title: string,
    subtitle: React.ReactChild,
    coverImage: ImageAsset,
    postContent: React.ReactChild
    footer: React.ReactChild,
    styleSheet?: ServerStyleSheet | null,
}

export type Template<T> = (t: T) => string;

export function getTemplate(fpatIn: string, assetManager: AssetManager){

    const templateHtml = fs.readFileSync(path.join(fpatIn, 'src/template/page.template.html'), 'utf8');

    return (props: PageTemplateProps) => {
        const coverImage = props.coverImage;
        const featuredImage: React.CSSProperties = {
            backgroundImage: `url(${coverImage.url})`,
            backgroundColor: coverImage.dominantColor
        };

        const styleSheet = props.styleSheet ?? new ServerStyleSheet();
        const page = renderReactChild(
            <PageComponent
                featuredImage={featuredImage}
                footer={props.footer}
                postContent={props.postContent}
                subtitle={props.subtitle}
                title={props.title}
                homePageHeading={props.homePageHeading}
            />, styleSheet);

        return templateHtml
            .replace('{{ site.js }}', assetManager.lookup('site/assets/site.js', "jsAsset").url.toString())
            .replace('{{ style }}', styleSheet.getStyleTags() + baseStyle)
            .replace('{{ page }}', page)
            .replace('{{ title }}', props.title);
    };
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
