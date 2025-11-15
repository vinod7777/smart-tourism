  // Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.5.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/12.5.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.5.0/firebase-firestore.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDtL71aTloB_Oh7iOF1jZgJjzHS2D1QzDU",
  authDomain: "smart-tourism-6929c.firebaseapp.com",
  projectId: "smart-tourism-6929c",
  storageBucket: "smart-tourism-6929c.firebasestorage.app",
  messagingSenderId: "601993917766",
  appId: "1:601993917766:web:b587d4faf96c09e027a147"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase services
const auth = getAuth(app);
const db = getFirestore(app);

// Export the services for other modules to use
export { auth, db, app };