// Saves a new message to Cloud Firestore.
import {
  getFirestore,
  collection,
  addDoc,
  doc,
  getDocs,
  deleteDoc,
  orderBy,
  serverTimestamp,
  getDoc,
} from 'firebase/firestore';
import { initializeApp } from 'firebase/app';
import { getFirebaseConfig } from './firebase-config';

const firebaseApp = initializeApp(getFirebaseConfig());

const db = getFirestore(firebaseApp);

// Gets x and y coordinates of original images and looks if they exist in the
// 'result' collection on database.
async function lookForResult(x, y) {
  // Add a new message entry to the Firebase database.
  const docRef = doc(db, 'results', `${x}-${y}`);
  const result = await getDoc(docRef);

  if (result.exists()) {
    return result.data().hit;
  }
  // doc.data() will be undefined in this case
  console.log('No such document!');
  return false;
}

const database = { lookForResult };

export default database;
