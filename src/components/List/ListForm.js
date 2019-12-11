import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { useHistory } from "react-router-dom";

// Redux
import { connect } from 'react-redux';
import { createList } from './../../redux/actions/listhandle';

// Bootstrap
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function ListForm({ createList }) {
  let history = useHistory();
  
  function redirectToHome() {
    history.push("/");
  }

  return (
    <div>
      <Formik
        initialValues={{ name: '' }}
        onSubmit={ (data, { setSubmitting }) => {
          setSubmitting(true);
          createList(data, redirectToHome)
          setSubmitting(false);
        }}
        validationSchema={ ListValidate }
      >
        {({ values, errors, touched, handleChange, handleBlur, handleSubmit }) => 
          <Form onSubmit={handleSubmit}>
            <Form.Group>
              <Form.Control
                type="text"
                name="name" 
                placeholder="Name of the list"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.name}
                className={touched.name && errors.name ? "is-invalid" : null}
              />
              {touched.name && errors.name ? (
                <div className="invalid-feedback">{errors.name}</div>
              ): null}
            </Form.Group>
          
            <Button variant="success" type="submit" block>Create List</Button>
          </Form>
        }
      </Formik>
    </div>
  ); 
}

const ListValidate = Yup.object().shape({
  name: Yup.string()
    .required("Name is required"),
});

const mapDispatchToProps = (dispatch) => {
  return {
    createList: (data, callback) => dispatch(createList(data, callback))
  };
};

export default connect(null, mapDispatchToProps)(ListForm);
