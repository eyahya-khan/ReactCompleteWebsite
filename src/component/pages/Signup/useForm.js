import { useState, useEffect } from 'react';
import Axios from 'axios'

const useForm = (callback, validate) => {
  const [values, setValues] = useState({
    username: '',
    email: '',
    password: '',
    confirmpassword: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = e => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value
    }); 
  };

  const handleSubmit = e => {
    e.preventDefault();
    
    setErrors(validate(values));
    setIsSubmitting(true);
    
    //inserting data into database
          Axios.post('http://localhost:3001/api/insert',
        {username:values.username, email:values.email, password:values.password, confirmpassword:values.confirmpassword})

  };

  useEffect(
    () => {
      if (Object.keys(errors).length === 0 && isSubmitting) {
        callback();
      }
    },
    [callback,errors,isSubmitting]
  );

  return { handleChange, handleSubmit, values, errors };
};

export default useForm;