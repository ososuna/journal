import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyD1c3eo9nbQHVwS1Kg5xH5TYqkwTYTuvf4",
  authDomain: "journey-app-a5b7c.firebaseapp.com",
  projectId: "journey-app-a5b7c",
  storageBucket: "journey-app-a5b7c.appspot.com",
  messagingSenderId: "590372406796",
  appId: "1:590372406796:web:44715752c38c75ccb5d029"
};

firebase.initializeApp( firebaseConfig );

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export {
  db,
  firebase,
  googleAuthProvider
}
