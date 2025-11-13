
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/12.5.0/firebase-app.js";
  import { getAuth } from "https://www.gstatic.com/firebasejs/12.5.0/firebase-auth.js";
  import { getFirestore } from "https://www.gstatic.com/firebasejs/12.5.0/firebase-firestore.js";


  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyB5yuDRUBEQSOyZq4-ytP5kBn5xUW5XVhA",
    authDomain: "smart-tourism-791af.firebaseapp.com",
    projectId: "smart-tourism-791af",
    storageBucket: "smart-tourism-791af.firebasestorage.app",
    messagingSenderId: "937804238380",
    appId: "1:937804238380:web:f8d7532cfa7b89afe28b89",
    measurementId: "G-XTZMZ94865"
  };

  // Initialize Firebase
  export const app = initializeApp(firebaseConfig);
  export const auth = getAuth(app);
  export const db = getFirestore(app);
  
