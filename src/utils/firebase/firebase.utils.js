import { initializeApp } from "firebase/app";
import { 
  getAuth, 
  signInWithRedirect , 
  GoogleAuthProvider, 
  signInWithPopup,
  createUserWithEmailAndPassword
} from 'firebase/auth';
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

const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
  prompt: "select_account"
});

export const auth = getAuth();
export const signInWithGooglePopUp = () => signInWithPopup(auth, googleProvider);
export const signInWithGoogleRedirect = () => signInWithRedirect(auth, googleProvider)

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth, additionalInformation={}) => {
  const userDocRef = doc(db, 'users', userAuth.uid);
  const userSnapshot = await getDoc(userDocRef)

  if (!userAuth) return; 

  // if user data doesn't exist
  // create / set the document with data from userAuth in my collection
  if (!userDocRef.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInformation
      })
    } catch (error) {
      console.log('Error creating the user object', error.message);
    }
  }
  
  return userDocRef;
}

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;
  
  return await createUserWithEmailAndPassword(auth, email, password)
}

