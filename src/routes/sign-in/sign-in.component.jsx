import { useEffect } from "react";
import { getRedirectResult } from 'firebase/auth';
import { auth, signInWithGooglePopUp, signInWithGoogleRedirect, createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils";

import SignUpForm from "../../components/sign-up-form/sign-up-form.component";

const SignIn = () => {
  useEffect(() => {
    async function fetchResult() {
      const response = await getRedirectResult(auth);
  
      if (response) {
        const userDocRef = await createUserDocumentFromAuth(response.user)
      }
    }

    fetchResult();
  }, [])

  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopUp();
    const userDocRef = await createUserDocumentFromAuth(user)
  }

  const logGoogleRedirectUser = async () => {
    const { user } = await signInWithGoogleRedirect();
    const userDocRef = await createUserDocumentFromAuth(user)
  }

  return (
    <div>
      <h1>Sign In Page</h1>
      <button onClick={logGoogleUser}>Sign in with Google Popup</button>
      <button onClick={logGoogleRedirectUser}>Sign in with Google Redirect</button>
      <SignUpForm/>
    </div>
  )
}

export default SignIn;