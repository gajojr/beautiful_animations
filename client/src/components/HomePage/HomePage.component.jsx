import React from 'react';
import HomePageComponent from './HomePage.style';

import HeaderComponent from './header/header.component';
import AnimationsContainer from './animations_container/animations_container.component';
import Footer from './footer/footer.component';

async function getFromDB(url) {
  const res = await fetch(url);
  const json = await res.json();
  const animationsList = json.animations;

  return animationsList;
}

function HomePage() {
  return (
    <HomePageComponent>
      <HeaderComponent />
      <AnimationsContainer
        snippets={getFromDB('/animations')}
      />
      <Footer />
    </HomePageComponent>
  );
}

export default HomePage;