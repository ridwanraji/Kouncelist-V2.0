import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/components/Footer.css";

function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="footer-container">
          <p className="footer-credit">
            made with love by
            <strong> Ridwan</strong>
          </p>

          <ul className="foot-socials">
            <li className="foot-social-icon">
              <a className="fab fa-instagram-square" href="https://instagram.com"> </a>
            </li>
            <li className="horizontal-line"></li>
            <li className="foot-social-icon">
              <a className="fab fa-twitter-square" href="https://twitter.com"> </a>
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
}

export default Footer;
