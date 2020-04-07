import React, { Component } from "react";
import ResultContext from "../ResultContext";
import "./Results.css";

class Results extends Component {
  handleClickDelete = (e) => {
    e.preventDefault();
    this.context.removeResult(this.props.id);
  };

  static contextType = ResultContext;

  render() {
    console.log(this.props.id);

    return (
      <div className="results">
        <h3
          style={{
            display: this.props.results.rollInfo.nameOfRoll.value
              ? "block"
              : "none",
          }}
        >
          {this.props.results.rollInfo.nameOfRoll.value}
        </h3>
        <div className="result">
          <span className="title">Mode: </span>
          <span className="calculation">{this.props.results.mode}</span>
        </div>
        <div className="result">
          <span className="title">Median: </span>
          <span className="calculation">{this.props.results.median}</span>
        </div>
        <div className="result">
          <span className="title">Average: </span>
          <span className="calculation">{this.props.results.average}</span>
        </div>
        <div className="result">
          <span className="title">Variance: </span>
          <span className="calculation">{this.props.results.variance}</span>
        </div>
        <div
          className="result"
          style={{ display: this.props.results.percentRoll ? "block" : "none" }}
        >
          <span className="title">Success Rate: </span>
          <span className="calculation">{this.props.results.percentRoll}</span>
        </div>
        <button onClick={this.handleClickDelete}>Delete Note</button>
      </div>
    );
  }
}

export default Results;
