// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB47m7ef1b4oa-wl6DCxv-RQOqJyDt2AMs",
  authDomain: "libreria-17fc4.firebaseapp.com",
  projectId: "libreria-17fc4",
  storageBucket: "libreria-17fc4.appspot.com",
  messagingSenderId: "738224218086",
  appId: "1:738224218086:web:8cd6807ee53f182e184027"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)