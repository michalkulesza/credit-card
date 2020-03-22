import React from "react";
import "./Card.scss";

import Chip from "../res/chip.png";
import Amex from "../res/amex.png";

const Card = ({ ccNum, name, month, year }) => {
  let cardNum = [];
  const defCardNum = "0000 0000 0000 0000";
  let defName = "FULL NAME";

  if (ccNum.length === 0) {
    for (let i = 0; i < defCardNum.length; i++) {
      cardNum.push(
        <div className="card-number-char" key={Math.random() * i}>
          {defCardNum[i]}
        </div>
      );
    }
  } else {
    for (let i = 0; i < ccNum.length; i++) {
      cardNum.push(
        <div className="card-number-char" key={Math.random() * i}>
          {ccNum[i]}
        </div>
      );
    }
  }

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
        <div className="card-number">{cardNum}</div>
      </div>
      <div className="card-row card-row-3">
        <div className="card-name">
          <div className="card-name-title">Card Holder</div>
          <div className="card-name-name">{name.length === 0 ? defName : name}</div>
        </div>
        <div className="card-expires">
          <div className="card-expires-title">Expires</div>
          <div className="card-expires-date">
            <div className="card-expires-date-month">{month === 0 ? "MM" : month}</div>
            <span>/</span>
            <div className="card-expires-date-year">{year === 0 ? "YY" : year.substring(2)}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
