// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCCAGo0P0KsevRCUBIh4YRjjeat866sZaQ",
  authDomain: "ginus-car-serviec.firebaseapp.com",
  projectId: "ginus-car-serviec",
  storageBucket: "ginus-car-serviec.appspot.com",
  messagingSenderId: "790713838656",
  appId: "1:790713838656:web:bcbb10b576d5b928e043a5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
