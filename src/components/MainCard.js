import React, { useState } from "react";
import "./MainCard.scss";

import Card from "./Card";
import Form from "./Form";

const MainCard = () => {
  const [ccNum, setCcNum] = useState("");
  const [name, setName] = useState("");
  const [month, setMonth] = useState(0);
  const [year, setYear] = useState(0);
  const [cvv, setCvv] = useState("");
  const [maxLength, setMaxLength] = useState(19);
  const [cvvActive, setCvvActive] = useState(false);
  const [cardType, setCardType] = useState("visa");

  const formatCard = cardNumber => {
    const num = cardNumber.toString().replace(/\D/g, "");
    let formattedNum;

    //Amex(15)
    if (/^3[47]\d{0,13}$/.test(num)) {
      formattedNum = num.replace(/(\d{4})/, "$1 ").replace(/(\d{4}) (\d{6})/, "$1 $2 ");
      setMaxLength(17);
      setCardType("amex");
      console.log("1");
    } else if (/^5[1-5][0-9]{0,14}$/.test(num)) {
      //Master(16)
      formattedNum = num
        .replace(/(\d{4})/, "$1 ")
        .replace(/(\d{4}) (\d{4})/, "$1 $2 ")
        .replace(/(\d{4}) (\d{4}) (\d{4})/, "$1 $2 $3 ");
      setMaxLength(19);
      setCardType("master");
      console.log("3");
    } else if (/^\d{0,16}$/.test(num)) {
      //Regular(16)
      formattedNum = num
        .replace(/(\d{4})/, "$1 ")
        .replace(/(\d{4}) (\d{4})/, "$1 $2 ")
        .replace(/(\d{4}) (\d{4}) (\d{4})/, "$1 $2 $3 ");
      setMaxLength(19);
      setCardType("visa");
      console.log("2");
    }
    return formattedNum;
  };

  return (
    <div className="main-card-wrapper">
      <Card
        ccNum={ccNum}
        name={name}
        month={month}
        year={year}
        cvvActive={cvvActive}
        cvv={cvv}
        maxLength={maxLength}
        cardType={cardType}
      ></Card>
      <Form
        formatCard={formatCard}
        setCcNum={setCcNum}
        ccNum={ccNum}
        maxLength={maxLength}
        name={name}
        setName={setName}
        month={month}
        setMonth={setMonth}
        year={year}
        setYear={setYear}
        setCvvActive={setCvvActive}
        cvv={cvv}
        setCvv={setCvv}
      ></Form>
    </div>
  );
};

export default MainCard;
