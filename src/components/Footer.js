import React from "react";
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
              <a
                className="fab fa-instagram-square"
                href="https://instagram.com/mr.rilly"
                // eslint-disable-next-line
                target="_blank"
              >
                {" "}
              </a>
            </li>
            <li className="horizontal-line"></li>
            <li className="foot-social-icon">
              <a
                className="fab fa-twitter-square"
                href="https://twitter.com/rillyvisuals"
                // eslint-disable-next-line
                target="_blank"
              >
                {" "}
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
}

export default Footer;
