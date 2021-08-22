import React from "react";
import "../scss/components/collection.scss";
import Card from "./Card";
export default function Collection(props) {
  return (
    <div className="mt-2 collection container">
      <h2 className="collection__title">
        <a href="#:)">{props.collectionName}</a>
      </h2>
      <div className="flex flex__general--4 flex__general--2--md flex__general--sm  mt-2">
        {props.data.map((item) => (
          <Card
            title={item.title}
            placeName={item.placeName}
            description={item.description}
            price={item.price}
            discount={item.discount}
            placeLocation={item.placeLocation}
            bought={item.bought}
            imgSrc={item.imgSrc}
            isCategory={item.isCategory}
          />
        ))}
      </div>
    </div>
  );
}
