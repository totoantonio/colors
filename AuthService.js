import { auth } from "./FirebaseConfig.js";

export const signUp = (email, password) => {
  return auth
    .createUserWithEmailAndPassword(email, password)
    .then(() => {
      // Sign-up successful logic (e.g., redirect to home page)
      console.log("User signed up successfully!");
    })
    .catch((error) => {
      // Handle sign-up errors
      console.error("Error signing up:", error);
      // You can display an error message to the user here
    });
};

export const signIn = (email, password) => {
  return auth
    .signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Sign-in successful logic (e.g., redirect to dashboard)
      const user = userCredential.user;
      console.log("User signed in:", user.email);
    })
    .catch((error) => {
      // Handle sign-in errors
      console.error("Error signing in:", error);
      // You can display an error message to the user here
    });
};
