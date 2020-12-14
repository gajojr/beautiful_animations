import React, { useState } from 'react';
import './footer.styles.css';

const Footer = () => {
    // to turn register/login button to my profile button I must refresh
    const [username, setUsername] = useState(false);

    if(!username && sessionStorage.getItem('username')) {
        setUsername(sessionStorage.getItem('username'));
    }

    return (
        <footer>
            <div className="linkovi">
                <a href="https://www.instagram.com/webcode.rs/?hl=sr"><img src='/images/social_media/ig.png' alt="instagram logo" className="logo"/></a>
                <a href="mailto:andrijagajicbusiness@gmail.com"><img src='/images/social_media/email.png' alt="email logo" className="logo"/></a>
                <a href="https://github.com/gajojr"><img src='/images/social_media/github.png' alt="github logo" className="logo"/></a>
            </div>
            {!username ? 
                <div className="login-register">
                    <a href="http://localhost:8080/register">
                        <div className="adminButton">
                            Register
                        </div>
                    </a>
                    <a href="http://localhost:8080/login">
                        <div className="adminButton">
                            Login
                        </div>
                    </a>
                </div> 
                : 
                <div className="login-register">
                    <a href="http://localhost:8080/user-page">
                        <div className="adminButton">
                            My profile
                        </div>
                    </a>
                </div>
            }
        </footer>
    );
}

export default Footer;