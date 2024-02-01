import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <>
      <div className="nav">
        <div className="upper_nav">
          <div className="search_container">
            <input
              type="text"
              className="nav_search"
              placeholder="Search..."
              id="search"
            ></input>
          </div>
          <div className="">
            <a href="/">
              <div className="logo">Muaa</div>
            </a>
          </div>
          <div className="side">
            <div className="login_button">Log In</div>
            <div className="cart_button">Cart</div>
          </div>
        </div>
        <div className="lower_nav">
          <div className="lower_nav_elements">
            <a href="/shopall">
              <div className="nav_button">Shop All</div>
            </a>
            <a href="/ourcraft">
              <div className="nav_button">Our Craft</div>
            </a>
            <a href="/contact">
              <div className="nav_button">Contact Us</div>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
