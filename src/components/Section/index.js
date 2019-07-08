import React from "react";
import "./style.css";

function Section (props) {
  return <div className="jumbotron">{props.children}</div>;
}

export default Section;
