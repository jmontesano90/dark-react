import React, { Component } from "react";
import "./App.css";
import UserInput from "./input/UserInput";
import ResultContext from "./ResultContext";
import InputBox from "./input/InputBox";
import Results from "./results/Results";
import { calculateStats } from "./calculations";

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
        <main>
          <InputBox />
          <Results />
          <Results />
        </main>
      </ResultContext.Provider>
    );
  }
}

export default App;
