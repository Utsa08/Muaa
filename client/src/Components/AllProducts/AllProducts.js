import React from "react";
import "./AllProducts.css";
import ProductCards from "../ProductCards/ProductCards";
import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const AllProducts = () => {
  const [allProducts, setallProducts] = useState([]);

  useEffect(() => {
    const getAllProducts = async () => {
        const products = await axios.get("/muaa/get");
        setallProducts(products.data.data);
    };

    getAllProducts();
  }, []);

  return (
    <>
      <div className="productpage_body">
        <div className="product_header">ALL PRODUCTS</div>
        <div className="main_body_product">
          {allProducts.map((data) => (
            <ProductCards
              imageUrl={data.imageUrl}
              title={data.title}
              price={data.price}
              _id={data._id}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default AllProducts;
