import React from 'react';
import '../../components/InputError/error.css';

import * as Styles from './RegisterPage.style';

import { shakingInputAnimation } from '../AdminPage/functionality';

const RegisterPage = () => {
    const check_user_login = sessionStorage.getItem('loged_in');
    if (check_user_login === 'user') {
        window.location.href = '/user-page';
    } else if (check_user_login === 'admin') {
        window.location.href = '/admin-page';
    }

    document.title = "Register Page";

    const registerUser = (username, password, confirmPassword) => {
        if (!username.value || !password.value || !confirmPassword.value) {
            shakingInputAnimation([username, password, confirmPassword]);
            setTimeout(() => {
                alert('You must fill in all fields');
                window.location.reload();
            }, 800);
            return;
        }
        if (password.value !== confirmPassword.value) {
            alert("Password are not the same");
            window.location.reload();
            return;
        }
        //fetch(`${(process.env.URL + '/' + process.env.PORT) || ''}/register`, {       
        fetch('http://localhost:8080/register', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: username.value,
                password: password.value
            })
        })
            .then((response) => {
                if (response.status === 202) {
                    window.location.href = '/register-failed';
                } else {
                    sessionStorage.setItem('loged_in', 'user');
                    sessionStorage.setItem('username', username.value);
                    window.location.href = "/user-page";
                }
            });
    }

    return (
        <Styles.Wrapper>
            <Styles.Register>
                <Styles.MainHeader>Registration page for new users</Styles.MainHeader>
                <Styles.Form>
                    <Styles.Label htmlFor="username">Enter username:</Styles.Label>
                    <Styles.Input type="text" id="username" name="username" required />
                    <Styles.Label htmlFor="password">Enter password:</Styles.Label>
                    <Styles.Input type="password" id="password" name="password" required />
                    <Styles.Label htmlFor="confirm_password">Confirm password:</Styles.Label>
                    <Styles.Input type="password" id="confirmPassword" name="confirm_password" required />
                    <Styles.Submit type="button" onClick={() => registerUser(
                        document.getElementById('username'),
                        document.getElementById('password'),
                        document.getElementById('confirmPassword')
                    )}>Register</Styles.Submit>
                </Styles.Form>
            </Styles.Register>
        </Styles.Wrapper>
    )
};

export default RegisterPage;