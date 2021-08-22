import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube, FaMobile, FaEnvelope } from "react-icons/fa";
import "../scss/components/footer.scss";
import "../scss/components/subscribe.scss";
export default function Footer() {
  return (
    <footer className="mt-3">
      <div className="container flex">
        <div className="flex--1--of--6 flex--2--of--4--md flex--1--sm follow-us">
          <h2>Follow us on</h2>
          <div className="flex mt-2">
            <div className="flex-1">
              <FaFacebook className="icon" />
            </div>
            <div className="flex-1">
              <FaTwitter className="icon" />
            </div>
            <div className="flex-1">
              <FaInstagram className="icon" />
            </div>
            <div className="flex-1">
              <FaYoutube className="icon" />
            </div>
          </div>
          <h2 className="mt-2">Get app exclusive deals</h2>
          <button className="btn mt-2">
            <FaMobile className="mobile-icon" />
            Download App
          </button>
        </div>
        <div className="flex--1--of--6 flex--2--of--4--md flex--1--sm">
          <h2>GrabOne</h2>
          <nav className="mt-2">
            <a href="#:)">GrabOne Guarantee</a>

            <a href="#:)">Contact Us</a>

            <a href="#:)">About Us</a>

            <a href="#:)">Terms &amp; Returns</a>

            <a href="#:)">Blog</a>

            <a href="#:)">Gift Cards</a>
          </nav>
        </div>
        <div className="flex--1--of--6 flex--2--of--4--md flex--1--sm">
          <h2>My Account</h2>
          <nav className="mt-2">
            <a href="#:)">My Account</a>

            <a href="#:)">My Cart</a>

            <a href="#:)">My Coupons</a>

            <a href="#:)">FAQ</a>
          </nav>
        </div>
        <div className="flex--1--of--6 flex--2--of--4--md flex--1--sm">
          <h2>Merchants</h2>
          <nav className="mt-2">
            <a href="#:)">Run a Deal</a>

            <a href="#:)">Merchant Centre</a>
          </nav>
        </div>
        <div className="flex--2--of--6 flex--md newsletter-signup">
          <h2>Newsletter Signup</h2>
          <p className="mt-2">Sign up for our daily emails and we'll send you all the best deals, tailored for you.</p>
          <form className="relative mt-2">
            <span>
              <FaEnvelope />
            </span>
            <input type="text" placeholder="Enter email address" />
            <button className="btn">Subscribe</button>
          </form>
        </div>
      </div>
    </footer>
  );
}
