import React, { useState ,useRef } from 'react'
import Header from './Header'
import { Checkvalidation } from './validate';

function Login () {

  const [isSignIn ,setisSignIn] = useState(true);
  const [errormsg , seterrormsg]= useState("");
  const email = useRef(null);
  const password = useRef(null);

  const handleButtonClick =()=>{
   const msg = Checkvalidation(email.current.value,password.current.value);
   seterrormsg(msg);
  }

  const handleSignIn = ()=>{
  setisSignIn(!isSignIn);
  }
  return (
   
    <div>
    <Header/>
    <div className='absolute'>
        <img  src='https://assets.nflxext.com/ffe/siteui/vlv3/00103100-5b45-4d4f-af32-342649f1bda5/64774cd8-5c3a-4823-a0bb-1610d6971bd4/IN-en-20230821-popsignuptwoweeks-perspective_alpha_website_large.jpg' alt='bg-image'></img>
    </div>

   {isSignIn?<form onSubmit={(e)=>e.preventDefault()}

    className=' w-3/12  p-12 absolute my-36 bg-black mx-auto right-0 left-0 text-white rounded-lg bg-opacity-90'>
    <h2 className='text-3xl pb-4 font-semibold'>{isSignIn? "SignIn" :"SignUp"}</h2>
    <input className= " bg-gray-800 p-4 my-4 w-full" ref={email} type='text' placeholder='Email'></input>
    <input className=' bg-gray-800 p-4 my-4 w-full' type="password" ref={password} placeholder=' Password'></input>
    <p className='text-red-700 font-semibold'>{errormsg}</p>
    <button className='p-4 w-full my-4 bg-red-700 rounded-lg' onClick={handleButtonClick}> Sign In</button>
    <p className='py-8 font-semibold text-lg  hover:cursor-pointer' onClick={ handleSignIn }>New to Netflix? Sign up now.</p>
    
    </form>:
  
    <form onSubmit= {(e)=>e.preventDefault()}
    className=' w-3/12  p-12 absolute my-36 bg-black mx-auto right-0 left-0 text-white rounded-lg bg-opacity-85'>
    <h2 className='text-3xl pb-4 font-semibold'>{isSignIn? "SignIn" :"SignUp"}</h2>
    <input className='bg-gray-800 p-4 my-4 w-full' type='text' placeholder='Full Name'></input>
    <input className= " bg-gray-800 p-4 my-4 w-full " type='text' ref={email} placeholder='Email'></input>
    <input className=' bg-gray-800 p-4 my-4 w-full' type="password" ref={password} placeholder=' Password'></input>
    <p className='text-red-700 font-semibold'>{errormsg}</p>
    <button className='p-4 w-full my-4 bg-red-700 rounded-lg' onClick={handleButtonClick}> Sign Up</button>
    <p className='py-8 font-semibold text-lg  hover:cursor-pointer' onClick={ handleSignIn }>Already Registered ? SignIn now.</p>
    
    </form>
   }
    </div>
   
    
  )
  
}

export default Login