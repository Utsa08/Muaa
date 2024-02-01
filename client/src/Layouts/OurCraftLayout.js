import React from "react";
import OurCraft from "../Components/OurCraft/OurCraft";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";

const OurCraftLayout = () => {
  return (
    <>
      <div>
        <Navbar />
        <OurCraft />
        <Footer />
      </div>
    </>
  );
};

export default OurCraftLayout;
