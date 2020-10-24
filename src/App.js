import React from 'react';
import './App.css';

import HeaderComponent from './components/Header';
import AnimationsContainer from './components/AnimationsContainer';
import Footer from './components/Footer';

import animationsInfo from './data/animationsInfo';

function App() {
  return (
    <div className="App">
      <HeaderComponent/>
      <AnimationsContainer snippets={animationsInfo}/>
      <Footer/>
    </div>
  );
}

export default App;
