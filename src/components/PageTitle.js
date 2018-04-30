import React, { Component } from 'react';
import { Helmet } from 'react-helmet';

class PageTitle extends Component {
  render() {
    return (
      <Helmet>
        <title>Wills Media Server | {this.props.title}</title>
      </Helmet>
    );
  }
}

export default PageTitle;
