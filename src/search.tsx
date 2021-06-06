import { slugify, removeAccents } from "./util";
import { AssetManager, ImageAsset } from './assets';
import { Template, PageTemplateProps, Post } from './post';
import * as React from 'react';
import ReactDOMServer from 'react-dom/server';
import { PostList } from './postList';
import styled from 'styled-components';
import { SearchIcon } from "./components/fontAwesame";
import { ServerStyleSheet } from 'styled-components';

const Search = styled.div`
    width: 100%;
    background: white;
    border: 1px solid black;
    border-radius: 25px;
    
    padding: 8px 16px;
    
    display: flex;
    color: black;
`;

const SearchInput = styled.input`
    flex-grow: 1;
    outline: 0;
    border: none;
    background: transparent;
    font-family: 'Noto Sans';
    font-size: 16px;
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
        this.coverImage = assetManager.lookup('site/assets/backgrounds/street.gif', "imageAsset");
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
                subtitle: <Search><SearchInput data-search-input/><SearchIcon /></Search>,
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

    let id = 0;
    for (let id = 0; id < posts.length; id++) {
        const post = posts[id];
        let normalized = removeAccents(post.title + " " + post.mdContent).toLowerCase();

        for (let match of normalized.matchAll(/(\w)+/g)) {
            const word = match[0];
            if (word.length > 2) {
                const key = slugify(word);
                let list = wordToIds.get(key) ?? new Set<number>();
                list.add(id);
                wordToIds.set(key, list);
            }
        }
    }

    let keywords = Object.fromEntries([...wordToIds.entries()].map(entry => [entry[0], [...entry[1]]]));
    let search = {
        meta: posts.map(post => ReactDOMServer.renderToStaticMarkup(styleSheet.collectStyles(PostList.renderItem(post)))),
        keywords
    }

    return JSON.stringify(search);
}
