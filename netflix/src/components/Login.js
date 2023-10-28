import React, { useState } from 'react'
import Header from './Header'

const Login = () => {
   const [isSignin, setIsSignIn] =useState(true);
    const toggleSignInForm=()=>{
        setIsSignIn(!isSignin);

    }


  return (

    <div>
       <Header/>
       
       <div className='absolute'
       > <img src='https://assets.nflxext.com/ffe/siteui/vlv3/dace47b4-a5cb-4368-80fe-c26f3e77d540/f5b52435-458f-498f-9d1d-ccd4f1af9913/IN-en-20231023-popsignuptwoweeks-perspective_alpha_website_large.jpg'
    alt='background'
    ></img>
        
        </div>

        <div>
        <form className='w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white bg-opacity-80'>
            <h1 className=' font-bold text-3xl py-4'>{isSignin?"Sign In":"Sign Up"}</h1>

            {isSignin?"":<input type= "text" placeholder='Full Name' className='p-4 my-2 w-full bg-gray-800'/>}
            <input type= "text" placeholder='Email Address' className='p-4 my-2 w-full bg-gray-800'/>
            <input type= "password" placeholder='Password' className='p-4 my-2 w-full bg-gray-800 ' />
            <button className='p-4 my-4 bg-red-800 w-full rounded-lg'>{isSignin?"Sign In":"Sign Up"}</button>
            <p className='py-4 cursor-pointer' onClick={toggleSignInForm}>{isSignin?"New to Netflix? Sign up now!":"Already have an account? Sign in"}</p>
        </form> 
        

        </div>
        </div>
  )
}

export default Login