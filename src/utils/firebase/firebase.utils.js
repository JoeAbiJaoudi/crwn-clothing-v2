import { initializeApp } from "firebase/app"; //function from firebase app
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC5K9nRzYXLN8L0GRZGoaF1QGmVVSMCPGM",
  authDomain: "crwn-clothing-db-e4ed6.firebaseapp.com",
  projectId: "crwn-clothing-db-e4ed6",
  storageBucket: "crwn-clothing-db-e4ed6.appspot.com",
  messagingSenderId: "128344729378",
  appId: "1:128344729378:web:88d426a4208b6f4551a77b",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);


const provider = new GoogleAuthProvider(); //first step get a provider
provider.setCustomParameters({

    prompt : "select_account",

}); //for Google Auth Provider

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

