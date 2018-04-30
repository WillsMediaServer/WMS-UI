import React from 'react';
import Navigation from '../../components/Navigation';
import { Helmet } from 'react-helmet';

const Error404 = () => (
  <React.Fragment>
    <Helmet>
      <title>Wills Media Server | Error 404</title>
    </Helmet>
    <Navigation key="nav"></Navigation>
    <div key="page">
      <h1>Error 404 Page</h1>
    </div>
  </React.Fragment>
);

export default Error404;
