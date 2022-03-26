// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAVWQK7ZjtomCwQ5Z-INj66OjntNQmBIuE",
  authDomain: "talk-a-tive-7e8f4.firebaseapp.com",
  projectId: "talk-a-tive-7e8f4",
  storageBucket: "talk-a-tive-7e8f4.appspot.com",
  messagingSenderId: "321146943888",
  appId: "1:321146943888:web:4e1641f647730bd9201b15",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore();

export { auth, db}
