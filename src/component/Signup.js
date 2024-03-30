import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const Signup= () => {
  return (
    <div>
      <h2>Signup</h2>
      <Formik
        initialValues={{ name: '', email: '', password: '' }}
        validationSchema={Yup.object({
          name: Yup.string().required('Required'),
          email: Yup.string().email('Invalid email address').required('Required'),
          password: Yup.string().required('Required').min(6, 'Password must be at least 6 characters'),
        })}
        onSubmit={(values) => {
          // Handle form submission here
        }}
      >
        <Form>
          <div>
            <label htmlFor="name">Name</label>
            <Field type="text" id="name" name="name" />
            <ErrorMessage name="name" component="div" />
          </div>

          {/* Similar fields for email and password */}

          <div>
            <button type="submit">Signup</button>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default Signup;
