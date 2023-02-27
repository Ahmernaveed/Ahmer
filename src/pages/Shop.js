import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SNavbar from "../../src/components/SNavbar/Navbar";
import SShop from "../../src/components/SShop/shop";

const Shop = () => {
  return (
    <>
      <SNavbar />
      <SShop />
    </>
  );
};

export default Shop;
