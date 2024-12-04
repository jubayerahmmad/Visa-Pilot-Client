import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../firebase/firebase.config";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loader, setLoader] = useState(true);

  const googleProvider = new GoogleAuthProvider();

  // login with google

  const googleLogin = () => {
    return signInWithPopup(auth, googleProvider);
  };

  // create user/register
  const createUser = (email, password) => {
    setLoader(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // sign in user/login
  const loginUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  // observer
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
      } else {
        setUser(null);
      }
      setLoader(false);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const authInfo = { user, setUser, createUser, loginUser, googleLogin };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
