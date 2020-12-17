import React from 'react';
import Intro from './header.style';

const HeaderComponent = () => {
    return (
        <Intro>
            <h1 style={{ alignSelf: 'center' }}>Beautiful Animations</h1>
            <p>This website is designed to demonstrate power of css animations, and hopefuly help you made your own animations</p>
        </Intro>
    )
};

export default HeaderComponent