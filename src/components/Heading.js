import React, { Component } from 'react';

class Heading extends Component {
  render() {
    return (
      <h1 className="heading">{this.props.text}</h1>
    );
  }
}

export default Heading;
