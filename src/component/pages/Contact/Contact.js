import React, { useState } from 'react';
import './Contact.css';
import ContactForm from './ContactForm';
import ContactSuccess from './ContactSuccess';


const Contact = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }
  return (
    <>
      <div className='form-container'>
        <span className='close-btn'>×</span>
        {!isSubmitted ? (
          <ContactForm submitForm={submitForm}/>
        ) : (
          <ContactSuccess/>
        )}
      </div>
    </>
  );
};

export default Contact;