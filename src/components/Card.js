import React from "react";
import "./Card.scss";

import Chip from "../res/chip.png";
import Amex from "../res/amex.png";
import Visa from "../res/visa.png";
import Mastercard from "../res/mastercard.png";

const Card = ({ ccNum, name, month, year, cvvActive, cvv, maxLength, cardType }) => {
  let cardNum = [];
  const defCardNum = "**** **** **** ****";
  const amexCardNum = "**** ****** *****";
  let cardNumPlaceholder = defCardNum;
  let logo = Amex;
  let defName = "FULL NAME";

  if (cardType === "amex") {
    cardNumPlaceholder = amexCardNum;
    logo = Amex;
  } else if (cardType === "master") {
    cardNumPlaceholder = defCardNum;
    logo = Mastercard;
  } else if (cardType === "visa") {
    cardNumPlaceholder = defCardNum;
    logo = Visa;
  }

  if (ccNum.length === 0) {
    for (let i = 0; i < cardNumPlaceholder.length; i++) {
      cardNum.push(
        <div className="card-number-char" key={Math.random() * i}>
          {cardNumPlaceholder[i]}
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
    for (let j = ccNum.length; j < cardNumPlaceholder.length; j++) {
      cardNum.push(
        <div className="card-number-char" key={Math.random() * j}>
          {cardNumPlaceholder[j]}
        </div>
      );
    }
  }

  return (
    <>
      <div className={cvvActive ? "card-wrapper card-front flipped" : "card-wrapper card-front"}>
        <div className="card-row card-row-1">
          <div className="card-hologram">
            <img src={Chip} alt="Card's chip" />
          </div>
          <div className="card-logo">
            <img src={logo} alt="Card's type logo" />
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
      <div className={cvvActive ? "card-wrapper card-back flipped" : "card-wrapper card-back"}>
        <div className="card-row card-row-1">
          <div className="card-stripe"></div>
        </div>
        <div className="card-row card-row-2">
          <div className="card-back-middle">
            <div className="card-cvv-title">CVV</div>
            <div className="card-white-stripe">
              <div className="card-cvv">{cvv}</div>
            </div>
          </div>
        </div>
        <div className="card-row card-row-5"></div>
      </div>
    </>
  );
};

export default Card;
