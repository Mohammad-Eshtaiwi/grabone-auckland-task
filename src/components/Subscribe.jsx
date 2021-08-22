import React from "react";
import "../scss/components/subscribe.scss";
import { FaEnvelope } from "react-icons/fa";
export default function Subscribe() {
  return (
    <div className="container mt-2">
      <article className="subscribe">
        <p>Get the best deals delivered direct to your inbox each day</p>
        <form className="relative">
          <span>
            <FaEnvelope />
          </span>
          <input type="text" placeholder="Enter email address" />
          <button className="btn">Subscribe</button>
        </form>
      </article>
    </div>
  );
}
