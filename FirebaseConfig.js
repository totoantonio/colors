import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithRedirect,
  signOut,
} from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_APP_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_APP_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_APP_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_APP_FIREBASE_APP_ID,
  measurementId: import.meta.env.VITE_APP_FIREBASE_MEASUREMENT_ID,
};

// Initialize Firebase with only authentication
const app = initializeApp(firebaseConfig, {
  /* only Auth */
});
const auth = getAuth(app);
// Function for Google Sign-in with redirect
const signInWithGoogle = () => {
  const provider = new GoogleAuthProvider();
  signInWithRedirect(auth, provider);
};

// Function for signing out the user
const signOutUser = () => {
  signOut(auth)
    .then(() => {
      // Sign-out successful logic (e.g., redirect to login page)
      console.log("User signed out successfully!");
    })
    .catch((error) => {
      // Handle sign-out errors
      console.error("Error signing out:", error);
    });
};

export { auth, signInWithGoogle, signOutUser };
