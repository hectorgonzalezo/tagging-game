import React, { useContext } from 'react';
import { func, objectOf, number } from 'prop-types';
import CharactersContext from './CharactersContext';
import CharacterOption from './CharacterOption';
import '../styles/choicesStyle.css';

// Make an option for each character
function Choices({ closeTarget, location }) {
  const characters = useContext(CharactersContext);
  console.log(location.y)
  return (
    // className will prevent the choices from rendering above the screen view
    <div className={`choices ${location.y <= 500 ? 'below' : ''}`}>
      {/* add close button */}
      <CharacterOption name="x" closeTarget={closeTarget} />
      {/* add a button for every character */}
      {characters.map((character) => (
        <CharacterOption
          key={character}
          name={character}
          location={location}
        />
      ))}
    </div>
  );
}

Choices.propTypes = {
  closeTarget: func.isRequired,
  location: objectOf(number).isRequired,
};

export default Choices;
