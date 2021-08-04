import React from 'react';
import validate from './validateInfo';
import useForm from './useForm';
import './Contact.css';

const ContactForm = ({ submitForm }) => {
  const { handleChange, handleSubmit, values, errors } = useForm(
    submitForm,
    validate
  );

  return (
    <div className='form-content-right'>
      <form onSubmit={handleSubmit} className='form' noValidate>
        <div className='form-inputs'>
          <label className='form-label'>Your name</label>
          <input
            className='form-input'
            type='text'
            name='yourname'
            placeholder='Enter your name'
            value={values.yourname}
            onChange={handleChange}
          />
          {errors.yourname && <p>{errors.yourname}</p>}
        </div>
        <div className='form-inputs'>
          <label className='form-label'> Your Email</label>
          <input
            className='form-input'
            type='email'
            name='email'
            placeholder='Enter your email'
            value={values.email}
            onChange={handleChange}
          />
          {errors.email && <p>{errors.email}</p>}
        </div>
        <div className='form-inputs'>
          <label className='form-label'>Subject</label>
          <input
            className='form-input'
            type='text'
            name='subject'
            placeholder='What about...'
            value={values.subject}
            onChange={handleChange}
          />
          {errors.subject && <p>{errors.subject}</p>}
        </div>
        <div className='form-inputs'>
          <label className='form-label'>Message</label>
          <textarea
            className='form-input-message'
            type='text'
            name='message'
            placeholder='Write your text...'
            value={values.message}
            onChange={handleChange}
          />
          {errors.message && <p>{errors.message}</p>}
        </div>

        <button className='form-input-btn' type='submit'>
          Send
        </button>
      </form>
    </div>
  );
};

export default ContactForm;