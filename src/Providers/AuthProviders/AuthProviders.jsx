import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { app } from "../Firebase/firebase.confiq";

export const AuthContex = createContext(null)




const AuthProvider = ( {children} ) => {
    const auth = getAuth(app);
    const [loading,isLoading] = useState(true)
    const [user,setUser] = useState(null)

    const handleLogin=(email,password)=>{
        return signInWithEmailAndPassword(auth,email,password)
    }

    const handleSignUp=(email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const handleSignUpByGoogle=(provider)=>{
        return signInWithPopup(auth,provider)
    }
    const handleSignupWithGithub=(provider)=>{
        return signInWithPopup(auth,provider)
    }

    const handleLogOut=()=>{
        return signOut(auth);
    }

    //get the user
    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth,loggedUser=>{
            setUser(loggedUser);
            isLoading(false);
        })

        return ()=>{
            unSubscribe();
        }
    },[])

    const AuthInfo = {
        auth,
        loading,
        isLoading,
        user,
        setUser,
        handleLogin,
        handleSignUp,
        handleSignUpByGoogle,
        handleSignupWithGithub,
        handleLogOut
    }

    return (
        <AuthContex.Provider value={AuthInfo}>
            {children}
        </AuthContex.Provider>
    );
};

export default AuthProvider;