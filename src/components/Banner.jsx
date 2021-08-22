import React from "react";
import Discover from "./Discover";
import Card from "./Card";
import "../scss/components/banner.scss";
export default function Banner() {
  return (
    <div className="banner container flex mt-2">
      <div className="flex--1">
        <Discover />
      </div>
      <div className="flex--3 flex__general--2 flex__general--sm flex">
        <Card
          title="HelloFresh Special Offer"
          placeName="HelloFresh"
          description={`HelloFresh LIMITED GrabOne Special Offer - Up to $82 OFF Your First Box or $161 OFF Your First Two Boxes - Your Choice of Meat & Veggie, Veggie or Family-Friendly Recipes Available - LIMITED SUBSCR...`}
          price={94.99}
          discount={50}
          placeLocation=""
          bought={902}
          imgSrc="https://main-cdn.grabone.co.nz/goimage/495x343/a42dd5e4d8d4ec1e6f2301cb8b8cd0fd45a6a6ff.jpg"
        />
        <Card
          title="HelloFresh Special Offer"
          placeName="HelloFresh"
          description={`HelloFresh LIMITED GrabOne Special Offer - Up to $82 OFF Your First Box or $161 OFF Your First Two Boxes - Your Choice of Meat & Veggie, Veggie or Family-Friendly Recipes Available - LIMITED SUBSCR...`}
          price={94.99}
          discount={50}
          placeLocation="Matakana"
          bought={902}
          imgSrc="https://main-cdn.grabone.co.nz/goimage/495x343/a42dd5e4d8d4ec1e6f2301cb8b8cd0fd45a6a6ff.jpg"
        />
      </div>
    </div>
  );
}
