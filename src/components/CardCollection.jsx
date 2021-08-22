import React from "react";

export default function CardCollection(props) {
  return (
    <div className="card__collection">
      <h2>{props.title}</h2>
      <h3>Multiple deals</h3>
      <button className="btn">
        View Collection <span>{">"}</span>
      </button>
    </div>
  );
}
