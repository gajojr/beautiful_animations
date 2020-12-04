import React, { useState } from 'react';
import '../styles/animation.css';

import { IconContext } from 'react-icons';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';

const storeLikedAnimation = (username, link) => {
    // session is set on port 8080, so we have problem searching it on 3000
    console.log(`Username: ${username}, link: ${link}`);
    // (async() => {
    //     await fetch('/user-page', {
    //         method: 'PUT',
    //         headers: {
    //             'Accept': 'application/json',
    //             'Content-Type': 'application/json'
    //         },
    //         body: JSON.stringify({
    //             username
    //             link
    //         })
    //     });
    // })();
}

// eslint-disable-next-line react/prop-types
const Animation = ({ name, gif, description, link }) => {
    const [username, setUsername] = useState('');

    async function getUsername(url) { 
        const res = await fetch(url); 
        const json = await res.json();
        const username = json.username;

        return username;
    } 

    getUsername("http://localhost:8080/login/send-username-to-frontend").then(data => {
        setUsername(data)
    });


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
                {username ? 
                    <IconContext.Provider 
                        value={{ color: 'red', size: 34 }}
                    >
                        <div className="like-btn" onClick={() => storeLikedAnimation(username, link)}>
                            <AiOutlineHeart/>
                        </div>
                    </IconContext.Provider> : null}
            </div>     
        </div>
    );
}

export default Animation;