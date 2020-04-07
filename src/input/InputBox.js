import React, { Component } from "react";
import ResultContext from "../ResultContext";
import "./InputBox.css";

class InputBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      result: {
        black: {
          value: "0",
          touched: false,
        },
        blue: {
          value: "0",
          touched: false,
        },
        orange: {
          value: "0",
          touched: false,
        },
        modifier: {
          value: "0",
          touched: false,
        },
        desiredRoll: {
          value: "0",
          touched: false,
        },
        nameOfRoll: "",
      },
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    let result = { ...this.state.result };
    result[event.target.name.toString()] = {
      value: event.target.value,
      touched: true,
    };
    this.setState(
      {
        result,
      },
      () => {
        //console.log(this.state.result);
      }
    );
  }

  static contextType = ResultContext;

  handleSubmit(event) {
    event.preventDefault();
    this.context.addResult(this.state.result);
    console.log("State in input box", this.state.result);
    this.setState({
      result: {
        black: {
          value: "0",
          touched: false,
        },
        blue: {
          value: "0",
          touched: false,
        },
        orange: {
          value: "0",
          touched: false,
        },
        modifier: {
          value: "0",
          touched: false,
        },
        desiredRoll: {
          value: "0",
          touched: false,
        },
        nameOfRoll: "",
      },
    });
    document.getElementById("black").value = "";
    document.getElementById("blue").value = "";
    document.getElementById("orange").value = "";
    document.getElementById("modifier").value = "";
    document.getElementById("desiredRoll").value = "";
    document.getElementById("nameOfRoll").value = "";
  }
  rend;

  render() {
    return (
      <div className="inputForm">
        <form className="newResult" onSubmit={(e) => this.handleSubmit(e)}>
          <h2>Dice being rolled</h2>
          <div className="colors">
            <label htmlFor="black" className="black color">
              Black:
            </label>
            <input
              className="colorInput"
              type="text"
              name="black"
              id="black"
              placeholder="0"
              onChange={(e) => this.handleChange(e)}
            />

            <label htmlFor="blue" className="blue color">
              Blue:
            </label>
            <input
              className="colorInput"
              type="text"
              name="blue"
              id="blue"
              placeholder="0"
              onChange={(e) => this.handleChange(e)}
            />

            <label htmlFor="orange" className="orange color">
              Orange:
            </label>
            <input
              className="colorInput"
              type="text"
              name="orange"
              id="orange"
              placeholder="0"
              onChange={(e) => this.handleChange(e)}
            />
          </div>

          <div className="additionalInput">
            <label htmlFor="modifier" className="additional">
              Modifier:
            </label>
            <input
              className="otherInput"
              type="text"
              name="modifier"
              id="modifier"
              placeholder="0"
              onChange={(e) => this.handleChange(e)}
            />

            <label htmlFor="desiredRoll" className="additional">
              Desired Roll:
            </label>
            <input
              className="otherInput"
              type="text"
              name="desiredRoll"
              id="desiredRoll"
              placeholder="0"
              onChange={(e) => this.handleChange(e)}
            />
          </div>
          <div className="bottomInput">
            <label htmlFor="nameOfRoll">
              <input
                type="text"
                name="nameOfRoll"
                id="nameOfRoll"
                placeholder="Name of Roll"
                onChange={(e) => this.handleChange(e)}
              />
            </label>
            <button type="submit" className="rollButton">
              Roll!
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default InputBox;
