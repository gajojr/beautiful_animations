import React from 'react';
import '../styles/animation.css';

// eslint-disable-next-line react/prop-types
const Animation = ({ name, gif, description }) => {
    return (
        <div className="block">
            <div className="naslov-link">
                <h3>{name}</h3>
                <span className="animation-link-header"><a href="#" className="animation-link">Visit</a></span>
            </div>  
            <img src={gif} alt="gif animation"/>
            <p>{description}</p>      
        </div>
    );
}

export default Animation;