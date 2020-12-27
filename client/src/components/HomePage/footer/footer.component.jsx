import React, { useState } from 'react';
import * as Styles from './footer.styles';

const Footer = () => {
    // to turn register/login button to my profile button I must refresh
    const [username, setUsername] = useState(false);

    if(!username && sessionStorage.getItem('username')) {
        setUsername(sessionStorage.getItem('username'));
    }

    return (
        <Styles.Footer>
            <Styles.Links>
                <a href="https://www.instagram.com/webcode.rs/?hl=sr"><Styles.Logo src='/images/social_media/ig.png' alt="instagram logo"/></a>
                <a href="mailto:andrijagajicbusiness@gmail.com"><Styles.Logo src='/images/social_media/email.png' alt="email logo"/></a>
                <a href="https://github.com/gajojr"><Styles.Logo src='/images/social_media/github.png' alt="github logo"/></a>
            </Styles.Links>
            {!username ? 
                <Styles.LoginRegister>
                    <Styles.StyledLink to="/register">
                        <Styles.ControlButton>
                            Register
                        </Styles.ControlButton>
                    </Styles.StyledLink>
                    <Styles.StyledLink to="/login">
                        <Styles.ControlButton>
                            Login
                        </Styles.ControlButton>
                    </Styles.StyledLink>
                </Styles.LoginRegister> 
                : 
                <Styles.LoginRegister>
                    <Styles.StyledLink to={sessionStorage.getItem('loged_in') === 'user' ? "/user-page" : '/admin-page'}>
                        <Styles.ControlButton>
                            My profile
                        </Styles.ControlButton>
                    </Styles.StyledLink>
                </Styles.LoginRegister>
            }
        </Styles.Footer>
    );
}

export default Footer;