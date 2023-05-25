import React, { createContext, useEffect, useState } from 'react';
import {GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut} from 'firebase/auth';
import app from '../firebase/firebase.config';

export const AuthContext = createContext(null);

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const gitHubProvider = new GithubAuthProvider();

const AuthProviders = ({children}) => {
    
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    

     /* ------- Email password Login -------------- */
    const createEmailPassUser = ( email, password) => {
        setLoading(true);
       return createUserWithEmailAndPassword(auth, email, password)
    }
  /* ------- Email password Registration -------------- */
    const signInUserWithEmail = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

      /* ------- Google Login Method -------------- */
    const registerWithGoogle = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider)
    }
  /* ------- Github Login Code-------------- */
    const registerWithGitHub = () => {
        setLoading(true);
        return signInWithPopup(auth, gitHubProvider)
    }

  /* -------Logout --------- */
    const logOut = () => {
        setLoading(true);
        return signOut(auth)
    }

      /* ------- User Status monitoring --------- */
    useEffect( () => {
       const unSubscribe =  onAuthStateChanged( auth , loggedUser => {
          setUser(loggedUser)
          setLoading(false);
        })

        return () => {
             unSubscribe();
        }
    }, [])

    
    const authInfo = {
        user,
        loading,
        createEmailPassUser,
        signInUserWithEmail,
        registerWithGoogle,
        registerWithGitHub, 
        logOut
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;