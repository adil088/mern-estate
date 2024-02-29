// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-a66d6.firebaseapp.com",
  projectId: "mern-estate-a66d6",
  storageBucket: "mern-estate-a66d6.appspot.com",
  messagingSenderId: "299320728229",
  appId: "1:299320728229:web:bc45dfafab604dea850b4c"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);