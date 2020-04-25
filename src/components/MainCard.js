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
  const [cursor, setCursor] = useState(0);

  const formatCard = (cardNumber) => {
    const num = cardNumber.toString().replace(/\D/g, "");
    let formattedNum;

    if (/^3[47]\d{0,13}$/.test(num)) {
      formattedNum = num.replace(/(\d{4})/, "$1 ").replace(/(\d{4}) (\d{6})/, "$1 $2 ");
      setMaxLength(17);
      setCardType("amex");
    } else if (/^5[1-5][0-9]{0,14}$/.test(num)) {
      formattedNum = num
        .replace(/(\d{4})/, "$1 ")
        .replace(/(\d{4}) (\d{4})/, "$1 $2 ")
        .replace(/(\d{4}) (\d{4}) (\d{4})/, "$1 $2 $3 ");
      setMaxLength(19);
      setCardType("master");
    } else {
      formattedNum = num
        .replace(/(\d{4})/, "$1 ")
        .replace(/(\d{4}) (\d{4})/, "$1 $2 ")
        .replace(/(\d{4}) (\d{4}) (\d{4})/, "$1 $2 $3 ");
      setMaxLength(19);
      setCardType("visa");
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
        cardType={cardType}
        cursor={cursor}
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
        setCursor={setCursor}
        cardType={cardType}
      ></Form>
    </div>
  );
};

export default MainCard;
