// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDsS-ahLgYpAuspJTcP-JIFZgBgCIiLyHE",
  authDomain: "vocubulary-bcc4b.firebaseapp.com",
  projectId: "vocubulary-bcc4b",
  storageBucket: "vocubulary-bcc4b.firebasestorage.app",
  messagingSenderId: "999169963073",
  appId: "1:999169963073:web:26d742ac6a42190931c2c0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


 const auth = getAuth(app);
 export default auth;

