import { slugify, removeAccents } from "./util";
import { AssetManager, ImageAsset } from './assets';
import { Template, PageTemplateProps, Post } from './post';
import * as React from 'react';
import ReactDOMServer from 'react-dom/server';
import { PostList } from './postList';
import styled from 'styled-components';
import { ServerStyleSheet } from 'styled-components';
import { linkColor } from "./colors";

const SearchWrapper = styled.div`
    position:relative;
    width: 100%;
`;


const Search = styled.div`
    position:absolute;
    width: 100%;
    background: white;
    border-radius: 20px;
    border: 1px solid #444444;
    
    padding: 8px 0;
    
    display: flex;
    flex-wrap: wrap;
    color: black;
    overflow:hidden;

  
`;

const SearchInput = styled.input`
    flex-grow: 1;
    outline: 0;
    border: none;
    background: transparent;
    font-family: inherit;
    font-size: inherit;
    padding: 0 16px;
`;


const SearchSuggestions = styled.div`
    width: 100%;
    max-height: 300px;
    overflow: auto;

    a {
        display: block;
        padding: 8px 16px;
        outline: none;
        &:hover, &:active, &:focus {
            background: ${linkColor};
            color: white;
            
        }
    }

    display: none;
    ${Search}:focus-within & {
        display:block;
    }
`;


export class SearchPage {
    readonly title: string;
    readonly subtitle: string;
    readonly uri: string;
    readonly coverImage: ImageAsset;
    readonly mdContent: string;
    readonly #template: Template<PageTemplateProps>;

    constructor(
        template: Template<PageTemplateProps>,
        private assetManager: AssetManager,
        private posts: Post[],
    ) {

        this.title = "Keresés"
        this.subtitle = null;
        this.uri = '/search/';
        this.coverImage = assetManager.lookup('site/assets/backgrounds/generic/street.gif', "imageAsset");
        this.#template = template;
    }

    async render(): Promise<string> {

        const styleSheet = new ServerStyleSheet();
        const content = <div data-search>
            <script data-search-index type="application/json" dangerouslySetInnerHTML={{ __html: buildSearch(this.posts, styleSheet) }}>
            </script>
            <div data-search-result></div>
        </div>

        return this.#template(
            {
                homePageHeading: true,
                title: this.title,
                subtitle: <SearchWrapper>
                    <Search>
                        <SearchInput data-search-input autoFocus type="search" />
                        <SearchSuggestions data-search-suggestions />
                    </Search>
                </SearchWrapper>,
                coverImage: this.coverImage,
                postContent: content,
                footer: null,
                styleSheet: styleSheet
            }
        );
    }
}

export function buildSearch(posts: Post[], styleSheet: ServerStyleSheet): string {
    let wordToIds = new Map<string, Set<number>>();
    let keywords = new Set<string>();

    for (let id = 0; id < posts.length; id++) {
        const post = posts[id];
        for (let keyword of post.keywords) {
            keywords.add(keyword);
        }


        let text = removeAccents(post.title + " " + post.textContent()).toLowerCase();
        let normalized = [
            ...post.keywords,
            ...[...text.matchAll(/([\w+#]+)/g)].map(m => m[1])
        ].map(st => removeAccents(st).toLowerCase());

        for (let word of normalized) {
            if (word.length >= 2) {
                const key = word;
                let list = wordToIds.get(key) ?? new Set<number>();
                list.add(id);
                wordToIds.set(key, list);
            }
        }
    }

    let words = Object.fromEntries([...wordToIds.entries()].map(entry => [entry[0], [...entry[1]]]));
    let search = {
        keywords: [...keywords],
        meta: posts.map(post => ReactDOMServer.renderToStaticMarkup(styleSheet.collectStyles(PostList.renderItem(post)))),
        words
    }

    return JSON.stringify(search);
}
