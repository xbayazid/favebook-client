// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC0QDHc61aQ49A_33YbufJmj70ESKePYoM",
  authDomain: "favebook-client.firebaseapp.com",
  projectId: "favebook-client",
  storageBucket: "favebook-client.appspot.com",
  messagingSenderId: "945571289321",
  appId: "1:945571289321:web:c7b3300a902d04e7c63878"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;