import React from "react";
import "./style.css";

function Navbar(props) {
  return (
    <nav className="navbar navbar-default navbar-fixed-top">
      <ul>
        <li className="title">Avengers Memory Game</li>
        <li className="score">Score: {props.score}</li>
      </ul>
    </nav>
  );
}

export default Navbar;
