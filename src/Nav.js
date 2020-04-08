import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

class Nav extends Component {
  render() {
    return (
      <header>
        <ul>
          <li className="Home">
            <Link to="/">Home</Link>
          </li>
          <li className="what">
            <Link to="/what">What is this?</Link>
          </li>
          <li className="how">
            <Link to="/how">How does this work?</Link>
          </li>
        </ul>
      </header>
    );
  }
}

export default Nav;
