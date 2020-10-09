import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/components/Navbar.css";
import logo from "../assets/Logo.png";

function Navbar() {
  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo">
            <img src={logo} alt="logo" width="100px"></img>
          </Link>
          <i className="fas fa-search"></i>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
