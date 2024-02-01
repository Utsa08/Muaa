import "./App.css";
import { Route, Routes } from "react-router-dom";

import HomeLayout from "./Layouts/HomeLayout";
import AllProductsLayout from "./Layouts/AllProductsLayout";
import ContactLayout from "./Layouts/ContactLayout";
import ProductLayout from "./Layouts/ProductLayout";
import OurCraftLayout from "./Layouts/OurCraftLayout";

import axios from "axios";

axios.defaults.baseURL = "http://localhost:8080";
axios.defaults.params = {};

const App = () => {
  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<HomeLayout />} />
          <Route path="/shopall" element={<AllProductsLayout />} />
          <Route path="/contact" element={<ContactLayout />} />
          <Route path="/product/:_id" element={<ProductLayout />} />
          <Route path="/ourcraft" element={<OurCraftLayout />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
