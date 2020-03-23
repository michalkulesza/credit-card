import React from "react";
import "./Form.scss";

const Form = ({
  formatCard,
  ccNum,
  setCcNum,
  maxLength,
  name,
  setName,
  month,
  setMonth,
  year,
  setYear,
  setCvvActive,
  cvv,
  setCvv,
  setCursor
}) => {
  let years = [];

  const handleOnChangeCardNumber = e => {
    let cursor = e.target.selectionStart;
    let lastVal = e.target.value;
    let formattedNum = formatCard(e.target.value);

    setCcNum(formattedNum);

    if (cursor === lastVal.length) {
      cursor = formattedNum.length;
      if (
        e.target.getAttribute("data-lastvalue") &&
        e.target.getAttribute("data-lastvalue").charAt(cursor - 1) === " "
      ) {
        cursor--;
      }
    }

    if (lastVal !== formattedNum) {
      if (lastVal.charAt(cursor) === " " && formattedNum.charAt(cursor - 1) === " ") {
        cursor++;
      }
    }

    e.target.selectionStart = cursor;
    e.target.selectionEnd = cursor;
    e.target.setAttribute("data-lastvalue", formattedNum);
    setCursor(cursor);
  };

  const handleOnChangeName = e => {
    setName(e.target.value.toUpperCase().replace(/[^a-zA-Z ]/g, ""));
  };

  for (let i = 0; i < 10; i++) {
    let year = new Date().getFullYear();
    years.push(<option key={Math.random() * i}>{year + i}</option>);
  }

  return (
    <div className="form-wrapper">
      <div className="form-row row-1">
        <label htmlFor="cardNumber">Card Number</label>
        <input
          type="text"
          id="cardNumber"
          onChange={handleOnChangeCardNumber}
          value={ccNum}
          maxLength={maxLength}
          className="card-number-input"
        />
      </div>
      <div className="form-row">
        <label htmlFor="cardHolder">Card Holders Name</label>
        <input
          type="text"
          id="cardHolder"
          className="card-holder-input"
          onChange={handleOnChangeName}
          value={name}
          maxLength="31"
        />
      </div>
      <div className="form-row row-3">
        <div className="card-expires">
          <label htmlFor="cardExpires">Expiration Date</label>
          <div className="card-expires-selection">
            <select
              value={month !== 0 ? month : "Month"}
              onChange={e => setMonth(e.target.value)}
              id="cardMonth"
              className="card-expires-month"
            >
              <option disabled="disabled">Month</option>
              <option>01</option>
              <option>02</option>
              <option>03</option>
              <option>04</option>
              <option>05</option>
              <option>06</option>
              <option>07</option>
              <option>08</option>
              <option>09</option>
              <option>10</option>
              <option>11</option>
              <option>12</option>
            </select>
            <select
              value={year !== 0 ? year : "Year"}
              onChange={e => setYear(e.target.value)}
              id="cardYear"
              className="card-expires-year"
            >
              <option disabled="disabled">Year</option>
              {years}
            </select>
          </div>
        </div>
        <div className="card-cvv">
          <label htmlFor="cardCvv">CVV</label>
          <input
            onFocus={() => setCvvActive(true)}
            onBlur={() => setCvvActive(false)}
            type="text"
            id="cardCvv"
            className="card-holder-cvv"
            maxLength="4"
            onChange={e => setCvv(e.target.value.toString().replace(/\D/g, ""))}
            value={cvv}
          />
        </div>
      </div>
      <div className="form-row"></div>
    </div>
  );
};

export default Form;
