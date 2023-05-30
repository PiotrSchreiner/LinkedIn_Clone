import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDaBj6F6CqiCVSB1LSAV5-DUBNeKBWna78",
  authDomain: "linkedin-clone-89dc7.firebaseapp.com",
  projectId: "linkedin-clone-89dc7",
  storageBucket: "linkedin-clone-89dc7.appspot.com",
  messagingSenderId: "570863088707",
  appId: "1:570863088707:web:95b81aa710b44ee40850f6",
  measurementId: "G-ZNWECKJ48Y",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
