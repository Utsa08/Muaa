import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import AllProducts from "../Components/AllProducts/AllProducts";
import Footer from "../Components/Footer/Footer";

const AllProductsLayout = () => {
  return (
    <>
      <div>
        <Navbar />
        <AllProducts />
        <Footer />
      </div>
    </>
  );
};

export default AllProductsLayout;
