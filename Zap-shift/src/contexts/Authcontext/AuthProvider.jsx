import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { useState } from 'react';
import { auth } from '../../Firebase/firebase.init';
import Authcontext from './Authcontext';
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const registerUser = (email, password) => {
        setLoading
        return createUserWithEmailAndPassword(auth, email, password);
    };

    const signInUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }
     const signInGoogle = () =>{
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    }
    const authInfo = {
        user,
        loading,
        registerUser,
        signInUser,
        signInGoogle
    };

   
    return (
       <Authcontext.Provider value={authInfo}>
        {children}
       </Authcontext.Provider>
    );
};

export default AuthProvider;