import React, { useState, useEffect } from 'react';
import './styles/appStyle.css';
import MainImage from './components/MainImage';
import Header from './components/Header';
import Footer from './components/Footer';
import CharactersContext from './components/CharactersContext';

function App() {
  let charactersArray = [
    "Waldo",
    "QWOP",
    "Rocko",
    "Jamie Hyneman",
    "Boo",
    "General Snoo",
    "Dwight Schrute",
    "Ghost Rider",
  ];
  // add false to guessed for every character
  // This is used to grey out guessed characters from list
  charactersArray = charactersArray.map((character) => {
    return { name: character, guessed: false };
  });
  // Characters to be found in image
  const [characters, setCharacters] = useState(charactersArray);

  function guessCorrectly(name) {
    // ass guessed: true to chosen chacter
    const newCharacters = characters.map((character) => {
      if (character.name === name) {
        return { ...character, guessed: true };
      }
      return character;
    });
    setCharacters(newCharacters);
  }

  useEffect(() => {}, []);

  return (
    <div className="App">
      <CharactersContext.Provider value={characters}>
        <Header />
        <MainImage guessFunc={guessCorrectly} />
        <Footer projectName="wheres-waldo" />
      </CharactersContext.Provider>
    </div>
  );
}

export default App;
