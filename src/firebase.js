// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCI8VjSR8tBIKAEEVYFthh4DpQ4aKZciq8",
  authDomain: "listed-pro.firebaseapp.com",
  projectId: "listed-pro",
  storageBucket: "listed-pro.appspot.com",
  messagingSenderId: "145360086590",
  appId: "1:145360086590:web:5726b53808193a71cc136f",
  measurementId: "G-CB3BMRVS8G"
};

// Initialize Firebase
 const app = initializeApp(firebaseConfig);
 export default app;