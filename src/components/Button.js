import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Button extends Component {
  constructor(props) {
    super(props);
    this.style = "btn btn-" + props.type;
  }

  render() {
    return (
      <Link to={this.props.to} className={this.style}>{this.props.text}</Link>
    );
  }
}

export default Button;
