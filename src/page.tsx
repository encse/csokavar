import * as React from 'react';

export type PageProps = {
    featuredImage: React.CSSProperties,
    title: React.ReactChild,
    subtitle: React.ReactChild,
    postContent: React.ReactChild,
    footer: React.ReactChild,
    headingClasses: string[]
}

export const PageComponent: React.FC<PageProps> = (props: PageProps) => {
    return <>
        <header className="header" style={props.featuredImage}>
            <section className="site-heading"> <a className="site-title" href="/">Csókavár</a>
                <nav role="menubar">
                    <ul>
                        <li><a href="/">Blog</a></li>
                        <li><a href="/projects/">Projektek</a></li>
                        <li><a href="/konyvespolc/">Könyvespolc</a></li>
                        <li><a href="/about/">About</a></li>
                    </ul>
                </nav>
            </section>
            <div className={"page-heading " + props.headingClasses.join(' ')} >
                <h1>{props.title}</h1>
                <p className="subtitle">{props.subtitle}</p>
            </div>
        </header>
        <main>
            <article>
                <section>
                    {props.postContent}
                </section>
                <footer>
                    {props.footer}
                </footer>
            </article>
        </main>
        <footer className="footer">
            <nav className="social-links">
                <ul>
                    <li><a href="https://twitter.com/encse" target="_blank" className="twitter-icon"></a></li>
                    <li><a href="https://www.linkedin.com/in/ncsdavid/" target="_blank" className="linkedin-icon"></a></li>
                    <li><a href="https://github.com/encse" target="_blank" className="github-icon"></a></li>
                </ul>
            </nav>
            <p className="copyright">2006 - 2021 csokavar.hu</p>
        </footer>
    </>
}


