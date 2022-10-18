import React, { useState } from 'react';
import uniqid from 'uniqid';
import comiconImg from '../assets/comicon.jpg';
import Target from './Target';
import '../styles/mainImageStyle.css';
import CharactersContext from './CharactersContext';

function MainImage() {
  // Target currently selected by user
  const [target, setTarget] = useState([]);

  // Characters to be found in image
  const [characters, setCharacters] = useState(['Waldo', 'QWOP', 'Rocko', 'Adam Savage', 'Boo', 'General Snoo', 'Dwight Schrute', 'Ghost Rider']);

  // This function allow the user to click on a location in image
  function clickLocation(e) {
    const { pageX, pageY } = e;
    setTarget([{ x: pageX, y: pageY }]);
  }

  // Deletes target from view
  function closeTarget() {
    setTarget([]);
  }

  return (
    <div id="img-container">
      <CharactersContext.Provider value={characters}>
        <img
          src={comiconImg}
          alt="main"
          id="main-image"
          onClick={clickLocation}
        />
        {target.map((target) => (
          <Target
            key={`${target.x + uniqid()}-${target.y + uniqid()}`}
            location={target}
            closeTarget={closeTarget}
          />
        ))}
      </CharactersContext.Provider>
    </div>
  );
}

export default MainImage;
