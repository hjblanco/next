import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAmyPpBmOdxYa97--IFtcAS3ty11mBq70I",
  authDomain: "pinters-a5954.firebaseapp.com",
  projectId: "pinters-a5954",
  storageBucket: "pinters-a5954.firebasestorage.app",
  messagingSenderId: "724497073752",
  appId: "1:724497073752:web:38e82f2f51d37ba5f36c2d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app);