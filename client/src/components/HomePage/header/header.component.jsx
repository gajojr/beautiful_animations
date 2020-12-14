import React from 'react';
import './header.styles.css';

const HeaderComponent = () => {
    return (
        <header className="intro">
            <h1 style={{ alignSelf: 'center' }}>Beautiful Animations</h1>
            <p>This website is designed to demonstrate power of css animations, and hopefuly help you made your own animations</p>
        </header>
    )
};

export default HeaderComponent;