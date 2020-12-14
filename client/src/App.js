import React from 'react';
import './App.css';

import HeaderComponent from '../src/components/HomePage/header/header.component';
import AnimationsContainer from '../src/components/HomePage/animations_container/animations_container.component';
import Footer from '../src/components/HomePage/footer/footer.component';

async function getFromDB(url) { 
  const res = await fetch(url); 
  const json = await res.json();
  const animationsList = json.animations;

  return animationsList;
}

function App() {
  return (
    <div className="App">
      <HeaderComponent/>
      <AnimationsContainer 
        // db location
        snippets={getFromDB("http://localhost:8080/animations")}
      />
      <Footer />
    </div>
  );
}

export default App;
