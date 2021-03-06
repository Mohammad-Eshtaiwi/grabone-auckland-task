import React from "react";
import HeaderImage from "./HeaderImage";
import { FaLocationArrow, FaHeart, FaShoppingCart, FaUser, FaEnvelope, FaSearch } from "react-icons/fa";
import "../scss/components/main-nav.scss";
import "../scss/components/sub-nav.scss";
import MobileNav from "./MobileNav";

export default function Header() {
  return (
    <>
      <header className="header">
        <nav className="main-nav">
          <svg id="svg__global--go-logo-white" className="main-nav__logo" viewBox="0 0 315.3 60">
            <path
              class="st0"
              d="M55.8 52.1V21.7c0-2.3 1.2-3.5 3.5-3.5h4c2.3 0 3.5 1.2 3.5 3.5v4.7c1.2-6.8 6.5-9 9.7-9l1.2.1c1.7.1 2.1 1.5 2.1 3v5.1c0 2-1 2.9-2.5 2.7-.7-.1-1.2-.1-1.8-.1-4.4 0-8.4 2.8-8.4 12.2v11.8c0 2.3-1.2 3.5-3.5 3.5h-7.8v-3.6zM3.1 30.2c0-14.4 11.5-26.4 27.4-26.4 6 0 11 1.3 15.4 3.9 2 1.2 2.2 3.1.9 4.9L45 15c-1.3 1.8-2.8 2-4.9 1-3.9-2-6.7-2.1-9.6-2.1-9.1 0-15.9 7.2-15.9 16.2 0 8.6 5.9 16.2 16.4 16.2 3 0 6.3-.7 8.9-2v-7.9H31c-1.9 0-3.5-1.6-3.5-3.5v-5.1h19.7c2 0 3.6 1.6 3.6 3.6V46c0 1.8-.6 3.2-2.3 4.4-5.5 4.1-11.6 5.9-17.7 5.9-16.4.1-27.7-11.8-27.7-26.1m78.2 6.7c0-11 7.5-19.5 18-19.5 5 0 9.3 1.9 12 6.1v-1.8c0-2.3 1.2-3.5 3.5-3.5h4.3c2.3 0 3.5 1.2 3.5 3.5v33.9h-7.8c-2.3 0-3.5-1.2-3.5-3.5v-1.7c-2.7 4.1-7.1 6-12 6-10.5 0-18-8.4-18-19.5m30.2 0c0-6-3.8-10.5-9.5-10.5-5.9 0-9.3 4.7-9.3 10.5s3.4 10.5 9.3 10.5c5.7 0 9.5-4.5 9.5-10.5m28 13.5v1.7c0 2.3-1.3 3.5-3.6 3.5h-7.7V6.5c0-2.3 1.2-3.5 3.5-3.5h4.2c2.3 0 3.6 1.2 3.6 3.5v17c2.7-4.2 7.1-6.1 11.9-6.1 10.6 0 18.1 8.5 18.1 19.5 0 11.1-7.5 19.5-18.1 19.5-4.9 0-9.2-1.9-11.9-6m18.7-13.5c0-5.8-3.5-10.5-9.3-10.5s-9.5 4.5-9.6 10.5c.1 6 3.8 10.5 9.6 10.5s9.3-4.7 9.3-10.5m15.3-6.7c0-14.3 11.1-26.3 27-26.3s27 11.9 27 26.3c0 14.3-11.1 26.3-27 26.3-16-.1-27-12-27-26.3m42.4 0c0-9-6.4-16.2-15.4-16.2s-15.4 7.2-15.4 16.2 6.3 16.2 15.4 16.2c9 0 15.4-7.2 15.4-16.2m15.4 21.9V21.7c0-2.3 1.2-3.5 3.5-3.5h4.3c2.3 0 3.5 1.2 3.5 3.5v2.5c1.8-4.3 5.8-6.8 11.4-6.8 10 0 13.7 7.9 13.7 16.7v18.1c0 2.3-1.3 3.5-3.6 3.5h-7.7V34.9c0-5.2-2-8.3-5.9-8.3s-7.9 3-7.9 10v15.6c0 2.3-1.2 3.5-3.5 3.5h-7.8v-3.6zm40.1-15c0-10.6 7.9-19.7 20.5-19.7 10.6 0 19.4 6.4 19.9 18.3.1 2.1-1.4 3.1-3.6 3.1h-26.1c-.1 4.4 4.3 8.7 11.5 8.7 2.7 0 5.5-.7 8.3-2.3 2-1.1 3.6-.9 5 .7l.8 1c1.5 1.7 1.3 3.7-.7 5.2-4.3 3.1-9.3 4.2-14.1 4.2-13.4.1-21.5-8.5-21.5-19.2m29.8-4.5c-1-5-5.3-6.6-9.2-6.6-3.9 0-8.4 1.7-9.6 6.6h18.8z"
            ></path>
          </svg>
          <div className="main-nav__items">
            <div className="location">
              <FaLocationArrow />
              <span>Auckland</span>
            </div>
            <div>
              <FaHeart />
            </div>
            <div>
              <FaShoppingCart />
            </div>
            <div>
              <FaUser />
            </div>
            <div>
              <FaEnvelope />
              <span>Subscribe</span>
            </div>
            <div className="powered-by-nzme">
              <img
                src="//new-cdn.grabone.co.nz/static/img/icon/powered_by_nzme_short.22da364cd455.png"
                alt="powered_by_nzme"
              />
            </div>
          </div>
        </nav>
      </header>
      <nav className="sub-nav sticky-0">
        <div className="sub-nav__items">
          <a href="#:)" className="sub-nav__items__item">
            Browse Categories
          </a>
          <a href="#:)" className="sub-nav__items__item">
            What's New
          </a>
          <a href="#:)" className="sub-nav__items__item">
            Trending
          </a>
          <a href="#:)" className="sub-nav__items__item">
            For You
          </a>
          <a href="#:)" className="sub-nav__items__item">
            Shop Products
          </a>
        </div>
        <form className="search relative" onSubmit={(e) => e.preventDefault()}>
          <button>
            <FaSearch />
          </button>
          <input type="text" placeholder="Search GrabOne" />
        </form>
      </nav>
      <div className="container">
        <HeaderImage />
      </div>
      <MobileNav />
    </>
  );
}
