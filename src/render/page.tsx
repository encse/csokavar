import * as React from 'react';
import styled, {createGlobalStyle} from 'styled-components';
import { JsAsset } from '../assets';
import { CssAsset } from '../assets';
import { backgroundColor, linkColor, textColor, xxlFontSize } from './consts';
import {fontFace as fontAwesome, TwitterLink, LinkedInLink, GitHubLink, SearchIcon} from './fontAwesame';

export type PageProps = {
    featuredImage: React.CSSProperties,
    title: string,
    subtitle: React.ReactChild,
    postContent: React.ReactChild,
    footer: React.ReactChild,
    homePageHeading: boolean,
    scripts: JsAsset[],
    styles: CssAsset[],
}

const GlobalStyle = createGlobalStyle`
    ${fontAwesome}

    * {
        box-sizing: border-box;
        --xxl-text-size: 80px;
    }

    @media only screen and (max-width:600px) {
        * {
            --xxl-text-size: 50px;
        }
    }

    b, strong, h1, h2, h3 {
        font-weight: 700;
    }

    h1, h2, h3, p {
        margin: 24px 0;
    }

    h1 {
        font-size: ${xxlFontSize};
        line-height: 1.2;
    }

    h2 {
        font-size: 24px;
        line-height: 32px;
    }

    h3 {
        font-size: 18px;
        line-height: 26px;
    }

    body {
        font-size: 18px;
        line-height: 26px;
        margin: 0;
        font-family: 'Noto Sans', sans-serif;
        background: ${backgroundColor};
        color: ${textColor};
    }

    a {
        color: inherit;
        text-decoration: underline;
    }

    a:hover {
        color: ${linkColor};
    }

    header a, h1 a, h2 a, h3 a {
        text-decoration: none;
    }
`;

const textShadowInHeader = `text-shadow: 0px 0px 1px #000000, 0px 0px 10px rgba(0,0,0,1)`;

const PageTitle = styled.h1`
    margin: 0;
    ${textShadowInHeader};
`;

const PageSubTitle = styled.p`
    margin: 0;
    margin-top: 8px;
    ${textShadowInHeader};
`;

const HeaderLink = styled.a`
    @media only screen and (min-width:601px) {
        ${textShadowInHeader}
    }
`;

const Header = styled.header`
    background-size: cover;
    background-position: center;
    display: flex;
    align-items: center;
    flex-direction: column;
   
    a {
        text-decoration: none;
    }


    @media only screen and (max-width:600px) {
        height: 50vh;
    }

    @media only screen and (min-width:601px) {
        height: 100vh;
        max-height: 450px;
        color: #fff;
    }
`;

const SiteHeading = styled.section`

    font-family: 'Noto Sans', sans-serif;
    font-weight: 700;
    letter-spacing: 1px;
    text-transform: uppercase;
    width: 100%;
    line-height: 24px;
    font-size: 16px;
    padding: 16px;

    display: flex;
    flex-wrap: wrap;
    position: absolute;
    z-index:100;
    
    @media only screen and (max-width:600px) {
        background: #1e1e1e;
    }

    @media only screen and (min-width:601px) {
        max-width: 800px;
    }

`;

const SiteTitle = styled(HeaderLink)`
    flex-grow: 1;
`;


const PageHeading = styled.div`
    display: flex;
    flex-direction: column;
    margin: auto;
    color: #fff;
    overflow: visible;
    max-width: 800px;
    padding: 0 16px;
    width: 100%;

    @media only screen and (max-width:600px) {
        padding-top: 32px;
    }
`;


const HomePageHeading = styled(PageHeading)`
    align-items: center;
`;

const HomePageTitle = styled(PageTitle)`
    font-size: ${xxlFontSize};
    line-height: 1.2;
    text-align: center;
`;

const HomePageSubTitle = styled(PageSubTitle)`
    :before {
        content: "";
        display: block;
        border-top: 2px solid #fff;
        box-shadow: 0 0 0 .5px ${textColor};
        width: 50%;
        margin: 16px auto;
    }
`;

const ArticleFooter = styled.footer`
    font-variant: all-small-caps;
`;

const Footer = styled.footer`
    display: flex;
    align-items: center;
    flex-direction: column;
`;

const StyledSocialLinks = styled.nav`
    font-size: 32px;
    line-height: 32px;

    a {
        text-decoration: none;
        display: inline-block;
        padding: 16px;
        margin: 0;
    }
`;

const Copyright = styled.p`
    font-size: 16px;
    line-height: 20px;
`;

const SocialLinks: React.FC = (props) => {
    return <StyledSocialLinks>
        {props.children}
    </StyledSocialLinks>;
} 

const HamburgerButton = styled.button`
    display: none;

    @media only screen and (max-width:600px) {
        display: initial;
        user-select: none;
        cursor: pointer;
        font: inherit;
        background-color: transparent;
        border: 0;
        outline: 0;
        position: relative;
        margin: 0;
        padding: 0;
        padding-right: 16px;
    }
`;

