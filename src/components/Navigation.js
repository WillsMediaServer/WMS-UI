import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Navigation extends Component {
  render() {
    return (
      <nav className="navigation">
        <NavLink exact to="/" className="nav-item">Home</NavLink>
        <NavLink exact to="/music" className="nav-item">Music</NavLink>
        <NavLink to="/films" className="nav-item">Films</NavLink>
        <NavLink to="/tv" className="nav-item">TV Shows</NavLink>
      </nav>
    );
  }
}

export default Navigation;
