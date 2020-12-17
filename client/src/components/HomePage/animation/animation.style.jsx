import styled from 'styled-components';

export const Block = styled.div `
    margin: 20px;
    padding: 10px;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-self: center;
    background-color: #DAD870;
    flex: 1;
    min-width: 200px;
    height: auto;
    transition-duration: 1s;
    font-family: sans-serif;

    &:hover {
        transform: scale(1.1);
    }

    @media (max-width: 1024px) {
        width: 42%;
        min-width: 158px;
    }

    @media (max-width: 480px) {
        width: 40%;
        min-width: 148px;
    }

    @media (max-width: 436px) {
        min-width: 83%;
        height: auto;
    }

    @media (max-width: 361px) {
        min-width: 260px;
    }

    @media (max-width: 321px) {
        min-width: 220px;
    }

    @media (max-width: 281px) {
        min-width: 78%;
    }
`;

export const Img = styled.img `
    width: 80%;
    height: 40%;
    align-self: center;
    border-radius: 10px;

    @media (max-width: 1024px) {
        width: 70%;
    }
`;

export const HeaderLink = styled.div `
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
`;

export const AnimationLinkHeader = styled.span `
    background-color: #DEB3AD;
    padding: 5px;
    border-radius: 5px;
    width: auto;
    height: fit-content;
`;

export const AnimationLink = styled.a `
    text-decoration: none;
    color: #000;
`;

export const Description = styled.p `
    margin-top: 10px;
`;

export const LikeBtn = styled.div `
    margin-top: 10px;
    &:hover {
        cursor: pointer;
    }
`;