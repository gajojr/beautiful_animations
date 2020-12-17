import React from 'react';
import { Link } from 'react-router-dom';

// we are importing from LoginFailed directory because it's the same style that we want to apply
import * as Styles from '../LoginFailed/LoginFailed.style';

const RegisterFailedComponent = () => {
    return (
        <Styles.Main>
            <h1>Register failed</h1>
            <p>There is already user with this username</p>
            <p>Please try again</p>
            <Link to="/register"><button>OK</button></Link>
        </Styles.Main>
    )
}

export default RegisterFailedComponent;