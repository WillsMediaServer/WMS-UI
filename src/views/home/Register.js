import React from 'react';
import Navigation from '../../components/Navigation';
import { Helmet } from 'react-helmet';

const Register = () => (
  <React.Fragment>
    <Helmet>
      <title>Wills Media Server | Register</title>
    </Helmet>
    <Navigation key="nav"></Navigation>
    <div key="page">
      <h1>Register Page</h1>
    </div>
  </React.Fragment>
);

export default Register;
