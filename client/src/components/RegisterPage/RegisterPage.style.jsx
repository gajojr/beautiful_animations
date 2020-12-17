import styled from 'styled-components';

export const Wrapper = styled.div `
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Register = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 60vw;
    max-width: 800px;
    padding: 20px;
    background: rgb(17, 54, 105);
    background: linear-gradient(90deg, rgba(17, 54, 105, 1) 0%, rgba(0, 168, 249, 1) 88%);
    border-radius: 10px;
`;

export const Form = styled.form `
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 70%;

    @media (max-witdh: 520px) {
        width: 100%;
    }
`;

export const MainHeader = styled.h1 `
    font-family: 'Segoe UI', Tahoma, Geneva;
`;

export const Label = styled.label `
    margin-top: 20px;
    font-family: sans-serif;
    font-size: 1.125rem;
    margin-bottom: 3px;
`;

export const Input = styled.input `
    width: 80%;
    height: 30px;
`;

export const Submit = styled.input `
    width: 20%;
    margin-top: 10px;
    align-self: center;
    font-size: 1.25rem;
    background-color: #000;
    color: #fff;
    padding: 10px;
    width: auto;
    border-radius: 2px;
    border: 2px solid #fff;
    height: auto;

    &:hover {
        cursor: pointer;
        opacity: .8;
    }
`;