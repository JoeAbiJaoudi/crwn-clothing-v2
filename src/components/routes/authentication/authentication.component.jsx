import { signInWithGooglePopup, createUserDocumentFromAuth, signInWithsignInWithGoogleRedirect, auth} from "../../../utils/firebase/firebase.utils"; 


import './authentication.styles.scss';
import SignUpForm from "../../sign-up-form/sign-up-form.component";
import SignInForm from "../../sign-in-form/sign-in-form.component";

 const Authentication = () => {
 {/*

 useEffect(async () => {
    const response = await getRedirectResult(auth);
    console.log(response);
  }, []);*/}
  //asychroneous function


  const logGoogleRedirectUser = async () => {
    //const response = await signInWithGooglePopup();
    //console.log(response);
    const { user } = await signInWithsignInWithGoogleRedirect();
    console.log({user});
  };


  return (
    <div className="authentication-container">
      <SignInForm></SignInForm>
      <SignUpForm></SignUpForm>
    </div>
  );
};

export default Authentication;
