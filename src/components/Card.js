import React from "react";
import "./Card.scss";

import Chip from "../res/chip.png";
import Amex from "../res/amex.png";

const Card = () => {
  return (
    <div className="card-wrapper">
      <div className="card-row card-row-1">
        <div className="card-hologram">
          <img src={Chip} alt="Card's chip" />
        </div>
        <div className="card-logo">
          <img src={Amex} alt="Card's type logo" />
        </div>
      </div>
      <div className="card-row card-row-2">
        <div className="card-number">
          <div className="card-number-char">4</div>
          <div className="card-number-char">3</div>
          <div className="card-number-char">4</div>
          <div className="card-number-char">3</div>
          <div className="card-number-char"></div>
          <div className="card-number-char">#</div>
          <div className="card-number-char">#</div>
          <div className="card-number-char">#</div>
          <div className="card-number-char">#</div>
          <div className="card-number-char"></div>
          <div className="card-number-char">#</div>
          <div className="card-number-char">#</div>
          <div className="card-number-char">#</div>
          <div className="card-number-char">#</div>
          <div className="card-number-char"></div>
          <div className="card-number-char">#</div>
          <div className="card-number-char">#</div>
          <div className="card-number-char">#</div>
          <div className="card-number-char">#</div>
        </div>
      </div>
      <div className="card-row card-row-3">
        <div className="card-name">
          <div className="card-name-title">Card Holder</div>
          <div className="card-name-name">FULL NAME</div>
        </div>
        <div className="card-expires">
          <div className="card-expires-title">Expires</div>
          <div className="card-expires-date">
            <div className="card-expires-date-month">11</div>
            <span>/</span>
            <div className="card-expires-date-year">24</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
