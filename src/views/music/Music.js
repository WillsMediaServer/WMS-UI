import React from 'react';
import PageTitle from '../../components/PageTitle';
import Navigation from '../../components/Navigation';
import Title from '../../components/Title';

var request = require('request');
var root_URL = location.protocol + '//' + location.host + '/api/v1/songs';

request.get(root_URL, function (error, response, body) {
  console.log('error:', error);
  console.log('statusCode:', response && response.statusCode);
  console.log('body:', body);
});

const Music = () => (
  <React.Fragment>
    <PageTitle title="Music" />
    <Navigation />
    <header className="section header">
      <Title content="Music"/>
    </header>
  </React.Fragment>
);

export default Music;
