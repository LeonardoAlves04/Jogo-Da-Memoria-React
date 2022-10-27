import React from "react";

function CardElement() {
  return (
    <div id={props.card.id} className="card">
      <div className="card-front">
        <img
          className="icon"
          src={`assets/images/${props.card.icon}.png`}
          alt={props.card.icon}
        ></img>
      </div>

      <div className="card-back"></div>
      {"</>"}
    </div>
  );
}
