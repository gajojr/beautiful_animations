import React from 'react';
import '../styles/footer.css';

const Footer = () => {
    return (
        <footer>
            <div className="linkovi">
                <a href="https://www.instagram.com/webcode.rs/?hl=sr"><img src='/images/social_media/ig.png' alt="instagram logo" className="logo"/></a>
                <a href="mailto:andrijagajicbusiness@gmail.com"><img src='/images/social_media/email.png' alt="email logo" className="logo"/></a>
                <a href="https://github.com/gajojr"><img src='/images/social_media/github.png' alt="github logo" className="logo"/></a>
            </div>
            <div className="adminButton">
                <a href="http://localhost:8080/adminPage">Admin login</a>
            </div>
        </footer>
    );
}

export default Footer;