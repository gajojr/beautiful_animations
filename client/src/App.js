import React from 'react';
import './App.css';

import HeaderComponent from './components/Header';
import AnimationsContainer from './components/AnimationsContainer';
import Footer from './components/Footer';

import animationsInfo from './data/animationsInfo';

function App() {
  const getFromDB = async () => {
    return await fetch("http://localhost:8080/animations", {
              method: 'GET',
              headers: {
                'Content-Type': 'application/json',
                'API-Key': 'secret'
              }
            })
            .then(res => res.text())
            .then(text => console.log(text)) 
            /*.then(res => res.json())
            .then(data => {
              console.log(data.animations);
              return data.animations;
            }) 
            .catch(error => {
              console.log(error);
            });*/
  }

  return (
    <div className="App">
      <HeaderComponent/>
      <AnimationsContainer 
        snippets={getFromDB() || []}
      />
      <Footer/>
    </div>
  );
}

export default App;
