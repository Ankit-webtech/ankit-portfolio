import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCwgrceq9vsKkQETtMrP_g6S-RaXWzjkWg",
  authDomain: "portfolio-auth-5a8a4.firebaseapp.com",
  projectId: "portfolio-auth-5a8a4",
  storageBucket: "portfolio-auth-5a8a4.firebasestorage.app",
  messagingSenderId: "919819312450",
  appId: "1:919819312450:web:4b0e99be57558c36c8bcdb"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
