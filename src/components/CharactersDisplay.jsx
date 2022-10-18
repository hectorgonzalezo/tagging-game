import React, { useContext } from 'react';
import styled from 'styled-components';
import CharactersContext from './CharactersContext';


function CharactersDisplay() {
  const characters = useContext(CharactersContext);
  return (
    <ul name="Characters" id="char-dropdown">
      <li>
        <h2>Characters</h2>
        <ul>
          {characters.map((character) => (
            <li key={character} value={character} id={`${character}-option`}>
              {character}
            </li>
          ))}
        </ul>
      </li>
    </ul>
  );
}

export default CharactersDisplay;
