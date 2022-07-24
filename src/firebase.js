import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCNOvI2OGYwXb5ATLuvJYBSbOvys3ecN-A",
  authDomain: "fir-e90c6.firebaseapp.com",
  projectId: "fir-e90c6",
  storageBucket: "fir-e90c6.appspot.com",
  messagingSenderId: "1056567556404",
  appId: "1:1056567556404:web:d77782f9657d74bf680d61",
  measurementId: "G-EX7KSQKHGP",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
