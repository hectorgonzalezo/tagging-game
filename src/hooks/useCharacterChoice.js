import React, { useState } from 'react';
import database from '../firebase';

function useCharacterChoice() {
  const [hit, setHit] = useState(false);

  // Checks with database if choice results in a hit
  async function checkChoice(location, character) {
    console.log(location)
    // Look if the coordinates exists in database
    const result = await database.lookForResult(location, character);
    setHit(result);
    return result;
  }

  return { hit, checkChoice };
}

export default useCharacterChoice;