const HamburgerIcon = styled.span`

    display: block;
    transition-duration: .075s;
    transition-timing-function: cubic-bezier(.55, .055, .675, .19);

    ${SiteHeading}.active & {
        transform: rotate(45deg);
        transition-delay: .12s;
        transition-timing-function: cubic-bezier(.215, .61, .355, 1);

        &:before {
            top: 0;
            opacity: 0;
            transition: top .075s ease, opacity .075s .12s ease;
        }

        &:after {
            bottom: 0;
            transform: rotate(-90deg) translateX(6px);
            transition: bottom .075s ease, transform .075s .12s cubic-bezier(.215, .61, .355, 1);
        }
    }

    background-color: ${textColor};

    &,
    &:before,
    &:after {
        position: relative;
        width: 16px;
        height: 3px;
        border-radius: 2px;
        transition-property: transform;
        transition-duration: .15s;
        transition-timing-function: ease;
    }

    &:before,
    &:after {
        background-color: inherit;
        content: "";
        display: block;
    }
   
    
    top: -2px;

    &:before {

        transition: top .075s .12s ease, opacity .075s ease;
        top: -6px;

    }

    &:after {
        transition: bottom .075s .12s ease, transform .075s cubic-bezier(.55, .055, .675, .19);
        top: 3px;
        position: relative;

    }
`;

const Menu = styled.div`
    @media only screen and (max-width:600px) {
        display: none;
        width: 100%;
        padding-left: 16px;
        order: 10;

        ${SiteHeading}.active & {
            display: flex;
            flex-direction: column;
            padding-top: 8px;
        }
    }
`;

const MenuItem = styled(HeaderLink)`
    padding: 8px 16px;
`;

const StyledMain = styled.main`
    display: flex;
    flex-direction: column;
    max-width: 800px;
    padding: 16px;
    margin: auto;

    article {
        padding: 16px 0;
    }
`;

const StyledPostContent = styled.section`

    header h2 {
        margin-bottom: 0;
    }

    blockquote {
        margin: 0;
        padding-left: 16px;
        border-left: 8px solid ${textColor};
        font-style: italic;
        font-weight: 700;
    }

    pre code,
    .katex-display {
        display: block;
        background: #383838;
        padding: 16px;
        overflow: scroll;
        border: 1px solid #45a29e;
        border-radius: 4px
    }

`

const GoogleFonts: React.FC<{href:string}> = (props) => {
    return <>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <script dangerouslySetInnerHTML={{ __html:
            `</script><link rel="stylesheet" href="${props.href}" media="print" onload="this.media='all'"/><script>`
        }} />
    </>
}

const GoogleAnalytics = () => {
    return <>
        <script async src="https://www.googletagmanager.com/gtag/js?id=UA-203054-9"></script>
        <script dangerouslySetInnerHTML={{ __html:
            `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            
            gtag('config', 'UA-203054-9');`
        }} />
    </>;
}
export const PageComponent: React.FC<PageProps> = (props: PageProps) => {
    return <html>
        <head>
            <meta charSet="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" type="image/x-icon" href="/favicon/favicon.ico" />
            <link rel="icon" type="image/png" href="/favicon/favicon.png" />
            <link rel="search" type="application/opensearchdescription+xml" title="csokavar" href="/opensearchdescription.xml"></link>
            {[props.scripts.map(asset => <script src={asset.url.toString()} async></script>)]}
            {[props.styles.map(asset => <link rel="stylesheet" href={asset.url.toString()}></link>)]}
            {"{{ style }}"}
            <GoogleAnalytics />
            <GoogleFonts href="https://fonts.googleapis.com/css2?family=Noto+Sans:ital,wght@0,400;0,700;1,400;1,700&display=swap" />

            <title>{props.title} &#8211; Csókavár</title>
        </head>
        <body>
            <GlobalStyle />
            <Header style={props.featuredImage}>
                <SiteHeading className="site-heading"> 
                    <HamburgerButton data-hamburger-menu>
                        <HamburgerIcon />
                    </HamburgerButton>
                    <SiteTitle href="/">Csókavár</SiteTitle>
                    <Menu>
                        <MenuItem href="/projects/">Projektek</MenuItem>
                        <MenuItem href="/konyvespolc/">Könyvespolc</MenuItem>
                        <MenuItem href="/about/">About</MenuItem>
                    </Menu>
                    <HeaderLink href="/search/"><SearchIcon /></HeaderLink>
                </SiteHeading>
                {
                    props.homePageHeading ?
                        <HomePageHeading>
                            <HomePageTitle>{props.title}</HomePageTitle>
                            {props.subtitle && <HomePageSubTitle>{props.subtitle}</HomePageSubTitle>}
                        </HomePageHeading>
                    :
                        <PageHeading>
                            <PageTitle>{props.title}</PageTitle>
                            <PageSubTitle>{props.subtitle}</PageSubTitle>
                        </PageHeading>
                }
                
            </Header>
            <StyledMain>
                <article>
                    <StyledPostContent>
                        {props.postContent}
                    </StyledPostContent>
                    <ArticleFooter>
                        {props.footer}
                    </ArticleFooter>
                </article>
            </StyledMain>
            <Footer>
                <SocialLinks>
                    <TwitterLink href="https://twitter.com/encse" />
                    <LinkedInLink href="https://www.linkedin.com/in/ncsdavid/" />
                    <GitHubLink href="https://github.com/encse" />
                </SocialLinks>
                <Copyright>2006 - {new Date().getFullYear()} csokavar.hu</Copyright>
            </Footer>
        </body>
    </html>;
}
