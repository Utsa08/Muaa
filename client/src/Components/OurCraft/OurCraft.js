import React from "react";
import "./OurCraft.css";

const ourCraft = () => {
  return (
    <>
      <div>
        <div className="process">THE PROCESS</div>
        <div className="mainbox">
          <div className="border block_body">
            <div className="block_element left_element">
              <div className="box1">
                <div className="design">DESIGN </div>
                <div>_____</div>
              </div>
            </div>
            <div className="block_element right_element">
              <img
                src="https://i.pinimg.com/564x/9f/56/74/9f5674506b24dab98f6eb0ad8e28f186.jpg"
                alt=""
                className="image"
              />
            </div>
          </div>
          <div className="border block_body_bottom">
            <div className="block_element left_element">
              <div className="box1">
                <div className="design">SELECTION </div>
                <div>_____</div>
              </div>
            </div>
            <div className="block_element right_element">
              <img
                src="https://i.pinimg.com/564x/cb/00/3b/cb003bfd74f162c9d90c1bc745dc1989.jpg"
                alt=""
                className="image"
              />
            </div>
          </div>
          <div className="border block_body">
            <div className="block_element left_element">
              <div className="box1">
                <div className="design">CRAFTSMANSHIP </div>
                <div>_____</div>
              </div>
            </div>
            <div className="block_element right_element">
              <img
                src="https://i.pinimg.com/564x/0a/2f/ae/0a2fae4e9254265175bb480bdd01f150.jpg"
                alt=""
                className="image"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ourCraft;
