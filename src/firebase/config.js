import { getFirestore } from "firebase/firestore";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyATV9m1-Xrha5zUol0Yt-boiFnEV4TmHyc",
  authDomain: "ttech-store-react.firebaseapp.com",
  projectId: "ttech-store-react",
  storageBucket: "ttech-store-react.firebasestorage.app",
  messagingSenderId: "1027221420444",
  appId: "1:1027221420444:web:d48dcf19a75bb3b0107059"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)
