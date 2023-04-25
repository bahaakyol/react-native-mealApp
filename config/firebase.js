
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAI8RSEgtWTNJ3E7TkA57fSOOsUaHoUzDA",
  authDomain: "mealapp-auth.firebaseapp.com",
  projectId: "mealapp-auth",
  storageBucket: "mealapp-auth.appspot.com",
  messagingSenderId: "763475354276",
  appId: "1:763475354276:web:061176794083af6ab5bc31"
};


let app;

if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig)
} else {
  app = firebase.app();
}

const db = app.firestore();
const auth = firebase.auth();
const firebaseAuth = firebase.auth;

export { db, auth , firebaseAuth};