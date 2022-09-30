import { signInWithGooglePopup, createUserDocumentFromAuth, signInWithsignInWithGoogleRedirect, auth} from "../../../utils/firebase/firebase.utils"; 
import {useEffect } from 'react';
import { getRedirectResult } from "firebase/auth";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  FacebookAuthProvider
} from "firebase/auth";



import SignUpForm from "../../sign-up-form/sign-up-form.component";


 const SignIn = () => {
 {/*

 useEffect(async () => {
    const response = await getRedirectResult(auth);
    console.log(response);
  }, []);*/}
  //asychroneous function
  const logGoogleUser = async () => {
    //const response = await signInWithGooglePopup();
    //console.log(response);
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  };

  const logGoogleRedirectUser = async () => {
    //const response = await signInWithGooglePopup();
    //console.log(response);
    const { user } = await signInWithsignInWithGoogleRedirect();
    console.log({user});
  };


  return (
    <div>
      <h1>Sign In Page</h1>
      <button onClick={logGoogleUser}>Sign in with Google Popup</button>
     {/* <button onClick={logGoogleRedirectUser}>Sign in with Google Redirect</button>*/}
     <SignUpForm></SignUpForm>
    </div>
  );
};

export default SignIn;
