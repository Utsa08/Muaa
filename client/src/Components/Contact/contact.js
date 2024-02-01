import React from "react";
import "./contact.css";

const Contact = () => {
  return (
    <>
      <div>
        <div className="bigLine">GET IN TOUCH</div>
        <form className="form">
          <div className="services">Customer Services</div>
          <div className="dash">____</div>
          <div className="inn">Inquiries</div>
          <div className="row1">
            <input
              type="text"
              className="search1"
              placeholder="First Name *"
            ></input>
            <input
              type="text"
              className="search1"
              placeholder="Last Name *"
            ></input>
          </div>
          <div>
            <input type="text" className="search" placeholder="Email *"></input>
          </div>
          <div>
            <input type="text" className="search" placeholder="Subject"></input>
          </div>
          <div>
            <input type="text" className="search" placeholder="Message"></input>
          </div>
          <div>
            <button className="muaabutton"> Submit </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Contact;
