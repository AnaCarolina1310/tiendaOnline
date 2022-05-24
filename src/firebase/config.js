// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBmiOOHVXlue5DPyGHnMyhhEWJt-CZG60s",
  authDomain: "coder-6098d.firebaseapp.com",
  projectId: "coder-6098d",
  storageBucket: "coder-6098d.appspot.com",
  messagingSenderId: "382996389729",
  appId: "1:382996389729:web:4805ebb90d0a4497c9ef20",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
