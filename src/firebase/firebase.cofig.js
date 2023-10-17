// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCRMJlNgw343-x1LBrG1kubexFNLE6PAlo",
  authDomain: "coffee-shop-34890.firebaseapp.com",
  projectId: "coffee-shop-34890",
  storageBucket: "coffee-shop-34890.appspot.com",
  messagingSenderId: "996587457030",
  appId: "1:996587457030:web:38854e07d71ea8de199187"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;