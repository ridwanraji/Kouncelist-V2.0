import React from "react";
import CardItem from "./CardItems";
import Searching from "./../assets/searching.svg";
import Random from "./../assets/random.svg";
import "./../styles/components/Cards.css";

function Cards() {
  return (
    <div className="cards-container">
      <div className="cards-wrapper">
        <ul className="cards-items">
          <CardItem
            src={Random}
            text="generate kouncel"
            smallText="kouncel randomly changes every minute"
            path="/random"
          />

          <CardItem
            src={Searching}
            text="search  kouncel"
            smallText="generate kounsel from search keywords"
            path="/random"
          />
        </ul>
      </div>
    </div>
  );
}

export default Cards;
