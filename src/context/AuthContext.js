import { createContext, useContext, useEffect, useState } from "react";
import {
  GoogleAuthProvider,
  signInWithPopup,
  signInWithRedirect,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { auth } from "../firebase";


const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState({});
  // const [notificationAlert, setNotificationAlert] = useState({msg: '',type: ''});

  const googleSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider);
  };

  const logOut = () => {
    signOut(auth);
  };

  // const showMessage = (message, type) => {
  //   setNotificationAlert({
  //     msg: message,
  //     type: type
  //   })
  //   setTimeout(() => {
  //     setNotificationAlert('');
  //   }, 3000)
  // }

  // to check the state whether user is siged in or not
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      console.log("user", user);
    });
    return () => {
      unsubscribe();
    };
  }, [user]);
  console.log(user);

  return (
    <AuthContext.Provider value={{ googleSignIn, logOut, user}}>
      {children}
    </AuthContext.Provider>
  );
};

export const AuthUser = () => {
  return useContext(AuthContext);
};
