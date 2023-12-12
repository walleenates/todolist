// SignupPage.jsx
import React, { useRef } from 'react';
import auth from '../firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import './SignupPage.css'; // Import the CSS file

const SignupPage = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();

  const Signup = () => {
    try {
      if (passwordRef.current.value.length > 8) {
        if (passwordRef.current.value === passwordConfirmRef.current.value) {
          return console.log(createUserWithEmailAndPassword(auth, emailRef.current.value, passwordRef.current.value));
        } else {
          console.log('Password does not match');
        }
      } else {
        console.log('Password should be longer than 8 characters');
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className='signup-container'>
      <div className='signup-form'>
      <h2>Signup</h2>
        <input ref={emailRef} type='email' name='email' placeholder='Email' />
        <input ref={passwordRef} type='password' name='password' placeholder='Password' />
        <input ref={passwordConfirmRef} type='password' name='password-confirm' placeholder='Password Confirm' />
        <button onClick={Signup}>Sign up</button>
      </div>
    </div>
  );
};

export default SignupPage;
