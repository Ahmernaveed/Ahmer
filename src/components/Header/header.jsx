import React from "react";
import "./header.css";
import Logo from "../../assets/logo.png";
import { NavLink } from "react-router-dom";
const header = () => {
  return (
    <div className="header">
      <img src={Logo} alt="" className="logo" />
      {/* <Link>Normal Link</Link> */}

      <ul className="header-menu">
        <li>Home</li>
        <li>Programs</li>
        <NavLink
          to="/shop"
          style={({ isActive }) => ({
            color: isActive ? "purple" : "white",
            textDecoration: "none",
          })}
        >
          Shop
        </NavLink>
        <li>Plans</li>
        <NavLink
          to="/video"
          style={({ isActive }) => ({
            color: isActive ? "purple" : "white",
            textDecoration: "none",
          })}
        >
          Videos
        </NavLink>
        <li>About</li>
      </ul>
    </div>
  );
};

export default header;
