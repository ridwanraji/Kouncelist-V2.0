import React from "react";
import { Link } from "react-router-dom";

function CardItem(props) {
  return (
    <>
      <li className="cards-items">
        <Link className="card-item-link" to={props.path}>
          <figure className="card-item-pic-wrap">
            <img src={props.src} alt="unDraw" className="card-item-img" />
          </figure>
          <div className="card-item-info">
            <h4 className="card-item-text">{props.text}</h4>
            <p className="card-item-smallText">{props.smallText}</p>
          </div>
        </Link>
      </li>
    </>
  );
}

export default CardItem;
