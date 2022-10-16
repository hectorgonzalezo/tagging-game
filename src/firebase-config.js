const config = {
  apiKey: "AIzaSyDSyG3b3Ureck1U3fftqxmIm9232KPYRpk",
  authDomain: "wheres-waldo-6619d.firebaseapp.com",
  projectId: "wheres-waldo-6619d",
  storageBucket: "wheres-waldo-6619d.appspot.com",
  messagingSenderId: "880233627006",
  appId: "1:880233627006:web:f6951e7ecb2d9b8360072f",
  measurementId: "G-W7P7383KDB"
};

export function getFirebaseConfig() {
  if (!config || !config.apiKey) {
    throw new Error(
      "No Firebase configuration object provided." +
        "\n" +
        "Add your web app's configuration object to firebase-config.js"
    );
  } else {
    return config;
  }
}
