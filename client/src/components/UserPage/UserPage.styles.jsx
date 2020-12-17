import styled, { css } from 'styled-components';

const H1SpanPA = css `
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
`;

const PSpan = css `
    font-size: 1.5rem;
`;

export const Main = styled.main `
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const H1 = styled.h1 `
    ${H1SpanPA}
`;

export const P = styled.p `
    ${H1SpanPA};
    ${PSpan};
`;

export const Span = styled.span `
    ${H1SpanPA};
    ${PSpan};
`;

export const Ul = styled.ul `
    list-style-type: none;
    font-size: 1.5rem;
`;

export const Li = styled.li `
    padding-left: 2rem;
    background-image: url('/images/animation_gifs/point-arrow.png');
    background-size: 1.6rem 1rem;
    background-repeat: no-repeat;
`;