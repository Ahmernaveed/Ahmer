import React from "react";
import PRODUCTS from "../../products";
import Product from "../SShop/product";
import "./shop.css";

const shop = () => {
  return (
    <div className="shop">
      <div className="shopTitle">
        <h1>PedroTech Shop</h1>
      </div>

      <div className="products">
        {PRODUCTS.map((product, i) => (
          <Product key={i} data={product} />
        ))}
      </div>
    </div>
  );
};
export default shop;
