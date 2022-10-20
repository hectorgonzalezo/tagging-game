import { shuffle } from 'lodash';

const availableCharacters = [
  'Waldo',
  'QWOP',
  'Rocko',
  'Jamie Hyneman',
  'Boo',
  'General Snoo',
  'Dwight Schrute',
  'Ghost Rider',
  'Ariel',
  'Nurse Joker',
  'No-face',
  'Tin Man',
  'Rick Grimes',
  'Captain America',
];
// Gets characters at random from array
function getRandomCharacters(howMany) {
  const chosenCharacters = shuffle(availableCharacters).splice(0, howMany);

  // add false to guessed for every character
  // This is used to grey out guessed characters from list
  const charactersArray = chosenCharacters.map((character) => ({
    name: character,
    guessed: false,
  }));

  return charactersArray;
}

export default getRandomCharacters;
