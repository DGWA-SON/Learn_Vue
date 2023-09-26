import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDPywi2aH5gF_qcgkOGR03Y4P9uqkMOhAo",
  authDomain: "imoney-5f553.firebaseapp.com",
  projectId: "imoney-5f553",
  storageBucket: "imoney-5f553.appspot.com",
  messagingSenderId: "245488762801",
  appId: "1:245488762801:web:ad922eb288bce0dc198790",
  measurementId: "G-DPL0E6H42D",
};

firebase.initializeApp(firebaseConfig);

const projectAuth = firebase.auth();
const projectFirestore = firebase.firestore();

const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectAuth, projectFirestore, timestamp };
