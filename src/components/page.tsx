import * as React from 'react';
import styled from 'styled-components';
import {TwitterLink, LinkedInLink, GitHubLink} from './fontAwesame';

export type PageProps = {
    featuredImage: React.CSSProperties,
    title: React.ReactChild,
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

export const PageComponent: React.FC<PageProps> = (props: PageProps) => {
    return <>
        <Header className="header" style={props.featuredImage}>
            <SiteHeading className="site-heading"> <SiteTitle href="/">Csókavár</SiteTitle>
                <nav role="menubar">
                    <ul>
                        <li><a href="/">Blog</a></li>
                        <li><a href="/projects/">Projektek</a></li>
                        <li><a href="/konyvespolc/">Könyvespolc</a></li>
                        <li><a href="/about/">About</a></li>
                    </ul>
                </nav>
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
