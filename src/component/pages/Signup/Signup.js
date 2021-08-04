import React, { useState } from 'react';
import './Signup.css';
import SignupForm from './SignupForm';
import SignupSuccess from './SignupSuccess';


const Signup = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }
  return (
    <>
      <div className='form-container'>
        <span className='close-btn'>×</span>
        {!isSubmitted ? (
          <SignupForm submitForm={submitForm} />
        ) : (
          <SignupSuccess/>
        )}
      </div>
    </>
  );
};

export default Signup;