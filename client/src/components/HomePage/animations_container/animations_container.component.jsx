/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import Container from './animations_container.style';

import Animation from '../animation/animation.component';

const AnimationsContainer = ({ snippets }) => {
    const [newSnippets, setNewSnippets] = useState([]);

    snippets.then(data => setNewSnippets(data));

    const animationComponent = newSnippets.map((animation) => {
        return (
            <Animation 
                key={animation._id} 
                name={animation.name} 
                gif={animation.gifAdrress} 
                description={animation.description}
                link={animation.linkToAnimationPage}
            />
        )
    });

    return (
        <Container>
            {animationComponent}
        </Container>
    );
}

export default AnimationsContainer;