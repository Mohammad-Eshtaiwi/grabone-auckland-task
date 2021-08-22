import Header from "./components/Header";
import Banner from "./components/Banner";
import Subscribe from "./components/Subscribe";
import Collection from "./components/Collection";
import { useState } from "react";
import Footer from "./components/Footer";

function App() {
  const [escapes] = useState([
    {
      title: "HelloFresh Special Offer",
      placeName: "HelloFresh",
      description: `HelloFresh LIMITED GrabOne Special Offer - Up to $82 OFF Your First Box or $161 OFF Your First Two Boxes - Your Choice of Meat & Veggie`,
      price: 94.99,
      discount: 50,
      placeLocation: "Matakana",
      bought: 902,
      imgSrc: "https://main-cdn.grabone.co.nz/goimage/495x343/a42dd5e4d8d4ec1e6f2301cb8b8cd0fd45a6a6ff.jpg",
    },
    {
      title: "Copthorne Hotel Bay of Isl...",
      placeName: `Copthorne Hotel & Resort Bay`,
      description: `Two-Night Midweek Stay for Two People in a Luxury Chalet incl. Daily Breakfast, Complimentary Drink, Free Wifi & Complimentary Parking - Option for Three-Night Stay`,
      price: 551,
      discount: 50,
      placeLocation: "Northland",
      bought: 672,
      imgSrc: "https://main-cdn.grabone.co.nz/goimage/325x225/9f09ddaa3680b5829835689328bf1969a0aa450e.jpg",
    },
    {
      title: "Midweek Luxury Chalet Stay",
      placeName: `Grand Mercure Puka Park`,
      description: `Two-Night Midweek Stay for Two People in a Luxury Chalet incl. Daily Breakfast, Complimentary Drink, Free Wifi & Complimentary Parking - Option for Three-Night Stay`,
      price: 652,
      discount: 50,
      placeLocation: "Waikato",
      bought: 24,
      imgSrc: "https://main-cdn.grabone.co.nz/goimage/325x225/1719b96c9ee175f185dc95a848bc4085fc4b0cba.jpg",
    },
    {
      title: "Round of Mini Golf",
      placeName: `Safari & T Rex Alley`,
      description: `Round of Mini Golf for One Person - Options for up to Six People`,
      price: 9,
      placeLocation: "Orakei",
      bought: 227,
      imgSrc: "https://main-cdn.grabone.co.nz/goimage/325x225/a0dd2c5f77d5683d3ce58c237f2b97022dfe7d0c.jpg",
    },
  ]);
  const [collection] = useState([
    { title: "We've Got You Covered", imgSrc: "https://mediacdn.grabone.co.nz/asset/8NQfr4MKkS", isCategory: true },
    { title: "Tasty Tipples", imgSrc: "	https://mediacdn.grabone.co.nz/asset/dQMImYWJmS", isCategory: true },
    { title: "Work from Home", imgSrc: "https://mediacdn.grabone.co.nz/asset/HzalVebk22", isCategory: true },
    { title: "Free Shipping", imgSrc: "	https://mediacdn.grabone.co.nz/asset/0sgXNkite4", isCategory: true },
  ]);
  return (
    <>
      <Header />

      <main>
        <Banner />
        <Subscribe />
        <Collection collectionName="Collections" data={collection} />
        <Collection collectionName="Escapes" data={escapes} />
      </main>

      <Footer />
    </>
  );
}

export default App;
