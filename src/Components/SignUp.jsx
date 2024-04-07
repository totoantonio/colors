// src/components/SignUp.jsx
import React, { useState } from "react";
import { signUp } from "../AuthService";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignUp = async () => {
    try {
      await signUp(email, password);
      console.log("User registered successfully");
      // Navigate to another page or show success message
    } catch (error) {
      console.error(error.message);
      // Handle errors (e.g., display error messages)
    }
  };

  return (
    <div>
      {/* Build your sign-up form UI */}
      <button onClick={handleSignUp}>Sign Up</button>
    </div>
  );
};

export default SignUp;
