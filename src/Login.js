import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from 'firebase/auth';
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { login } from './features/userSlice';
import { auth } from './firebase';

import './Login.css'


function Login() {
  const dispatch = useDispatch();

  const [name, setname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('')

  const loginToApp = (e) => {
    if(!name){
      return alert("Please enter the full name!")
    }
    e.preventDefault();

    signInWithEmailAndPassword(auth, email, password)
    .then((userAuth)=>{
      dispatch(login({
        email : userAuth.user.email,
        uid : userAuth.user.uid,
        displayName : name
      }))
    }).catch(error => alert(error));
  
    setEmail("");
    setname("");
    setPassword("");
  }

  const register = () => {
    if(!name){
      return alert("Please enter the full name!")
    }

    createUserWithEmailAndPassword(auth, email, password).
    then((userAuth)=>{
       updateProfile(userAuth.user,{
        displayName : name
       }).then(()=>{
         dispatch(login({
            email : userAuth.user.email,
            uid : userAuth.user.uid,
            displayName : name
         }))
       })
    }).catch((error)=>{ alert(error)})
      

  }


  return (
    <div className='login-page'>
      <img className='login-img' src='https://www.veloceinternational.com/wp-content/uploads/2022/04/Linkedin-Logo.png' />
      <div className='form-section'>
        <form className='login-form'>
          <input placeholder='Full name...' type='text' value={name} onChange={e => setname(e.target.value)} />
          <input placeholder='Email' type='email' value={email} onChange={e => setEmail(e.target.value)} />
          <input placeholder='Password' type='password' value={password} onChange={e => setPassword(e.target.value)} />
          <button type='submit' onClick={loginToApp} className='login-button'>Sign In</button>
        </form>
        <div className='user'>
          <h4>Not a member?</h4>
          <h4 onClick={register} className='register'>Register now</h4>
        </div>

      </div>

    </div>
  )
}

export default Login
