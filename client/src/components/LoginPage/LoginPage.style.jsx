import styled from 'styled-components';

export const Wrapper = styled.div `
    background: #50a3a2;
    background: -webkit-linear-gradient(top left, #50a3a2 0%, #53e3a6 100%);
    background: -moz-linear-gradient(top left, #50a3a2 0%, #53e3a6 100%);
    background: -o-linear-gradient(top left, #50a3a2 0%, #53e3a6 100%);
    background: linear-gradient(to bottom right, #50a3a2 0%, #53e3a6 100%);
    position: absolute;
    top: 50%;
    left: 0;
    width: 100%;
    height: 400px;
    margin-top: -200px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const Form = styled.form `
    display: flex;
    flex-direction: column;
    padding: 20px 0;
    position: relative;
    z-index: 2;
`;

export const Input = styled.input `
    appearance: none;
    outline: 0;
    border: 1px solid rgba(255, 255, 255, 0.4);
    background-color: rgba(255, 255, 255, 0.2);
    width: 250px;
    border-radius: 3px;
    padding: 10px 15px;
    margin: 0 auto 10px auto;
    display: block;
    text-align: center;
    font-size: 18px;
    color: white;
    transition-duration: 0.25s;
    font-weight: 300;

    &:hover {
        background-color: rgba(255, 255, 255, 0.4);
    }

    &:focus {
        background-color: white;
        width: 300px;
        color: #53e3a6;
    }
`;

export const Submit = styled.input `
    appearance: none;
    outline: 0;
    background-color: white;
    border: 0;
    padding: 10px 15px;
    color: #53e3a6;
    border-radius: 3px;
    width: 282px;
    cursor: pointer;
    font-size: 18px;
    transition-duration: 0.25s;
    height: auto;

    &:hover {
        background-color: #afb7be;
        color: #000;
    }
`;

export const SubmitButton = styled.input `
    appearance: none;
    outline: 0;
    background-color: white;
    border: 0;
    padding: 10px 15px;
    color: #53e3a6;
    border-radius: 3px;
    width: 282px;
    cursor: pointer;
    font-size: 18px;
    transition-duration: 0.25s;
    height: auto;

    &:hover {
        background-color: #afb7be;
        color: #000;
    }
`;