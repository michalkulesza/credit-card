import React, { useEffect, useState } from "react";
import "./Card.scss";

import Chip from "../res/chip.png";
import Amex from "../res/amex.png";
import Visa from "../res/visa.png";
import Mastercard from "../res/mastercard.png";
let lastCursorPosition = 0;

const Card = ({ ccNum, name, month, year, cvvActive, cvv, maxLength, cardType, cursor }) => {
  const [cardNum, setCardNum] = useState([]);
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

  useEffect(() => {
    let tempCardNum = [];
    for (let i = 0; i < cardNumPlaceholder.length; i++) {
      tempCardNum.push(
        <div className="card-number-char" key={Math.random() * i}>
          {cardNumPlaceholder[i]}
        </div>
      );
    }

    setCardNum(tempCardNum);
  }, [cardNumPlaceholder]);

  if (lastCursorPosition > cursor) {
    cardNum[lastCursorPosition - 1] = (
      <div className="card-number-char" key={Math.random() * Math.random()}>
        {cardNumPlaceholder[lastCursorPosition - 1]}
      </div>
    );
    lastCursorPosition = cursor;
  } else {
    for (let j = 0; j < ccNum.length; j++) {
      if (cardNum[j].props.children !== ccNum[j]) {
        cardNum[j] = (
          <div className="card-number-char" key={Math.random() * j}>
            {ccNum[j]}
          </div>
        );
      }
    }
    lastCursorPosition = cursor;
    console.log(cardNum);
  }

  return (
    <>
      <div className={cvvActive ? "card-wrapper card-front flipped" : "card-wrapper card-front"}>
        <div className="card-overlay">
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
                <div className="card-expires-date-year">
                  {year === 0 ? "YY" : year.substring(2)}
                </div>
              </div>
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
