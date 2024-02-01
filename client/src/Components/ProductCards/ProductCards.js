import React from "react";
import "./ProductCards.css";

const ProductCards = (props) => {
  return (
    <>
      <a href={`/product/${props._id}`}>
        <div className="product_Card_Body">
          <div>
            <img src={props.imageUrl} alt="" className="product_card_image" />
          </div>
          <div className="card_text">
            <div>{props.title}</div>
            <div>${props.price}</div>
          </div>
        </div>
      </a>
    </>
  );
};

export default ProductCards;
