import React, { useContext, lazy } from 'react';
import styled from 'styled-components';
import CharactersContext from './CharactersContext';
import formatImgTitle from '../utils/formatImgTitle';

const CharImage = styled.img`
  height: min(15vw,100px);
  border-radius: 1rem;
`;

function CharactersDisplay() {
  const characters = useContext(CharactersContext);
  return (
    <ul name="Characters" id="char-dropdown">
      <li>
        <h2>Characters</h2>
        <ul>
          {characters.map((character) => {
            const imgTitle = formatImgTitle(character);
            let src;
            // import image corresponding to character name, if its not in jpeg, try the png version
            try {
              src = require(`../assets/charImages/${imgTitle}.jpeg`);
            } catch (error) {
              src = require(`../assets/charImages/${imgTitle}.png`);
            }
            return (
              <li key={character} value={character} id={`${character}-option`}>
                <CharImage src={src} alt="" />
                {character}
              </li>
            );
          })}
        </ul>
      </li>
    </ul>
  );
}

export default CharactersDisplay;
