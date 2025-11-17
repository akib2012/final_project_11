import React, { useEffect, useState } from "react";
import Authcontext from "./Authcontext";
import { GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../Firebase/Firebase.init";

const AuthProvider = ({ children }) => {
 const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);
  const provider = new GoogleAuthProvider();

  // regester users

  const regesterUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  /// sing in user

  const singinUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };


  /// sing in with google 

  const googlesingin = () => {
    setLoading(true);
    return signInWithPopup(auth, provider)
  }


  //logout usere
  const logout = () => {
    setLoading(true);
    return signOut(auth);
  }


  // observer here

  useEffect(() => {
    const unsubscrive = onAuthStateChanged(auth, (currentuser) => {

        setUser(currentuser);
        setLoading(false);
    })

    return () => {
        unsubscrive();
    }
  }, [])


  

  const authinfo = {
    regesterUser,
    singinUser,
    googlesingin,
    user, 
    setUser,
    setLoading,
    logout,
  };
  return (
    <div>
      <Authcontext value={authinfo}>{children}</Authcontext>
    </div>
  );
};

export default AuthProvider;
