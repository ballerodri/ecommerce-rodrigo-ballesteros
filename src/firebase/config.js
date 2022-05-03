// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { getAuth } from "firebase/auth" 
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCLXUICI2aJR55rfnOQCHu4yJVQv4zWW2I",
  authDomain: "ecommerce-rodrigo-ballesteros.firebaseapp.com",
  projectId: "ecommerce-rodrigo-ballesteros",
  storageBucket: "ecommerce-rodrigo-ballesteros.appspot.com",
  messagingSenderId: "671419762311",
  appId: "1:671419762311:web:4dd59923f8143b534b9a22"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
const auth = getAuth(app)

export { db, auth}