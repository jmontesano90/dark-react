import React, { Component } from "react";
import "./Results.css";

class Results extends Component {
  render() {
    return (
      <div className="results">
        <h3>Name of Roll</h3>
        <div className="result">
          <span>Mode:</span>
          <span>2</span>
        </div>
        <div className="result">
          <span>Median:</span>
          <span>2</span>
        </div>
        <div className="result">
          <span>Average:</span>
          <span>4</span>
        </div>
        <div className="result">
          <span>Variance</span>
          <span>.059</span>
        </div>
        <div className="result">
          <span>% Chance:</span>
          <span>76%</span>
        </div>
      </div>
    );
  }
}

export default Results;
