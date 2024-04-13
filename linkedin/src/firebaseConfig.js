// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage"; // TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDduOIMsCDW8FP2EmhyIl9IslGWpuxH-nU",
  authDomain: "linkedin-12269.firebaseapp.com",
  projectId: "linkedin-12269",
  storageBucket: "linkedin-12269.appspot.com",
  messagingSenderId: "157941213464",
  appId: "1:157941213464:web:e6c5e1ac5612abd260d66d",
  measurementId: "G-BRYMVTJS7C",
};

// Initialize Firebase
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, auth, firestore, storage };
