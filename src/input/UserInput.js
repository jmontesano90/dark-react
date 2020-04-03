import React, { Component } from "react";
import InputBox from "./InputBox";
import "./UserInput.css";
import "../ResultContext";

class UserInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      result: {
        black: 0,
        blue: 0,
        orange: 0,
        modifier: 0,
        desiredRoll: 0,
        nameOfRoll: null
      }
    };
    this.handleChange = this.handleChange.bind(this);
  }

  // static contextType = ResultContext;

  handleChange(event) {
    this.setState({
      result: {
        [event.target.name.toString()]: Number(event.target.value)
      }
    });
    console.log(this.state.result);
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log("I was clicked", this.state.result);
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
