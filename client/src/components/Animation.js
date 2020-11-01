import React from 'react';
import '../styles/animation.css';

// eslint-disable-next-line react/prop-types
const Animation = ({ name, gif, description, link }) => {
    return (
        <div className="block">
            <div className="naslov-link">
                <h3>{name}</h3>
                <span className="animation-link-header">
                    <a href={link || 'https://www.google.rs/'} className="animation-link">Visit</a>
                </span>
            </div>  
            <img src={gif} alt={name}/>
            <p>{description}</p>      
        </div>
    );
}

export default Animation;