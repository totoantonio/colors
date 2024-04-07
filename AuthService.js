// src/AuthService.js
import { auth } from "./FirebaseConfig";

export const signUp = (email, password) => {
  return auth.createUserWithEmailAndPassword(email, password);
};

export const signIn = (email, password) => {
  return auth.signInWithEmailAndPassword(email, password);
};

// Add other authentication methods as needed
