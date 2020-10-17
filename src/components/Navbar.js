import React from "react";
import { Link } from "react-router-dom";
import "../styles/components/Navbar.css";
import logo from "../assets/Logo1.svg";

function Navbar() {
  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo">
            <img src={logo} alt="logo" width="100px"></img>
          </Link>
          <Link to="/search">
            <i className="fas fa-search"></i>
          </Link>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
