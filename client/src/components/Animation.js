import React from 'react';
import '../styles/animation.css';

const storeLikedAnimation = (link) => {
    (async() => {
        await fetch('/user-page', {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                link
            })
        });
    })();
}

// eslint-disable-next-line react/prop-types
const Animation = ({ name, gif, description, link }) => {
    return (
        <div className="block">
            <div className="naslov-link">
                <h3>{name}</h3>
                <span className="animation-link-header">
                    <a 
                        href={link || 'https://www.google.rs/'} 
                        className="animation-link"
                    >
                        Visit
                    </a>
                </span>
            </div>  
            <img src={gif} alt={name}/>
            <div style={{
                    display: 'flex', 
                    flexDirection: 'row', 
                    justifyContent: 'space-between'
                }}
            >
                <p>{description}</p> 
                <img 
                    id="like-btn" 
                    title="By pressing like, you will save link to animation page on your profile" 
                    src={'/images/social_media/like-btn.png'} alt={"like button"}
                    onClick={() => storeLikedAnimation(link)}
                />
            </div>     
        </div>
    );
}

export default Animation;