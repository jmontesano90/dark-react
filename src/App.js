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
      results: [],
    };
  }

  handleAddResult = (result) => {
    let math = calculateStats(
      parseInt(result.black.value),
      parseInt(result.blue.value),
      parseInt(result.orange.value),
      parseInt(result.modifier.value),
      parseInt(result.desiredRoll.value)
    );
    math.rollInfo = result;
    console.log("From handleAddResult", math);
    this.state.results.push(math);
    this.setState({
      results: this.state.results,
    });
    console.log(this.state.results);
  };

  handleDeleteResult = (id) => {
    let temp = this.state.results;
    console.log("temp pre slice", temp, "id:", id);
    temp.slice(id, 1);
    console.log("temp post slice", temp);
    this.setState({
      results: temp,
    });
  };

  render() {
    const value = {
      results: this.state.results,
      addResult: this.handleAddResult,
      removeResult: this.handleDeleteResult,
    };
    return (
      <ResultContext.Provider value={value}>
        <main>
          <InputBox />
          {this.state.results.map((result, index) => (
            <Results results={result} key={index} id={index} />
          ))}
        </main>
      </ResultContext.Provider>
    );
  }
}

export default App;
