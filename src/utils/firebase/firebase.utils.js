import { initializeApp } from "firebase/app";
import { getAuth, signInWithRedirect, SigninWithPopup, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBpDOAvLrlDMMCRRTscr7qqbRUKN4EkHII",
  authDomain: "three-hops-shop.firebaseapp.com",
  projectId: "three-hops-shop",
  storageBucket: "three-hops-shop.appspot.com",
  messagingSenderId: "876482900560",
  appId: "1:876482900560:web:0cd52aafacc47396e95755"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account"
});

export const auth = getAuth();
export const signInWithGooglePopUp = () => signInWithPopup(auth, provider);