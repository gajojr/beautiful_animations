import React, { useState, useEffect } from 'react';
import * as Styles from './UserPage.styles';

import { Link } from 'react-router-dom';

async function getFromDB(url) {
    const res = await fetch(url);
    const json = await res.json();
    const animationsList = json.animationList;

    return animationsList;
}

const UserPage = () => {
    const username = sessionStorage.getItem('username');
    const [animationList, setAnimationList] = useState([]);

    useEffect(() => {
        getFromDB(`/animation-list/?username=${sessionStorage.getItem('username')}`).then(data => {    
            setAnimationList(data);
        })
    }, []);

    return (
        <Styles.Main>
            <Styles.H1>Welcome <Styles.Span>{username}</Styles.Span>!</Styles.H1>
            <Styles.P>Animations you've liked:</Styles.P>
            <Styles.Ul>
                {/* fetched animations links */}
                {
                    animationList.map((animationLink, index) => {
                        return (
                            <Styles.Li key={index}>
                                <a href={`${animationLink}`}  style={{color: '#000'}}>{animationLink.substring(animationLink.lastIndexOf('/') + 1, animationLink.lastIndexOf('.'))}</a>
                            </Styles.Li>
                        )
                    })
                }
            </Styles.Ul>
            <Styles.Span>Go to animations <Link to="/" style={{color: '#000'}}>page</Link></Styles.Span>
        </Styles.Main>
    )
}   

export default UserPage;