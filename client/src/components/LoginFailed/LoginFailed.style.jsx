import styled from 'styled-components';

import { Link } from 'react-router-dom';

export const Main = styled.main `
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 230px;
    background-color: #94E483 ;
`;

export const StyledLink = styled(Link)
`
    color: '#000';
`;