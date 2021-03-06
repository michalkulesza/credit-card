import React, { useEffect, useState } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import uuid from "react-uuid";
import "./Card.scss";

import Chip from "../res/chip.png";
import Amex from "../res/amex.png";
import Visa from "../res/visa.png";
import Mastercard from "../res/mastercard.png";

let logo;
let lastCursorPosition = 0;
const defCardNum = "**** **** **** ****";
const amexCardNum = "**** ****** *****";
let cardNumPlaceholder = defCardNum;
let defName = "FULL NAME";

const Card = ({ ccNum, name, month, year, cvvActive, cvv, cardType, cursor }) => {
  const [cardNum, setCardNum] = useState([]);

  useEffect(() => {
    if (cardType === "amex") {
      cardNumPlaceholder = amexCardNum;
      logo = (
        <CSSTransition timeout={350} classNames="logo" key={uuid()}>
          <img src={Amex} alt="Card's type logo" />
        </CSSTransition>
      );
    } else if (cardType === "master") {
      cardNumPlaceholder = defCardNum;
      logo = (
        <CSSTransition timeout={350} classNames="logo" key={uuid()}>
          <img src={Mastercard} alt="Card's type logo" />
        </CSSTransition>
      );
    } else if (cardType === "visa") {
      cardNumPlaceholder = defCardNum;
      logo = (
        <CSSTransition timeout={350} classNames="logo" key={uuid()}>
          <img src={Visa} alt="Card's type logo" />
        </CSSTransition>
      );
    }
  }, [cardType]);

  useEffect(() => {
    let tempCardNum = [];
    for (let i = 0; i < cardNumPlaceholder.length; i++) {
      tempCardNum.push(
        <div className="card-number-char" key={uuid()}>
          {cardNumPlaceholder[i]}
        </div>
      );
    }
    setCardNum(tempCardNum);
    // eslint-disable-next-line
  }, [cardNumPlaceholder]);

  for (let j = 0; j < ccNum.length; j++) {
    if (cardNum[j].props.children !== ccNum[j]) {
      cardNum[j] = (
        <div className="card-number-char" key={uuid()}>
          {ccNum[j]}
        </div>
      );
      lastCursorPosition = cursor;
    }
  }

  if (lastCursorPosition > cursor) {
    let tempCardNum = [...cardNum];
    tempCardNum[lastCursorPosition - 1] = (
      <div className="card-number-char" key={uuid()}>
        {cardNumPlaceholder[lastCursorPosition - 1]}
      </div>
    );
    setCardNum(tempCardNum);
    lastCursorPosition = cursor;
  }

  return (
    <>
      <div className={cvvActive ? "card-wrapper card-front flipped" : "card-wrapper card-front"}>
        <div className="card-overlay">
          <div className="card-row card-row-1">
            <div className="card-hologram">
              <img src={Chip} alt="Card's chip" />
            </div>
            <TransitionGroup className="card-logo">{logo}</TransitionGroup>
          </div>
          <div className="card-row card-row-2">
            <div className="card-number">{cardNum}</div>
          </div>
          <div className="card-row card-row-3">
            <div className="card-name">
              <div className="card-name-title">Card Holder</div>
              <div className="card-name-name">
                {name.length === 0 ? defName : name.toUpperCase()}
              </div>
            </div>
            <div className="card-expires">
              <div className="card-expires-title">Expires</div>
              <div className="card-expires-date">
                <div className="card-expires-date-month">{!month ? "MM" : month}</div>
                <span>/</span>
                <div className="card-expires-date-year">{!year ? "YY" : year.substring(2)}</div>
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

Card.defaultProps = {
  ccNum: "",
  name: "",
};

export default Card;
