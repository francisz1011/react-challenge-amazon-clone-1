import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAdd3p3MADIfSpxj92tjK39sbYlh_dDEr0",
  authDomain: "clone-a342d.firebaseapp.com",
  projectId: "clone-a342d",
  storageBucket: "clone-a342d.appspot.com",
  messagingSenderId: "222191744450",
  appId: "1:222191744450:web:af28517a64620ae9fed25b",
  measurementId: "G-02LNGVVQL0"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };