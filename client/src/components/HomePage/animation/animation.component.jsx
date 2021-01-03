import React, { useEffect, useState } from 'react';
import * as Styles from './animation.style';

import { IconContext } from 'react-icons';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';

const storeLikedAnimation = (username, link) => {
    (async() => {
        // await fetch(`${(process.env.URL + '/' + process.env.PORT) || 'http://localhost:8080'}/animation-list`, {
        await fetch('http://localhost:8080/animation-list', {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username,
                link
            })
        });
    })();
}

async function getLikedAnimations(username) { 
    //const res = await fetch(`${(process.env.URL + '/' + process.env.PORT) || 'http://localhost:8080'}/animation-list/?username=${username}`); 
    const res = await fetch(`http://localhost:8080/animation-list/?username=${username}`);
    const json = await res.json();
    const likedAnimations = json.animationList;

    return likedAnimations;
}

// eslint-disable-next-line react/prop-types
const Animation = ({ name, gif, description, link }) => {
    const [likedAnimations, setLikedAnimations] = useState([]);
    const [change, setChange] = useState(false);

    useEffect(() => {
        if(sessionStorage.getItem('username')) {
                getLikedAnimations(sessionStorage.getItem('username')).then(likedAnimations => {
                setLikedAnimations(likedAnimations);
            });
        }
    }, [change]);


    return (
        <Styles.Block>
            <Styles.HeaderLink>
                <h3>{name}</h3>
                <Styles.AnimationLinkHeader>
                    <Styles.AnimationLink href={link}>
                        Visit
                    </Styles.AnimationLink>
                </Styles.AnimationLinkHeader>
            </Styles.HeaderLink>  
            <Styles.Img src={gif} alt={name}/>
            <div style={{
                    display: 'flex', 
                    flexDirection: 'row', 
                    justifyContent: 'space-between'
                }}
            >
                <Styles.Description>{description}</Styles.Description> 
                {sessionStorage.getItem('username') ?
                    <IconContext.Provider value={{ color: 'red', size: 34 }}>
                        <Styles.LikeBtn onClick={() => {
                            storeLikedAnimation(sessionStorage.getItem('username'), link);
                            getLikedAnimations(sessionStorage.getItem('username')).then(animations => {
                                setChange(!change);
                                console.log(animations);
                                console.log("State:", likedAnimations);
                            });
                        }}>
                            {likedAnimations.indexOf(link) !== -1 ? <AiFillHeart/> : <AiOutlineHeart/>}
                        </Styles.LikeBtn>
                    </IconContext.Provider> : null}
            </div>     
        </Styles.Block>
    );
}

export default Animation;