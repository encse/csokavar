import {fontFace as fontAwesome} from './components/fontAwesame';

export const linkColor = '#1d59d1';
export const xxlFontSize = 'var(--xxl-text-size)';
export const textColor = '#c8c8c8';
export const backgroundColor = '#1e1e1e';


const css = minifyCss(`
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

    body {
        margin: 0;
        font-family: 'Noto Sans', sans-serif;
        background: ${backgroundColor};
        color: ${textColor};
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

    </style>
`);

export const baseStyle = `<style>${css}</style>`;

function minifyCss(st: string) {
    st = st.replace(/\/\*(.|\n)*?\*\//g, ""); 
    st = st.replace(/\s*(\{|\}|\[|\]|\(|\)|\:|\;|\,)\s*/g, "$1"); 
    st = st.replace(/#([\da-fA-F])\1([\da-fA-F])\2([\da-fA-F])\3/g, "#$1$2$3"); 
    st = st.replace(
        /:[\+\-]?0(rem|em|ec|ex|px|pc|pt|vh|vw|vmin|vmax|%|mm|cm|in)/g,
        ":0"
    ); 
    st = st.replace(/\n/g, ""); 
    st = st.replace(/;\}/g, "}");
    st = st.replace(/^\s+|\s+$/g, "");
    return st;
};