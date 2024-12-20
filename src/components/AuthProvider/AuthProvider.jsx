
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../../firebase/firebase.config";


export  const authContext = createContext();

// eslint-disable-next-line react/prop-types
const AuthProvider = ({ routes }) => {
    
    const googleProvider = new GoogleAuthProvider()

    // eslint-disable-next-line no-unused-vars
    const [user,setUser] = useState(null)
     const [loading,setLoading] = useState(true)
    console.log(user);
    // eslint-disable-next-line no-unused-vars
    const handleRegister = (email,password)=>{

       return createUserWithEmailAndPassword(auth, email, password)
        // eslint-disable-next-line no-unused-vars
        // .then(res=>signOut(auth))
    }

    // eslint-disable-next-line no-unused-vars
    const handleLogin = (email,password)=>{
     return   signInWithEmailAndPassword(auth, email, password)
    }


    // eslint-disable-next-line no-unused-vars
    const LogOut =()=>{
        return signOut();
    }


    // eslint-disable-next-line no-unused-vars
    const handleGoogleLogin = () =>{
   return   signInWithPopup(auth,googleProvider)
    }



const manageProfile =(name,image) =>{
  return  updateProfile(auth.currentUser,{
        displayName:name,photoURL:image
    })
}
    // eslint-disable-next-line no-unused-vars
    const handleLogout = () =>{
        signOut(auth)
    }

      const authInfo ={
        handleRegister,
        handleLogin,
        handleGoogleLogin,
        handleLogout,
        signOut,
        manageProfile,
        user,
        setUser,
        loading
      }

      useEffect(()=>{
           const unsubscribe = onAuthStateChanged(auth,(currentUser)=>{
             
              // console.log(currentUser)

              if(currentUser){
                setUser(currentUser)
              }
              else{
                setUser(null)
              }
              setLoading(false)

            return ()=>{
                unsubscribe()
            }
           })
      },[])

    return (
        <div>
            <authContext.Provider value={authInfo}>{routes}</authContext.Provider>
        </div>
    );
};

export default AuthProvider;

