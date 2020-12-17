import React from 'react';
import '../../components/InputError/error.css';

import * as Styles from './RegisterPage.style';

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

const RegisterPage = () => {
    const check_user_login = sessionStorage.getItem('loged_in');
    if (check_user_login === 'user') {
        window.location.href = '/user-page';
    } else if (check_user_login === 'admin') {
        window.location.href = '/admin-page';
    }
    document.title = "Register Page";

    const { register, handleSubmit, errors } = useForm();

    const onSubmit = data => {
        console.log(data);
        if(data.password !== data.confirm_password) {
            alert("Password are not the same");
        } else {
            fetch('http://localhost:8080/register', {        
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    username: data.username,
                    password: data.password
                })
            })
            .then((response) => {
                alert("USAO SAM JAKO");
                if (response.status === 400) {
                    window.location.href = '/register-failed';
                } else {
                    window.location.href = "/user-page";
                    sessionStorage.setItem('loged_in', 'user');
                    sessionStorage.setItem('username', data.username);
                }
            });
            console.log('zavrsena registracija');
        }
    }

    return (
        <Styles.Wrapper>
            <Styles.Register>
                <Styles.MainHeader>Registration page for new users</Styles.MainHeader>
                <Styles.Form onSubmit={handleSubmit(onSubmit)}>
                    <Styles.Label htmlFor="username">Enter username:</Styles.Label>
                    <Styles.Input type="text" id="username" name="username" ref={register({required: "USERNAME REQUIRED"})}/>
                    {
                        errors.username && 
                        shakingInputAnimation(document.getElementById('username'))
                    }
                    <Styles.Label htmlFor="password">Enter password:</Styles.Label>
                    <Styles.Input type="password" id="password" name="password" ref={register({required: "PASSWORD REQUIRED"})}/>
                    {
                        errors.password && 
                        shakingInputAnimation(document.getElementById('password'))
                    }
                    <Styles.Label htmlFor="confirm_password">Confirm password:</Styles.Label>
                    <Styles.Input type="password" id="confirm_password" name="confirm_password" ref={register({required: "CONFIRM REQUIRED"})}/>
                    {
                        errors.confirm_password && 
                        shakingInputAnimation(document.getElementById('confirm_password'))
                    }
                    <Styles.Submit type="submit" id="submit" value="Register"/>
                </Styles.Form>
            </Styles.Register>
        </Styles.Wrapper>
    )
};

export default RegisterPage;