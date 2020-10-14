import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "../styles/components/PageBorders.css";
import IntroSection from "./IntroSection";
import Cards from "./Cards";

function PageBoders() {
  return (
    <>
      <div className="page-borders">
        <div className="page-borders-container">
          <Navbar />
          <IntroSection />
          <Cards />
          <Footer />
        </div>
      </div>
    </>
  );
}

export default PageBoders;
