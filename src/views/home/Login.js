import React from 'react';
import Navigation from '../../components/Navigation';
import { Helmet } from 'react-helmet';

const Login = () => (
  <React.Fragment>
    <Helmet>
      <title>Wills Media Server | Login</title>
    </Helmet>
    <Navigation key="nav"></Navigation>
    <div key="page">
      <h1>Login Page</h1>
    </div>
  </React.Fragment>
);

export default Login;
