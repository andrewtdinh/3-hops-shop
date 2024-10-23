import { initializeApp } from "firebase/app";
import { getAuth, signInWithRedirect, SigninWithPopup, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';

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

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, 'users', userAuth.uid);

  console.log(userDocRef);

  const userSnapshot = await getDoc(userDocRef)
  console.log(userSnapshot)
  console.log(userSnapshot.exists());

  // if user data doesn't exist
  // create / set the document with data from userAuth in my collection
  if (!userDocRef.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt
      })
    } catch (error) {
      console.log('Error creating the user object', error.message);
    }
  }
  
  return userDocRef;
}

