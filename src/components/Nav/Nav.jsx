import React from "react";
import logo from "./../../assets/logo.png";
import "./Nav.css";

const Nav = () => {
  return (
    <div className="nav-container">
      <div className="nav-left">
        <img className="flash-logo" src={logo} alt="logo" />
        <p className="flash-logo-text">FLASHTYPE</p>
      </div>
      <div className="nav-right">
        <a
          target="_blank"
          className="nav-link"
          href="https://www.linkedin.com/in/mousam-gangrade/"
          rel="noreferrer"
        >
          Mousam
        </a>
      </div>
    </div>
  );
};

export default Nav;
