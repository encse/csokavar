import * as React from 'react';
import styled from 'styled-components';
import {TwitterLink, LinkedInLink, GitHubLink, SearchIcon} from './fontAwesame';

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
    text-shadow: 0px 0px 1px #000000, 0px 0px 10px rgba(0,0,0,0.1);
   
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
    @media only screen and (max-width:600px) {
        background: #1e1e1e;
        color: #c8c8c8;
    }

    @media only screen and (min-width:601px) {
        max-width: 800px;
    }

`;

const SiteTitle = styled.a`
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

    &,
    &:before,
    &:after {
        position: relative;
        width: 16px;
        height: 3px;
        background-color: #c8c8c8;
        border-radius: 2px;
        transition-property: transform;
        transition-duration: .15s;
        transition-timing-function: ease;
    }
    
    top: -2px;

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
        top: 3px;
        position: relative;

    }
`;

const Menu = styled.div`

    @media only screen and (max-width:600px) {
        display: none;

        ${SiteHeading}.active & {
            display: flex;
            flex-direction: column;
            order: 10;
            width: 100%;
            padding-left: 16px;
        }
    }
`;

const MenuItem = styled.a`
    padding: 8px 16px;
`;

export const PageComponent: React.FC<PageProps> = (props: PageProps) => {
    return <>
        <Header style={props.featuredImage}>
            <SiteHeading className="site-heading"> 
                <HamburgerButton data-hamburger-menu>
                    <HamburgerIcon />
                </HamburgerButton>
                <SiteTitle href="/">Csókavár</SiteTitle>
                <Menu>
                    <MenuItem href="/">Blog</MenuItem>
                    <MenuItem href="/projects/">Projektek</MenuItem>
                    <MenuItem href="/konyvespolc/">Könyvespolc</MenuItem>
                    <MenuItem href="/about/">About</MenuItem>
                </Menu>
                <a href="/search/"><SearchIcon /></a>
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
