import React from "react";
import { Link } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";
import Logo from "../../assets/logo.png";
import "./Navbar.css";

export const Navbar = () => {
  return (
    <div className="navbar">
      <img src={Logo} alt="" height={120} width={110} />
      <div className="links">
        <Link to="/">Home</Link>
        <Link to=""> Shop </Link>
        <Link to=""> Contact </Link>
        <Link to="">
          <ShoppingCart size={32} />
        </Link>
      </div>
    </div>
  );
};
export default Navbar;
