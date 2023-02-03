import React, { useContext } from 'react';
import styled from 'styled-components';
import CharactersContext from './CharactersContext';
import formatImgTitle from '../utils/formatImgTitle';

const CharImage = styled.img`
  height: min(15vw,100px);
  border-radius: 1rem;
`;

const CharItem = styled.li`
  background-color: var(--palatinate-purple);
  border: 1px solid white;
  font-size: clamp(0.8rem, 3vw, 1.5rem);
  display: flex;
  gap: 5px;
  align-items: center;
  justify-content: space-around;
  box-shadow: 2px 2px 5px black;
  opacity: ${(props) => props.opacity};
  text-align: end;
`;

function CharactersDisplay() {
  const characters = useContext(CharactersContext);
  return (
    <ul name="Characters" id="char-dropdown">
      <li>
        <h2>↓Characters</h2>
        <ul>
          {characters.map((character) => {
            const imgTitle = formatImgTitle(character.name);
            let src;
            // import image corresponding to character name, if its not in jpeg, try the png version
            try {
              src = require(`../assets/charImages/${imgTitle}.jpeg`);
            } catch (error) {
              src = require(`../assets/charImages/${imgTitle}.png`);
            }
            return (
              <CharItem key={character.name} value={character.name} id={`${character.name}-option`} opacity={character.guessed ? 0.3 : 1}>
                <CharImage src={src} alt="" />
                {character.name}
              </CharItem>
            );
          })}
        </ul>
      </li>
    </ul>
  );
}

export default CharactersDisplay;
