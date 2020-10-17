import React from "react";
import "../styles/components/IntroSection.css";
import logo from "../assets/Logo1.svg";

function IntroSection() {
  return (
    <>
      <div className="intro-container">
        <div className="intro-text-container">
          <p className="intro-text">
            be it,{"\n"}
            random advice,{"\n"}
            meaningful counsels,{"\n"}
            or witty instagram caption,
          </p>
          <figure className="intro-body-logo-wrap">
            <img src={logo} alt="logo" className="intro-text-logo"></img>
          </figure>
          <p className="intro-text">is here to help.</p>
        </div>
      </div>
    </>
  );
}

export default IntroSection;
