import React, { Component } from "react";
//import './App.css';
import UserInput from "./input/UserInput";

class App extends Component {
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

  render() {
    return (
      <div>
        <UserInput handleChange={this.handleChange} />
      </div>
    );
  }
}

export default App;
