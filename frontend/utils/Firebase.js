import {getAuth, GoogleAuthProvider} from "firebase/auth"
import { initializeApp } from "firebase/app";
const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_APIKEY ,
  authDomain: "smartshop-809f1.firebaseapp.com",
  projectId: "smartshop-809f1",
  storageBucket: "smartshop-809f1.firebasestorage.app",
  messagingSenderId: "877447623428",
  appId: "1:877447623428:web:c07c3a60a5b5c9699c5651"
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const provider = new GoogleAuthProvider()


export {auth , provider}

