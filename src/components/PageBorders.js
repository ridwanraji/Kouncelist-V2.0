import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "../styles/components/PageBorders.css";
import IntroSection from "./IntroSection";

function PageBoders() {
  return (
    <>
      <div className="page-borders">
        <div className="page-borders-container">
          <Navbar />
          <IntroSection />
          <Footer />
        </div>
      </div>
    </>
  );
}

export default PageBoders;
