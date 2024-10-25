// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCBrJQX0vwg-VHhDFlPwHNSw2gSTm65Yhc",
  authDomain: "phishing-ctf.firebaseapp.com",
  projectId: "phishing-ctf",
  storageBucket: "phishing-ctf.appspot.com",
  messagingSenderId: "509256705888",
  appId: "1:509256705888:web:cddbdaa731ee887714a005",
  measurementId: "G-572ZS34KL1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Firestore
const db = getFirestore(app);

export { db };
