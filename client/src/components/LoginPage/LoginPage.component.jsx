import React from 'react';
import * as Styles from './LoginPage.style';

import '../../components/InputError/error.css';

import { useForm } from 'react-hook-form';

function shakingInputAnimation(inputField) {
    if (!inputField.value) {
        // adds red border around input field
        inputField.style.border = `3px solid red`;

        // class that defines animation
        inputField.classList.add('error');

        // removes class and red color on the end of the animation
        setTimeout(() => {
            inputField.classList.remove('error');
            inputField.style.border = '1px solid #000';
        }, 1300);
    }
};

const LoginPage = () => {
    // check if user is already logged in in this session
    const check_user_login = sessionStorage.getItem('loged_in');
    if (check_user_login === 'admin') {
        window.location.href = '/admin-page';
    } else if (check_user_login === 'user') {
        window.location.href = '/user-page';
    }

    document.title = "Login Page"
    // register is acting as a login on this page
    const { register, handleSubmit, errors } = useForm();

    const onSubmit = data => {
        fetch('http://localhost:8080/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                username: data.username,
                password: data.password
            })
        })
        .then((response) => {
            if (response.status === 200) {
                sessionStorage.setItem('loged_in', 'admin');
                sessionStorage.setItem('username', data.username);
                window.location.href = '/admin-page';
            } else if (response.status === 201) {
                sessionStorage.setItem('loged_in', 'user');
                sessionStorage.setItem('username', data.username);
                window.location.href = '/user-page';
            } else {
                window.location.href = '/login-failed';
            }
        });
    }

    return (
        <Styles.Wrapper>
            <Styles.Form onSubmit={handleSubmit(onSubmit)}>
                <Styles.Input type="text" name="username" placeholder="Username" id="username" ref={register({required: "USERNAME REQUIRED"})}/>
                {
                    errors.username && 
                    shakingInputAnimation(document.getElementById('username'))
                }
                <Styles.Input type="password" name="password" placeholder="Password" id="password" ref={register({required: "PASSWORD REQUIRED"})}/>
                {
                    errors.password && 
                    shakingInputAnimation(document.getElementById('password'))
                }
                <Styles.Submit type="submit" id="submit" value="Login"/>
            </Styles.Form>
        </Styles.Wrapper>
    )
};

export default LoginPage;