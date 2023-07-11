// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyCWwARD5lbtbLvizbEl-oj8GAl76NlYrn4",
  authDomain: "myscissorproject.firebaseapp.com",
  projectId: "myscissorproject",
  storageBucket: "myscissorproject.appspot.com",
  messagingSenderId: "700809117787",
  appId: "1:700809117787:web:8ecaa0d484dd82c9fe3f7e",
  measurementId: "G-2X8RE4F8WS",
};

const app = initializeApp(firebaseConfig);
// firebase.initializeApp(firebaseConfig);

// Initialize Firebase

export default getFirestore();

//Use getAuth() to get the Auth service:
export const auth = getAuth(app);

// const analytics = getAnalytics(app);
