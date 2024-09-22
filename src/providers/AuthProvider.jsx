import PropTypes from 'prop-types';
import { createContext, useEffect, useState } from 'react';
import {
  createUserWithEmailAndPassword,
  EmailAuthProvider,
  GithubAuthProvider,
  GoogleAuthProvider,
  onAuthStateChanged,
  reauthenticateWithCredential,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updatePassword,
  updateProfile
} from 'firebase/auth';
import auth from '../firebase/firebase.config';
import { getASecureRandomPassword } from '../api/utils';
import { axiosApi } from '../api/axiosApi';




export const AuthContext = createContext(null);

// auth Provider
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // create user
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // update user
  const updateUserProfile = (name, photo) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    });
  };

  // login user
  const logInUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // google login
  const googleLogin = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  // github login
  const githubLogin = () => {
    setLoading(true);
    return signInWithPopup(auth, githubProvider);
  };

  // update password
 const updateUserPass = async (user, currentPassword) => {
   const newPassword = getASecureRandomPassword(); // Generate a secure random password
   setLoading(true);

   try {
     // Create the credential using email and current password
     const credential = EmailAuthProvider.credential(
       user.email,
       currentPassword
     );

     // Step 1: Re-authenticate the user with the credential (their email and current password)
     await reauthenticateWithCredential(user, credential);

     // Step 2: After re-authentication, update the password
     await updatePassword(user, newPassword);
   } catch (error) {
     console.error('Error updating password:', error);   
   } finally {
     setLoading(false);
   }
 };

  // reset pass with emial
  const resetUserPass = (email) => {
    setLoading(true)
    return sendPasswordResetEmail(auth, email);
  }

  // sign out
  const logOutUser = () => {
    setLoading(true);
    return signOut(auth);
  };



  // set a observer
  useEffect( () => {
    const unSubscribe = onAuthStateChanged(auth, async (currentUser) => {
      setUser(currentUser);
      console.log(currentUser)

      if (currentUser) {
        const userInfo = { email: currentUser.email };
 try {
   const res = await axiosApi.post('/jwt', userInfo); 

     localStorage.setItem('access-token', res.data.token);
   
 } catch (error) {
   console.error('Failed to fetch token:', error);
   logOutUser(); 
 } finally {
   setLoading(false);
 }
      } else {
        localStorage.removeItem('access-token');
      }
      setLoading(false);
    });

    return () => unSubscribe();
  }, [axiosApi]);



  const authInfo = {
    user,
    loading,
    setLoading,
    createUser,
    updateUserProfile,
    logInUser,
    logOutUser,
    googleLogin,
    githubLogin,
    updateUserPass,
    resetUserPass,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node,
};

export default AuthProvider;
