import React from "react";

export default function CardData(props) {
  const calculateDiscount = (originalPrice, discount) =>
    Math.ceil(originalPrice - (originalPrice * discount) / 100) - 0.01;
  return (
    <div className="card__data">
      <div className="card__data__header">
        <p className="card__data__header__title">{props.title}</p>
        <p className="card__data__header__place-name">{props.placeName}</p>
        {props.placeLocation && <p className="card__data__header__place-location">{props.placeLocation}</p>}
      </div>
      <div className="card__data__financial">
        <p className="card__data__financial__bought">{props.bought} bought</p>
        <p className="card__data__financial__price">
          from
          <br />
          <div className="flex">
            <span className={props.discount && "line-through"}>${props.price}</span>
            {props.discount && (
              <span className="card__data__financial__price__discount">
                {calculateDiscount(props.price, props.discount)}$
              </span>
            )}
          </div>
        </p>
      </div>
    </div>
  );
}
