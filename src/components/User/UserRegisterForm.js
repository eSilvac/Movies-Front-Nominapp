import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';

// Redux
import { connect } from 'react-redux';
import { createUser } from './../../redux/actions/userhandle';

// Bootstrap
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function UserRegisterForm({ createUser }) {
  return (
    <div>
      <Formik
        initialValues={{ email: '', password: '', passwordConfirmation: '' }}
        onSubmit={ (data, { setSubmitting }) => {
          setSubmitting(true);
          createUser(data)
          setSubmitting(false);
        }}
        validationSchema={ CreateUserSchema }
      >
        {({ values, errors, touched, handleChange, handleBlur, handleSubmit }) => 
          <Form onSubmit={handleSubmit}>
            <Form.Group>
              <Form.Control
                type="text"
                name="email" 
                placeholder="Email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
                className={touched.email && errors.email ? "is-invalid" : null}
              />
              {touched.email && errors.email ? (
                <div className="invalid-feedback">{errors.email}</div>
              ): null}
            </Form.Group>
          
            <Form.Group>
              <Form.Control
                type="password"
                name="password" 
                placeholder="Password"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
                className={touched.password && errors.password ? "is-invalid" : null}
              />
              {touched.password && errors.password ? (
                <div className="invalid-feedback">{errors.password}</div>
              ): null}
            </Form.Group>

            <Form.Group>
              <Form.Control
                type="password"
                name="passwordConfirmation" 
                placeholder="Repeat Password"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.passwordConfirmation}
                className={touched.passwordConfirmation && errors.passwordConfirmation ? "is-invalid" : null}
              />
              {touched.passwordConfirmation && errors.passwordConfirmation ? (
                <div className="invalid-feedback">{errors.passwordConfirmation}</div>
              ): null}
            </Form.Group>

            <Button variant="success" type="submit">Create User</Button>
          </Form>
        }
      </Formik>
    </div>
  ); 
}

const CreateUserSchema = Yup.object().shape({
  email: Yup.string()
    .min(5, "Email must have at least 5 characters")
    .required("Email is required"),
  password: Yup.string()
    .min(6, "Password must have at least 6 characters")
    .required("Password is required"),
  passwordConfirmation: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
});

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    createUser: (data) => dispatch(createUser(data, ownProps))
  };
};

export default connect(null, mapDispatchToProps)(UserRegisterForm);
