import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const config = {
    apiKey: "AIzaSyBDje8nqMBbkMcmlKr3kQzP4CVnz7sOP-c",
    authDomain: "crown-clothing-gmeher360.firebaseapp.com",
    databaseURL: "https://crown-clothing-gmeher360.firebaseio.com",
    projectId: "crown-clothing-gmeher360",
    storageBucket: "crown-clothing-gmeher360.appspot.com",
    messagingSenderId: "836127294591",
    appId: "1:836127294591:web:9949181ad01a86161cab4a",
    measurementId: "G-TYQKTJRCEN"
  };

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({
    prompt : 'select_account'
});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;


