import { initializeApp } from "firebase/app"; //function from firebase app
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

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
  prompt: "select_account",
}); //for Google Auth Provider

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

//points to data base
export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, "users", userAuth.uid);
  console.log(userDocRef);

  const userSnapshot = await getDoc(userDocRef);
  console.log(userSnapshot);
  console.log(userSnapshot.exists());

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    //if the user snapshot does not exist we want to set it in our database
    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
      });
    } catch (error) {
      console.log(`error creating the user`, error.message);
    }
  }

  //if use data exists

  //if user data does not exists

  return userDocRef;
};
