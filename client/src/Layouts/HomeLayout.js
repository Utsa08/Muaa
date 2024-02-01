import React from "react";

import Navbar from "../Components/Navbar/Navbar";
import Hero from "../Components/Hero/Hero";
import Blocks from "../Components/Blocks/Blocks";
import Cards from "../Components/Cards/Cards";
import Footer from "../Components/Footer/Footer";

const HomeLayout = () => {
  return (
    <>
      <div>
        <Navbar />
        <Hero />
        <Blocks />
        <Cards />
        <Footer />
      </div>
    </>
  );
};

export default HomeLayout;
