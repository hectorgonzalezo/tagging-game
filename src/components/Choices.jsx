import React, { useState } from 'react';
import styled from 'styled-components';
import CharacterChoice from './CharacterOption';

const Options = styled.div`
  position: absolute;
  background-color: var(--midnight-green-eagle-green-3);
  left: 50%;
  transform: translate(-50%, 0);
  bottom: 110%;
  padding: 10px;
  border: 2px solid var(--skobeloff);
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

function Choices() {
  return (
    <Options>
      <CharacterChoice name='boo' />
      <CharacterChoice name='juan' />
      <CharacterChoice name='juan' />
      <CharacterChoice name='juaasdfdn' />
    </Options>
  );
}

export default Choices;
