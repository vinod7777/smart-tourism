
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/12.5.0/firebase-app.js";
  import { getAuth } from "https://www.gstatic.com/firebasejs/12.5.0/firebase-auth.js";
  import { getFirestore } from "https://www.gstatic.com/firebasejs/12.5.0/firebase-firestore.js";


  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDtL71aTloB_Oh7iOF1jZgJjzHS2D1QzDU",
  authDomain: "smart-tourism-6929c.firebaseapp.com",
  projectId: "smart-tourism-6929c",
  storageBucket: "smart-tourism-6929c.firebasestorage.app",
  messagingSenderId: "601993917766",
  appId: "1:601993917766:web:b587d4faf96c09e027a147"
};

  // Initialize Firebase
  export const app = initializeApp(firebaseConfig);
  export const auth = getAuth(app);
  export const db = getFirestore(app);
  
