import React from 'react';
import './Signup.css';


const SignupSuccess = (values) => {

  return (
    <div className='form-content-right'>
      <h1 className='form-success'>We have received your request!</h1>
      <h1 className='form-success1'>Your email is:</h1>
    
        <p className='form-success1'>{values.email}</p>
            
    </div>
  );
};

export default SignupSuccess;