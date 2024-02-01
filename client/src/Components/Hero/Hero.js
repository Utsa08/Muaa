import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <>
      <div className="hero">
        <img
          src="https://static.wixstatic.com/media/ea71bb_f6afb11f2c8f406ca1c8993c2eca99e7~mv2_d_11495_6131_s_4_2.jpg/v1/fill/w_1519,h_671,al_t,q_85,usm_0.66_1.00_0.01,enc_auto/ea71bb_f6afb11f2c8f406ca1c8993c2eca99e7~mv2_d_11495_6131_s_4_2.jpg"
          alt=""
          className="hero_image"
        />
        <div className="hero_body">
          <a href="/shopall">
            <button className="muaa_button">SHOP ALL</button>
          </a>
        </div>
      </div>
    </>
  );
};

export default Hero;
