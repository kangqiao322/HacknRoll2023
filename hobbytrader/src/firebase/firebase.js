// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAFSyOyvjKI6olWraHuQ40ZvpItFOqBrmI",
  authDomain: "hobby-trader.firebaseapp.com",
  projectId: "hobby-trader",
  storageBucket: "hobby-trader.appspot.com",
  messagingSenderId: "931172965708",
  appId: "1:931172965708:web:886875988c61c627a043e9",
  measurementId: "G-RF0FGCYP84"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);