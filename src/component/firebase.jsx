// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAcxEUjW6m1YVtC3mpQ2hanHMxsLMetHjQ",
  authDomain: "login-auth-e63d4.firebaseapp.com",
  projectId: "login-auth-e63d4",
  storageBucket: "login-auth-e63d4.appspot.com",
  messagingSenderId: "1094044845215",
  appId: "1:1094044845215:web:b8d8a7f05518b17f760eaa",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const db = getFirestore(app);
export default app;
