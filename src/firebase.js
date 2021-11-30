import { initializeApp } from "firebase/app";
import {getFirestore} from "@firebase/firestore"
import { collection, addDoc } from "firebase/firestore"; 

const firebaseConfig = {
  apiKey: "AIzaSyD9v0Xznq9UfGqUht4Xij3F7YZD5dS8Qrg",
  authDomain: "ecommerce-b7536.firebaseapp.com",
  projectId: "ecommerce-b7536",
  storageBucket: "ecommerce-b7536.appspot.com",
  messagingSenderId: "1010063116531",
  appId: "1:1010063116531:web:8bded1efb90ec04a0acf86",
  measurementId: "G-RJWMFT4H4E"
};

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)
export {collection, addDoc, db}