import React from 'react';
import { Formik } from 'formik';
// import { Container } from '@material-ui/core';

function UserRegisterForm() {
  return (
    <div>
      <Formik
        initialValue={{ email: '', password: '' }}
        onSubmit={ data => {
          
        }}
      >
    </div>
  ); 
}

export default UserRegisterForm;
