// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCU7Z9cjEXMnhzdrh9FcoP57KjFbZO4rR4",
  authDomain: "farmers-assistant-5b173.firebaseapp.com",
  projectId: "farmers-assistant-5b173",
  storageBucket: "farmers-assistant-5b173.appspot.com",
  messagingSenderId: "872170303948",
  appId: "1:872170303948:web:e900f32dbac6e0e3c42d69",
  measurementId: "G-2CQJ2645FK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);