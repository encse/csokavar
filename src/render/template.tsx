import { ServerStyleSheet } from 'styled-components';
import { AssetManager, ImageAsset } from '../assets';
import React from 'react';
import { PageComponent } from './page';
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

export function renderTemplate(props: TemplateProps): string {
    const featuredImage: React.CSSProperties = {
        backgroundImage: `url(${props.coverImage.dstPath})`,
        backgroundColor: props.coverImage.dominantColor
    };

    const styleSheet = props.styleSheet ?? new ServerStyleSheet();

    let result = ReactDOMServer.renderToStaticMarkup(
        styleSheet.collectStyles(<PageComponent
            scripts={props.assetManager.lookupAll("", "jsAsset")}
            styles={props.assetManager.lookupAll("", "cssAsset")}
            featuredImage={featuredImage}
            footer={props.footer}
            postContent={props.postContent}
            subtitle={props.subtitle}
            title={props.title}
            homePageHeading={props.homePageHeading}
        />));

    return "<!DOCTYPE html>" + result.replace('{{ style }}', styleSheet.getStyleTags());
};
