import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div class="foot">
          <div>
            <div className="name">Muaa</div>
          </div>
          <div className="col">
            <div>Shop All</div>
            <div>Our Story</div>
            <div>Our Craft</div>
            <div>Gift Card</div>
            <div>Contact</div>
          </div>
          <div className="col">
            <div>FAQ</div>
            <div>Shipping & Returns</div>
            <div>Store Policy</div>
            <div>Payment Methods</div>
            <div>Stockists</div>
          </div>
          <div className="col">
            <div>Facebook</div>
            <div>Pinterest </div>
            <div>Instagram</div>
            <div>Twitter</div>
          </div>
          <div className="col">
            <div className="join">JOIN US!</div>
            <div>
              <input
                type="text"
                className="nav_search"
                placeholder="Email *"
              ></input>
            </div>
            <div>
              <button className="muaa-button"> Send </button>
            </div>
          </div>
        </div>
      </div>
      <div className="endblock">©2024 by muaa</div>
    </>
  );
};

export default Footer;
