import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import Product from "../Components/Product/Product";
import Footer from "../Components/Footer/Footer";
import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const ProductLayout = (props) => {
  const { _id } = useParams();
  const [product, setproduct] = useState({});

  useEffect(() => {
    const getproduct = async () => {
      const productelement = await axios.get(`/muaa/get/${_id}`);
      setproduct(productelement.data.data);
    };

    getproduct()
  }, []);

  return (
    <>
      <div>
        <Navbar />
        <Product imageUrl={product.imageUrl} title={product.title} price={product.price}/>
        <Footer />
      </div>
    </>
  );
};

export default ProductLayout;
