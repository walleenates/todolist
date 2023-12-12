// LoginPage.jsx
import { signInWithEmailAndPassword } from 'firebase/auth';
import React, { useRef } from 'react';
import auth from '../firebase';
import './LoginPage.css';

const LoginPage = () => {
  const emailRef = useRef();
  const passwordRef = useRef();

  const Signin = () => {
    try {
      return signInWithEmailAndPassword(
        auth,
        emailRef.current.value,
        passwordRef.current.value
      ).catch((error) => console.log(error));
    } catch (error) {
      console.log(error);
    }
  };

  if (auth.currentUser) {
    console.log(auth.currentUser.email);
  }

  return (
    <>
      <div className='login-container'>
        <div className='login-form'>
          <h2>Login</h2>
          <input ref={emailRef} name='email' placeholder='Email' />
          <input ref={passwordRef} name='password' type='password' placeholder='Password' />
          <button onClick={Signin}>Login</button>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
    