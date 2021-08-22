import React from "react";
import CardData from "./CardData";
import "../scss/components/card.scss";
import { FaHeartbeat } from "react-icons/fa";
import CardCollection from "./CardCollection";

export default function Card(props) {
  console.log(props.isCategory ? true : false);
  return (
    <article className="card" key={Math.random().toString(36).substr(2, 9)}>
      {!props.isCategory && (
        <div className="card__wishlist">
          <FaHeartbeat />
        </div>
      )}
      <figure>
        <img src={props.imgSrc} alt={props.title} />
        <figcaption>
          <div>{props.description || props.title}</div>
        </figcaption>
      </figure>
      {!props.isCategory ? (
        <CardData
          title={props.title}
          placeName={props.placeName}
          placeLocation={props.placeLocation}
          bought={props.bought}
          price={props.price}
          discount={props.discount}
        />
      ) : (
        <CardCollection title={props.title} />
      )}
    </article>
  );
}
