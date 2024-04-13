// src/contexts/UserContext.js
import React, { createContext, useContext, useState, useEffect } from "react";
import { auth } from "/FirebaseConfig"; // Update this path if your FirebaseConfig file is located elsewhere

const UserContext = createContext();

export const useUser = () => useContext(UserContext);

export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
    });

    return unsubscribe;
  }, []);

  return (
    <UserContext.Provider value={{ currentUser }}>
      {children}
    </UserContext.Provider>
  );
};
