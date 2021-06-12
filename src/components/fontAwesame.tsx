import styled from 'styled-components';

export const fontFace = `
    @font-face { 
        font-family: "font_awesome";
        src: url(data:application/font-woff;base64,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);
    }
`;

export const TwitterLink = styled.a`
    :before {
        font-family: 'font_awesome';
        content: '\f099';
    }
`;

export const LinkedInLink = styled.a`
    :before {
        font-family: 'font_awesome';
        content: '\f0e1';
    }
`;

export const GitHubLink = styled.a`
    :before {
        font-family: 'font_awesome';
        content: '\f09b';
    }
`;

export const TagsIcon = styled.span`
    :before {
        font-family: 'font_awesome';
        content: '\\e801';
    }
`;

export const SearchIcon = styled.span`
    :before {
        font-family: 'font_awesome';
        content: '\\e800';
    }
`;