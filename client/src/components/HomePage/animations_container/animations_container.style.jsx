import styled from 'styled-components';

const Container = styled.main `
    text-align: left;
    margin: 20px;
    padding: 10px;
    border-radius: 10px;
    display: flex;
    align-self: center;
    flex-wrap: wrap;
    flex: 1;
    justify-content: space-between;
    background-color: rgba(255, 145, 0, 0.55);
    width: 60%;
    min-width: 320px;

    @media (max-width: 768px) {
        width: 80%;
    }

    @media (max-width: 540px) {
        width: 95%;
    }

    @media (max-width: 321px) {
        width: 90%;
        min-width: 100px;
    }
`;

export default Container;