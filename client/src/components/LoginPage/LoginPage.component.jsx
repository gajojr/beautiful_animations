import React from 'react';
import * as Styles from './LoginPage.style';

import '../../components/InputError/error.css';
import { shakingInputAnimation } from '../AdminPage/functionality';


const LoginPage = () => {
    // check if user is already logged in in this session
    const check_user_login = sessionStorage.getItem('loged_in');
    if (check_user_login === 'admin') {
        window.location.href = '/admin-page';
    } else if (check_user_login === 'user') {
        window.location.href = '/user-page';
    }

    document.title = "Login Page"

    const onSubmit = (username, password) => {
        if (!username.value || !password.value) {
            shakingInputAnimation([username, password]);
            setTimeout(() => {
                alert('You must fill in all fields');
            }, 800);
        } else {
            fetch('/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({
                    username: username.value,
                    password: password.value
                })
            })
                .then((response) => {
                    if (response.status === 200) {
                        sessionStorage.setItem('loged_in', 'admin');
                        sessionStorage.setItem('username', username.value);
                        window.location.href = '/admin-page';
                    } else if (response.status === 201) {
                        sessionStorage.setItem('loged_in', 'user');
                        sessionStorage.setItem('username', username.value);
                        window.location.href = '/user-page';
                    } else {
                        window.location.href = '/login-failed';
                    }
                });
        }
    }

    return (
        <Styles.Wrapper>
            <Styles.Form>
                <Styles.Input type="text" name="username" placeholder="Username" id="username" required />
                <Styles.Input type="password" name="password" placeholder="Password" id="password" required />
                <Styles.Submit type="button" onClick={() => onSubmit(
                    document.getElementById('username'),
                    document.getElementById('password')
                )}>Login</Styles.Submit>
            </Styles.Form>
        </Styles.Wrapper>
    )
};

export default LoginPage;