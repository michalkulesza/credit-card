import React, { useState } from "react";
import "./MainCard.scss";

import Card from "./Card";
import Form from "./Form";

const MainCard = () => {
  const [ccNum, setCcNum] = useState("");
  const [name, setName] = useState("");
  const [month, setMonth] = useState(0);
  const [year, setYear] = useState(0);
  const [maxLength, setMaxLength] = useState(null);

  const formatCard = cardNumber => {
    const num = cardNumber.toString().replace(/\D/g, "");
    let formattedNum;

    //Amex(15)
    if (/^3[47]\d{0,13}$/.test(num)) {
      formattedNum = num.replace(/(\d{4})/, "$1 ").replace(/(\d{4}) (\d{6})/, "$1 $2 ");
      setMaxLength(17);
    } else if (/^3(?:0[0-5]|[68]\d)\d{0,11}$/.test(num)) {
      //Diners(14)
      formattedNum = num.replace(/(\d{4})/, "$1 ").replace(/(\d{4}) (\d{6})/, "$1 $2 ");
      setMaxLength(16);
    } else if (/^\d{0,16}$/.test(num)) {
      //Regular(16)
      formattedNum = num
        .replace(/(\d{4})/, "$1 ")
        .replace(/(\d{4}) (\d{4})/, "$1 $2 ")
        .replace(/(\d{4}) (\d{4}) (\d{4})/, "$1 $2 $3 ");
      setMaxLength(19);
    }
    return formattedNum;
  };

  return (
    <div className="main-card-wrapper">
      <Card ccNum={ccNum} name={name} month={month} year={year}></Card>
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
      ></Form>
    </div>
  );
};

export default MainCard;
