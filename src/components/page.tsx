import * as React from 'react';
import styled from 'styled-components';
import {TwitterLink, LinkedInLink, GitHubLink} from './fontAwesame';

export type PageProps = {
    featuredImage: React.CSSProperties,
    title: string,
    subtitle: React.ReactChild,
    postContent: React.ReactChild,
    footer: React.ReactChild,
    homePageHeading: boolean,
}

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

    @media only screen and (max-width:600px) {
        background: #1e1e1e;
        color: #c8c8c8;
    }

    @media only screen and (min-width:601px) {
        position: absolute;
        padding: 16px;
        display: flex;
        max-width: 800px
    }
`;

const SiteTitle = styled.a`
    @media only screen and (max-width:600px) {
        padding: 16px;
        display: inline-block
    }
`;


const PageHeading = styled.div`
    display: flex;
    flex-direction: column;
    margin: auto;
    color: #fff;
    overflow: hidden;
    max-width: 800px;
    padding: 0 16px;
    width: 100%;
`;

const PageTitle = styled.h1`
    margin: 0;
`;

const PageSubTitle = styled.p`
    margin: 0;
    margin-top: 8px;
`;

const HomePageHeading = styled(PageHeading)`
    align-items: center;
`;

const HomePageTitle = styled(PageTitle)`
    font-size: var(--xxl-text-size);
    line-height: 1.2;
    text-align: center;
`;

const HomePageSubTitle = styled(PageSubTitle)`
    :before {
        content: "";
        display: block;
        border-top: 2px solid #fff;
        box-shadow: 0 0 0 .5px #c8c8c8;
        width: 50%;
        margin: 16px auto;
    }
`;

const ArticleFooter = styled.footer`
    font-variant: all-small-caps;
`;

const Footer = styled.footer`
    color: #c8c8c8;
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

const StyledMenu = styled.span`
    width: 100%;
    @media only screen and (max-width:600px) {
        nav {
            width: 100%;
            position: absolute;
            flex-direction: column;
        }

        ul {
            margin: 0;
            padding: 0;
            display: flex;
            flex-direction: column;
            list-style: none;
            width: 100%;
            overflow: hidden;
            float: left;
            background: #1e1e1e;
            max-height: 0px;
            transition: max-height .2s ease-in-out;
        }

        &.active ul {
            max-height: 200px;
        }

        a {
            width: 100%;
            display: block;
        }

        li {
            padding: 8px 16px;

            &:last-child {
                padding-bottom: 24px;
            }
        }

    }

    @media only screen and (min-width:601px) {
        nav {
            display: flex;
            flex-direction: row-reverse;
            flex-grow: 1;
        }

        ul {
            margin: 0;
            padding: 0;
            display: flex;
            list-style: none;
        }

        li {
            padding-left: 32px;
        }
    }
`;

const HamburgerButton = styled.button`
    display: none;

    @media only screen and (max-width:600px) {
        display: initial;
        padding: 16px;
        margin: 12px 0;
        user-select: none;
        cursor: pointer;
        font: inherit;
        background-color: transparent;
        border: 0;
        float: right;
        outline: 0;
        position: relative;
    }
`;

const HamburgerIcon = styled.span`

    display: block;
    top: 50%;
    transition-duration: .075s;
    transition-timing-function: cubic-bezier(.55, .055, .675, .19);
    left: 0;

    ${StyledMenu}.active & {
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
            transform: rotate(-90deg);
            transition: bottom .075s ease, transform .075s .12s cubic-bezier(.215, .61, .355, 1);
        }
    }

    &,
    &:before,
    &:after {
        width: 24px;
        height: 2px;
        background-color: #c8c8c8;
        border-radius: 2px;
        position: absolute;
        transition-property: transform;
        transition-duration: .15s;
        transition-timing-function: ease;
    }

    &:before {
        content: "";
        display: block;
        transition: top .075s .12s ease, opacity .075s ease;
        top: -6px;
    }

    &:after {
        content: "";
        display: block;
        transition: bottom .075s .12s ease, transform .075s cubic-bezier(.55, .055, .675, .19);
        bottom: -6px;
    }
`;


const Menu: React.FC = (props) => {
    return <StyledMenu>
            <HamburgerButton data-hamburger-menu>
                <HamburgerIcon />
            </HamburgerButton>
            <nav><ul>{props.children}</ul></nav>
        </StyledMenu>;
}

const MenuItem: React.FC<{href: string, title: string}> = (props) => {
    return <li><a href={props.href}>{props.title}</a></li>;
}

export const PageComponent: React.FC<PageProps> = (props: PageProps) => {
    return <>
        <Header style={props.featuredImage}>
            <SiteHeading className="site-heading"> <SiteTitle href="/">Csókavár</SiteTitle>
                <Menu>
                    <MenuItem href="/" title="Blog" />
                    <MenuItem href="/projects/" title="Projektek" />
                    <MenuItem href="/konyvespolc/" title="Könyvespolc" />
                    <MenuItem href="/about/" title="About" />
                </Menu>
              
            </SiteHeading>
            {
                props.homePageHeading ?
                    <HomePageHeading>
                        <HomePageTitle>{props.title}</HomePageTitle>
                        <HomePageSubTitle>{props.subtitle}</HomePageSubTitle>
                    </HomePageHeading>
                :
                    <PageHeading>
                        <PageTitle>{props.title}</PageTitle>
                        <PageSubTitle>{props.subtitle}</PageSubTitle>
                    </PageHeading>
            }
            
        </Header>
        <main>
            <article>
                <section>
                    {props.postContent}
                </section>
                <ArticleFooter>
                    {props.footer}
                </ArticleFooter>
            </article>
        </main>
        <Footer>
            <SocialLinks>
                <TwitterLink href="https://twitter.com/encse" />
                <LinkedInLink href="https://www.linkedin.com/in/ncsdavid/" />
                <GitHubLink href="https://github.com/encse" />
            </SocialLinks>
            <Copyright>2006 - {new Date().getFullYear()} csokavar.hu</Copyright>
        </Footer>
    </>
}
