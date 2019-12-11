import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';

// Redux
import { connect } from 'react-redux';
import { getUser } from './../../redux/actions/userhandle';

// Bootstrap
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function UserLoginForm({ getUser }) {
  return (
    <div>
      <Formik
        initialValues={{ email: '', password: '' }}
        onSubmit={ (data, { setSubmitting }) => {
          setSubmitting(true);
          getUser(data)
          setSubmitting(false);
        }}
        validationSchema={ LoginUserSchema }
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

            <Button variant="success" type="submit">Login</Button>
          </Form>
        }
      </Formik>
    </div>
  ); 
}

const LoginUserSchema = Yup.object().shape({
  email: Yup.string()
    .min(5, "Email must have at least 5 characters")
    .required("Email is required"),
  password: Yup.string()
    .min(6, "Password must have at least 6 characters")
    .required("Password is required"),
});

const mapDispatchToProps = (dispatch) => {
  return {
    getUser: (data) => dispatch(getUser(data))
  };
};

export default connect(null, mapDispatchToProps)(UserLoginForm);
