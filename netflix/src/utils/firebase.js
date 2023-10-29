// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCjRwQOMqn_bOyKJ7TP2pDmWJQ_PwIbLLI",
  authDomain: "netflix-318e8.firebaseapp.com",
  projectId: "netflix-318e8",
  storageBucket: "netflix-318e8.appspot.com",
  messagingSenderId: "119645205859",
  appId: "1:119645205859:web:a400dd2c5e69b4825ccf56",
  measurementId: "G-ML0TRP3KXG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth =getAuth();