import React from "react";
import "./style.css";

function AvengerCard(props) {
  return (
    <div className="card" onClick={props.handleClick}>
      <div className="img-container">
        <img alt={props.id} src={props.image} />
      </div>
    </div>
  );
}

export default AvengerCard;
