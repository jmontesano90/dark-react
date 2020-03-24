import React, { Component } from "react";
//import './App.css';
import UserInput from "./input/UserInput";
import ResultContext from "./ResultContext";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      results: []
    };
  }

  handleAddResult = result => {
    this.state.results.push(result);
    this.setState({
      results: this.state.results
    });
    console.log("Current results: ", this.state.results);
  };

  render() {
    const value = {
      results: this.state.results,
      addResult: this.handleAddResult
    };
    return (
      <ResultContext.Provider value={value}>
        <UserInput />
      </ResultContext.Provider>
    );
  }
}

export default App;
