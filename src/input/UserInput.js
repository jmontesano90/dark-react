import React, { Component } from "react";
import InputBox from "./InputBox";
import "./UserInput.css";

class UserInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      black: 0,
      blue: 0,
      orange: 0,
      modifier: 0,
      desiredRoll: 0,
      nameOfRoll: null
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
    console.log(event.target.name, event.target.value);
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log("I was clicked");
  }
  render() {
    return (
      <div className="input">
        <InputBox
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
      </div>
    );
  }
}

export default UserInput;
