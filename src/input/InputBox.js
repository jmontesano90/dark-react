import React, { Component } from "react";
import ResultContext from "../ResultContext";
import "./InputBox.css";
import ValidationError from "./ValidationError";

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
      () => {}
    );
  }

  validateDice() {
    if (
      this.state.result.black.touched === false &&
      this.state.result.blue.touched === false &&
      this.state.result.orange.touched === false
    ) {
      return "At least one dice must be selected";
    } else {
      return "";
    }
  }

  validateNumberInputs() {
    let onlyNumbers = true;
    if (isNaN(this.state.result.black.value)) {
      onlyNumbers = false;
    }
    if (isNaN(this.state.result.blue.value)) {
      onlyNumbers = false;
    }
    if (isNaN(this.state.result.orange.value)) {
      onlyNumbers = false;
    }
    if (isNaN(this.state.result.modifier.value)) {
      onlyNumbers = false;
    }
    if (isNaN(this.state.result.desiredRoll.value)) {
      onlyNumbers = false;
    }
    if (onlyNumbers === false) {
      return "All inputs must be numbers";
    }
  }

  additionalDiceValidation() {
    let validation = false;
    if (this.state.result.modifier.touched === true) {
      validation = true;
    } else if (this.state.result.desiredRoll.touched === true) {
      validation = true;
    } else if (this.state.result.nameOfRoll.touched === true) {
      validation = true;
    }
    return validation;
  }

  static contextType = ResultContext;

  handleSubmit(event) {
    event.preventDefault();
    this.context.addResult(this.state.result);
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
              className="modifier"
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
            <ValidationError message={this.validateNumberInputs()} />
            {this.additionalDiceValidation() && (
              <ValidationError message={this.validateDice()} />
            )}
            <input
              type="image"
              src="https://imgur.com/fFV9HS6.png"
              alt="initialzie button"
              className="rollButton"
              width="224"
              height="29"
              disabled={this.validateNumberInputs() || this.validateDice()}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default InputBox;
