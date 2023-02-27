import React from "react";
import "./Video.css";
import Logo from "../../assets/logo.png";
import { NavLink } from "react-router-dom";

const Video = () => {
  return (
    <div className="main">
      <div className="logo-v">
        <img src={Logo} alt="" height={120} width={110} />{" "}
        <center>
          {" "}
          <NavLink to="/" className="H-v">
            Home
          </NavLink>
        </center>
      </div>
    </div>
  );
};

export default Video;
