import React, { Component } from "react";
import "./App.css";
import ResultContext from "./ResultContext";
import InputBox from "./input/InputBox";
import Results from "./results/Results";
import { calculateStats } from "./calculations";
import Nav from "./Nav";
import What from "./additionalInfo/What";
import How from "./additionalInfo/How";
import { Route } from "react-router-dom";

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
    this.state.results.unshift(math);
    this.setState({
      results: this.state.results,
    });
    //console.log(this.state.results);
  };

  handleDeleteResult = (id) => {
    let temp = this.state.results;
    temp.splice(id, 1);
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
          <Nav />
          <h1>Dark Rolls</h1>
          <Route exact path="/" component={InputBox} />
          <Route exact path="/what" component={What} />
          <Route exact path="/how" component={How} />
          {/* <InputBox /> */}
          {this.state.results.map((result, index) => (
            <Results results={result} key={index} id={index} />
          ))}
        </main>
      </ResultContext.Provider>
    );
  }
}

export default App;
