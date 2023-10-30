import React, { useEffect} from 'react'
import { signOut } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';
import { addUser, removeUser } from '../utils/userSlice';
import { netflixLogo, userAvatar } from '../utils/constants';




const Header = () => {
  
 const navigate= useNavigate();
 const dispatch =useDispatch();
  const user = useSelector(appStore=> appStore.user);
  const handleSignOut=()=>{
   


signOut(auth).then(() => {
  // Sign-out successful.
  navigate("/");

    
}).catch((error) => {
  // An error happened.
});
  }
  useEffect(()=>{

    
    const unsubscribe=onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const {uid,email,displayName} = user;
        dispatch (addUser({uid:uid, email:email, displayName:displayName}))
        navigate("/browse")
      
        // ...
      } else {
        // User is signed out
        // ...
        dispatch(removeUser());
        navigate("/")
       
      }
    });

    return ()=>unsubscribe();
}, [])

  return (
   <div className='flex justify-between w-screen absolute px-8 py-2 bg-gradient-to-b from-black z-10'>
    <img
    className='w-44'
    src={netflixLogo}
    alt='logo'></img>
   { user &&<div className='flex  text-white'>
      <img className="h-10 mr-2 mt-5 rounded" 
      alt="userIcon"
      src={userAvatar}
      ></img>
      <button onClick={handleSignOut}>Sign Out</button>

    </div>}
    </div>
  )
}

export default Header