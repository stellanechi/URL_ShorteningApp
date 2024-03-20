// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDk_EqX91LkGp2LKlenLLfV10TdNVDMHu4",
  authDomain: "auth-d5b32.firebaseapp.com",
  projectId: "auth-d5b32",
  storageBucket: "auth-d5b32.appspot.com",
  messagingSenderId: "892742725368",
  appId: "1:892742725368:web:6f0b2986cf4522dbb4550d",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const auth = getAuth(app);

export { app, auth, db, onAuthStateChanged };
