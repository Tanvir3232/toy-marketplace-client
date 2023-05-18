// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBsay2jjImhFQqs48ahaSm0DvN13ec1lxA",
  authDomain: "smartytoys-8622a.firebaseapp.com",
  projectId: "smartytoys-8622a",
  storageBucket: "smartytoys-8622a.appspot.com",
  messagingSenderId: "27235835379",
  appId: "1:27235835379:web:dd3c4ebccc49882c134686",
  measurementId: "G-TBZY1E5H45"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default app;