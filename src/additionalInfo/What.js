import React, { Component } from "react";
import "./additional.css";

class Nav extends Component {
  render() {
    return (
      <div>
        <h2>How does this work?</h2>
        <p>
          Dark Rolls simulates 5000 rolls based on the amount of die you
          entered, and your preferred minimum roll. Then based on those rolls,
          will give you the accompanying statistics. This does lead to a natural
          variation in every time you click the button, so theres no need to
          panic when you witness this. Could I just have used math to calculate
          the stats? Yeah but thats boring.
        </p>
      </div>
    );
  }
}

export default Nav;
