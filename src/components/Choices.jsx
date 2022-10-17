import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import uniqid from 'uniqid';
import CharactersContext from './CharactersContext';
import CharacterOption from './CharacterOption';

const Options = styled.div`
  position: absolute;
  background-color: var(--midnight-green-eagle-green-3);
  left: 50%;
  transform: translate(-50%, 0);
  bottom: 110%;
  padding: 10px;
  border: 3px solid white;
  border-radius: 1rem;
  color: white;
  display: flex;
  flex-direction: column;
  gap: 5px;

  animation: grow 1s;

  @keyframes grow {
  from {
    transform: translate(-50%, 0) scale(0.1);
    opacity: 0;
  }
  to {
    transform: translate(-50%, 0) scale(1);
    opacity: 1;
  }
`;

// Make an option for each character
function Choices() {
  const characters = useContext(CharactersContext);
  return (
    <Options>
      {characters.map((character) => (
        <CharacterOption key={character + uniqid()} name={character} />
      ))}
    </Options>
  );
}

export default Choices;
