import React, { useState } from 'react';
import getHitResult from '../API/hitResult';

function useCharacterChoice() {
  const [hit, setHit] = useState('');

  // Checks with database if choice results in a hit
  async function checkChoice(location, character) {
    // Look if the coordinates exists in database
    const result = await getHitResult(character, location);
    setHit(result);
    return result;
  }

  return { hit, checkChoice };
}

export default useCharacterChoice;
