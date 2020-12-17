import React from 'react';

import * as Styles from './LoginFailed.style';

const LoginFailedComponent = () => {
    return (
        <Styles.Main>
            <h1>Login failed</h1>
            <p>Please try again</p>
            <Styles.StyledLink to="/login"><button>OK</button></Styles.StyledLink>
        </Styles.Main>
    )
}

export default LoginFailedComponent;