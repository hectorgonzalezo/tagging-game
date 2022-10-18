import React, { useState } from 'react';
import './styles/appStyle.css';
import MainImage from './components/MainImage';
import Header from './components/Header';
import Footer from './components/Footer';
import CharactersContext from './components/CharactersContext';

function App() {  // Characters to be found in image
  const [characters, setCharacters] = useState(['Waldo', 'QWOP', 'Rocko', 'Adam Savage', 'Boo', 'General Snoo', 'Dwight Schrute', 'Ghost Rider']);

  return (
    <div className="App">
      <CharactersContext.Provider value={characters}>
        <Header />
        <MainImage />
        <Footer projectName="wheres-waldo" />
      </CharactersContext.Provider>
    </div>
  );
}

export default App;
