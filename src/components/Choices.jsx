import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import uniqid from 'uniqid';
import { func } from 'prop-types';
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
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
  gap: 7px;

  animation: grow 1s;

  & > button:first-child{
    background-color: red;
    grid-column: 1 / -1;
    justify-self: start;
    padding: 5px;

    :hover{
      background-color: var(--palatinate-purple);
    }
  }

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
function Choices({ closeTarget }) {
  const characters = useContext(CharactersContext);
  return (
    <Options>
      <CharacterOption name="x" onClick={closeTarget} />
      {characters.map((character) => (
        <CharacterOption key={character + uniqid()} name={character} onClick={()=>{}}/>
      ))}
    </Options>
  );
}

Choices.propTypes = {
  closeTarget: func.isRequired,
};

export default Choices;
