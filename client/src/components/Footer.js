import React, { useState, useEffect } from 'react';
import '../styles/footer.css';

const Footer = () => {
    // da bi se dugme promenilo mora da se refreshuje stranica
    const [username, setUsername] = useState(false);
    const [btn, updateBtn] = useState(false);

    if(!username && sessionStorage.getItem('username')) {
        setUsername(sessionStorage.getItem('username'));
    }

    useEffect(() => {   
        updateBtn(true);
    }, [username]);

    return (
        <footer>
            <div className="linkovi">
                <a href="https://www.instagram.com/webcode.rs/?hl=sr"><img src='/images/social_media/ig.png' alt="instagram logo" className="logo"/></a>
                <a href="mailto:andrijagajicbusiness@gmail.com"><img src='/images/social_media/email.png' alt="email logo" className="logo"/></a>
                <a href="https://github.com/gajojr"><img src='/images/social_media/github.png' alt="github logo" className="logo"/></a>
            </div>
            {!btn ? 
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