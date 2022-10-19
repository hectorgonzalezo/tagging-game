import React, { useState, useEffect } from 'react';
import './styles/appStyle.css';
import MainImage from './components/MainImage';
import Header from './components/Header';
import Footer from './components/Footer';
import WinModal from './components/WinModal';
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
  const [modalVisible, setModalVisible] = useState(false);
  const [time, setTime] = useState(0);
  const [restart, setRestart] = useState(false);

  function isEveryCharacterGuessed() {
    const result = characters.every((character) => character.guessed === true);
    return result;
  }

  function guessCorrectly(name) {
    // add guessed: true to chosen chacter
    const newCharacters = characters.map((character) => {
      if (character.name === name) {
        return { ...character, guessed: true };
      }
      return character;
    });
    setCharacters(newCharacters);
  }

  // Gets the time from Counter child element
  function getTime(currentTime) {
    setTime(currentTime);
  }

  // Restart game, called by WinModal
  function restartFunc() {
    setModalVisible(false);
    setCharacters(charactersArray);
    setRestart(true);
    setTimeout(() => {
      setRestart(false)
    }, 1000);
  }

  // every time a character is updated, check if they're all guessed correctly
  // If so, display modal
  useEffect(() => {
    if (isEveryCharacterGuessed()) {
      setModalVisible(true);
    }
  }, [characters]);

  return (
    <div className={`App ${modalVisible ? 'opaque' : ''}`}>
      <CharactersContext.Provider value={characters}>
        <Header getTime={getTime} stop={modalVisible} />
        {modalVisible ? <WinModal time={time} restartFunc={restartFunc} /> : null}
        <MainImage guessFunc={guessCorrectly} restart={restart} />
        <Footer projectName="wheres-waldo" />
      </CharactersContext.Provider>
    </div>
  );
}

export default App;
