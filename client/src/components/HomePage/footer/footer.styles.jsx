import styled from 'styled-components';

import { Link } from 'react-router-dom';

export const Footer = styled.footer `
    text-align: left;
    margin: 20px;
    padding: 10px;
    border-radius: 10px;
    display: flex;
    align-self: center;
    flex-wrap: wrap;
    flex: 1;
    justify-content: space-between;
    background-color: rgb(236, 137, 7);
    width: 60%;
    min-width: 320px;

    @media (max-width: 321px) {
        min-width: 90%;
        padding: 10px;
        justify-content: center;
    }
`;

export const Links = styled.div `
    background-color: burlywood;
    display: flex;
    padding: 5px;
    border-radius: 7px;

    @media (max-width: 321px) {
        width: 95%;
        justify-content: space-between;
        margin-bottom: 10px;
    }
`;

export const Logo = styled.img `
    margin: 0 10px;
    width: 32px;
    height: 32px;
    border-radius: 50%;
`;

export const LoginRegister = styled.div `
    display: flex;
    flex-direction: row;
`;

export const StyledLink = styled(Link)
`
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    text-decoration: none;
    color: rgb(29, 27, 27);
`;

export const ControlButton = styled.div `
    font-weight: bold;
    cursor: pointer;
    background-color: rgb(231, 199, 95);
    box-shadow: 0 0.3rem rgba(255, 255, 255, 0.65);
    padding: 5px;
    border-radius: 7px;
    margin-right: 5px;
    transition-duration: .6s;

    &:hover{
        filter: brightness(115%);
    }

    &:active{
        transform: translate(0, 0.35rem);
        box-shadow: 0 0.1rem rgba(255, 255, 255, 0.65);
    }

    @media (max-width: 321px) {
        text-align: center;
        width: 90%;
    }  
`;