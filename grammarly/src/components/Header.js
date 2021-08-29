import React from "react";
import "./Header.scss";
import logo from "../images/logo.svg";

const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <img src={logo} alt="Grammarly Premium" />
      </div>
      <a href="#" className="login">
        Log in
      </a>
    </div>
  );
};

export default Header;
