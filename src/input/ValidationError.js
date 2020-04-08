import React from "react";
import "./InputBox.css";

export default function ValidationError(props) {
  if (props.message) {
    return <div className="error">{props.message}</div>;
  }

  return <></>;
}
