import React, { useEffect, useContext } from 'react';
import uniqid from 'uniqid';
import { func } from 'prop-types';
import CharactersContext from './CharactersContext';
import CharacterOption from './CharacterOption';
import '../styles/choicesStyle.css';
// Make an option for each character
function Choices({ closeTarget }) {
  const characters = useContext(CharactersContext);

  return (
    <div className="choices">
      {/* add close button */}
      <CharacterOption name="x" onClick={closeTarget} />
      {/* add a button for every character */}
      {characters.map((character) => (
        <CharacterOption
          key={character}
          name={character}
          onClick={() => {}}
        />
      ))}
    </div>
  );
}

Choices.propTypes = {
  closeTarget: func.isRequired,
};

export default Choices;
