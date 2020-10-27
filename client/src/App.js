import React from 'react';
import './App.css';

import HeaderComponent from './components/Header';
import AnimationsContainer from './components/AnimationsContainer';
import Footer from './components/Footer';

async function getFromDB(url) { 
  const res = await fetch(url); 
  const json = await res.json();
  const animationsList = json.animations;

  return animationsList;
};

function App() {
  return (
    <div className="App">
      <HeaderComponent/>
      <AnimationsContainer 
        // db location
        snippets={getFromDB("http://localhost:8080/animations")}
      />
      <Footer/>
    </div>
  );
}

export default App;
