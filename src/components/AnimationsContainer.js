/* eslint-disable react/prop-types */
import React from 'react';
import '../styles/container.css';

import Animation from './Animation';

const AnimationsContainer = ({ snippets }) => {
    const animationComponent = snippets.map((animation, idx) => {
        return <Animation key={idx} name={snippets[idx].name} gif={snippets[idx].gif} description={snippets[idx].description}/>
    });

    return (
        <div className="container">
            {animationComponent}
        </div>
    );
}

export default AnimationsContainer;