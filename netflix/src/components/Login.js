import React, { useRef, useState } from 'react'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { updateProfile } from "firebase/auth";
import Header from './Header'
import { checkValidData } from '../utils/validate';
import { auth } from '../utils/firebase';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';
import { logo, netflixBG } from '../utils/constants';


const Login = () => {

   const [isSignin, setIsSignIn] =useState(true);
   const [validationError, setValidationError]=useState(null);
    const email= useRef(null);
    const password=useRef(null);
    const name=useRef(null);
    const dispatch =useDispatch();


    const toggleSignInForm=()=>{
        setIsSignIn(!isSignin);

    }
const handleButtonClick=()=>{
  const message =(checkValidData(email.current.value, password.current.value));
  setValidationError(message);
  if(!message){
    if(isSignin){
        signInWithEmailAndPassword(auth,email.current.value, password.current.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setValidationError(errorMessage)
  });

    }
    if(!isSignin){
        createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    

updateProfile(user, {
  displayName: name.current.value,
}).then(() => {
  // Profile updated!
  // ...

  const {uid,email,displayName} = user;
  dispatch (addUser({uid:uid, email:email, displayName:displayName}))
 
}).catch((error) => {
  setValidationError(error.message)
});
   
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setValidationError(errorCode, errorMessage)
    // .. 
  });

    }


  }
  
}


  return (

    <div>
       <Header/>
       
       <div className='absolute'
       > <img src={netflixBG}
    alt='background'
    ></img>
        
        </div>

        <div>
        <form onSubmit={(e)=>e.preventDefault()} className='w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white bg-opacity-80'>
            <h1 className=' font-bold text-3xl py-4'>{isSignin?"Sign In":"Sign Up"}</h1>

            {isSignin?"":<input ref={name} type= "text" placeholder='Full Name' className='p-4 my-2 w-full bg-gray-800'/>}
            <input ref={email} type= "text" placeholder='Email Address' className='p-4 my-2 w-full bg-gray-800'/>
            <input ref={password} type= "password" placeholder='Password' className='p-4 my-2 w-full bg-gray-800 ' />
            {validationError? <p className='text-red-500'>{validationError}</p>:"" }
            <button className='p-4 my-4 bg-red-800 w-full rounded-lg' onClick={handleButtonClick}>{isSignin?"Sign In":"Sign Up"}</button>
            <p className='py-4 cursor-pointer' onClick={toggleSignInForm}>{isSignin?"New to Netflix? Sign up now!":"Already have an account? Sign in"}</p>
        </form> 
        

        </div>
        </div>  
  )
}

export default Login