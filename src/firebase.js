// Saves a new message to Cloud Firestore.
import {
  getFirestore,
  collection,
  query,
  where,
  getDocs,
} from 'firebase/firestore';
import { initializeApp } from 'firebase/app';
import { getFirebaseConfig } from './firebase-config';

const firebaseApp = initializeApp(getFirebaseConfig());

const db = getFirestore(firebaseApp);

// Gets x and y coordinates of original images and looks if they exist in the
// 'result' collection on database.
async function lookForResult(location, character) {
  // Look with 100 pixels of tolerance
  const fuzzyRefX = query(
    collection(db, 'results'),
    where('x', '>', location.x - 50),
    where('x', '<', location.x + 50),
  );
  const fuzzyRefY = query(
    collection(db, 'results'),
    where('y', '>', location.y - 50),
    where('y', '<', location.y + 50),
  );

  const fuzzyResultX = await getDocs(fuzzyRefX);
  const fuzzyResultY = await getDocs(fuzzyRefY);

  // This will hold the character names for elements in x and y
  let fuzzyResults = [];

  fuzzyResultX.forEach((doc) => {
    // Add character to reference array
    fuzzyResults.push(doc.data().character);
  });

  fuzzyResultY.forEach((doc) => {
    // Add character to reference array
    fuzzyResults.push(doc.data().character);
  });

  fuzzyResults = fuzzyResults.filter((item) => item === character);
  // Only return true if both searches found the same character, and if its the right one
  if (
    fuzzyResults.length === 2
    && fuzzyResults[0] === character
    && fuzzyResults[0] === fuzzyResults[1]
  ) {
    return true;
  }

  return false;
}

const database = { lookForResult };

export default database;
