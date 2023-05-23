import React from "react";
import './Counter.css'

function Button(props) {
  let { action, title } = props;
  return <button  onClick={action}>{title}</button>;
}

export default Button;