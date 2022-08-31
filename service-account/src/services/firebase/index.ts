import dotenv from 'dotenv';
import { initializeApp, FirebaseError } from "firebase/app";
import {getAuth, signInWithEmailAndPassword} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

dotenv.config();

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.APIKEY,
  authDomain: process.env.AUTHDOMAIN,
  projectId: process.env.PROJECTID,
  storageBucket: process.env.STORAGEBUCKET,
  messagingSenderId: process.env.MESSAGINGSENDERID,
  appId: process.env.APPID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//Autenticação
const sigInAdmin = (email: string, password: string) => (signInWithEmailAndPassword(getAuth(), email, password));

export {FirebaseError, sigInAdmin}