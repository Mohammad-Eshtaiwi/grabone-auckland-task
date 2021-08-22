import React from "react";
import "../scss/components/discover.scss";
export default function Discover() {
  return (
    <article className="discovery">
      <h2 className="discovery__title">Discover</h2>
      <ul className="discovery__menu grid">
        <li id="discover-featured-auckland-deals">
          <a className="discovery-menu-item" href="#:)">
            <span className="discover-name">Featured Auckland deals</span>
            <span className="deals-amount" id="discover-featured-auckland-deals-amount">
              149
            </span>
          </a>
        </li>

        <li id="discover-collections">
          <a className="discovery-menu-item" href="#:)">
            <span className="discover-name">Collections</span>
            <span className="deals-amount" id="discover-collections-amount">
              48
            </span>
          </a>
        </li>

        <li id="discover-escapes">
          <a className="discovery-menu-item" href="#:)">
            <span className="discover-name">Escapes</span>
            <span className="deals-amount" id="discover-escapes-amount">
              82
            </span>
          </a>
        </li>

        <li id="discover-picked-for-you">
          <a className="discovery-menu-item" href="#:)">
            <span className="discover-name">Picked for You</span>
            <span className="deals-amount" id="discover-picked-for-you-amount"></span>
          </a>
        </li>

        <li id="discover-activities-events-outdoors">
          <a className="discovery-menu-item" href="#:)">
            <span className="discover-name">Activities, Events &amp; Outdoors</span>
            <span className="deals-amount" id="discover-activities-events-outdoors-amount">
              100
            </span>
          </a>
        </li>

        <li id="discover-store">
          <a className="discovery-menu-item" href="#:)">
            <span className="discover-name">Store</span>
            <span className="deals-amount" id="discover-store-amount">
              1315
            </span>
          </a>
        </li>

        <li id="discover-restaurants-bars-cafes">
          <a className="discovery-menu-item" href="#:)">
            <span className="discover-name">Restaurants, Bars, Cafes</span>
            <span className="deals-amount" id="discover-restaurants-bars-cafes-amount">
              51
            </span>
          </a>
        </li>

        <li id="discover-beauty-massage-spa">
          <a className="discovery-menu-item" href="#:)">
            <span className="discover-name">Beauty, Massage &amp; Spa</span>
            <span className="deals-amount" id="discover-beauty-massage-spa-amount">
              229
            </span>
          </a>
        </li>

        <li id="discover-house-garden">
          <a className="discovery-menu-item" href="#:)">
            <span className="discover-name">House &amp; Garden</span>
            <span className="deals-amount" id="discover-house-garden-amount">
              740
            </span>
          </a>
        </li>

        <li id="discover-fitness-sports">
          <a className="discovery-menu-item" href="#:)">
            <span className="discover-name">Fitness &amp; Sports</span>
            <span className="deals-amount" id="discover-fitness-sports-amount">
              68
            </span>
          </a>
        </li>

        <li id="discover-automotive">
          <a className="discovery-menu-item" href="#:)">
            <span className="discover-name">Automotive</span>
            <span className="deals-amount" id="discover-automotive-amount">
              57
            </span>
          </a>
        </li>
      </ul>
    </article>
  );
}
