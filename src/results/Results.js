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
    let plus;
    if (this.props.results.rollInfo.modifier.value < 0) {
      plus = "";
    } else {
      plus = "+";
    }

    return (
      <div className="results">
        <input
          type="image"
          src="https://imgur.com/FyZgoKZ.png"
          alt="initialzie button"
          className="deleteButton"
          width="35"
          height="35"
          onClick={this.handleClickDelete}
        />
        <h3
          style={{
            display: this.props.results.rollInfo.nameOfRoll.value
              ? "block"
              : "none",
          }}
        >
          {this.props.results.rollInfo.nameOfRoll.value}
        </h3>
        <div className="diceInputted">
          <span
            style={{
              display: this.props.results.rollInfo.black.touched
                ? "block"
                : "none",
            }}
          >
            {this.props.results.rollInfo.black.value}{" "}
            <span className="black">Black</span> dice
          </span>

          <span
            style={{
              display: this.props.results.rollInfo.blue.touched
                ? "block"
                : "none",
            }}
          >
            {this.props.results.rollInfo.blue.value}{" "}
            <span className="blue">Blue</span> dice
          </span>

          <span
            style={{
              display: this.props.results.rollInfo.orange.touched
                ? "block"
                : "none",
            }}
          >
            {this.props.results.rollInfo.orange.value}{" "}
            <span className="orange">Orange</span> dice
          </span>

          <span
            style={{
              display: this.props.results.rollInfo.modifier.touched
                ? "block"
                : "none",
            }}
          >
            {plus}
            {this.props.results.rollInfo.modifier.value} modifier
          </span>
        </div>
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
          <span className="calculation">
            {this.props.results.percentRoll}% to roll a{" "}
            {this.props.results.rollInfo.desiredRoll.value}
          </span>
        </div>
      </div>
    );
  }
}

export default Results;
