import React from "react";
import "./Product.css";

const Product = (props) => {
  return (
    <>
      <div className="product">
        <div>
          <div className="fline">{`Home / All Products / ${props.title}`}</div>
        </div>
        <div className="card">
          <div>
            <img
              className="img"
              src={props.imageUrl}
            ></img>
          </div>
          <div className="details">
            <div className="pro">{props.title}</div>
            <div className="pri">${props.price}</div>
            <div>
              <div className="qan"> Quantity</div>
              <input type="number" className="inp" min="1" />
            </div>
            <div>
              <button className="cart">Add to Cart</button>
            </div>
            <div>
              <button className="buy">Buy Now</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
