import React from "react";
import { FaHome, FaSearch, FaFeather, FaShoppingCart, FaUser } from "react-icons/fa";
import "../scss/components/mobile-nav.scss";
export default function MobileNav() {
  return (
    <div className="mobile-nav">
      <div>
        <FaHome className="icon" />
        Home
      </div>
      <div>
        <FaSearch className="icon" />
        Search
      </div>
      <div>
        <FaFeather className="icon" />
        Categories
      </div>
      <div>
        <FaShoppingCart className="icon" />
        Cart
      </div>
      <div>
        <FaUser className="icon" />
        Account
      </div>
    </div>
  );
}
