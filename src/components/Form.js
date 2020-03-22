import React from "react";
import "./Form.scss";

const Form = ({ formatCard, ccNum, setCcNum, maxLength }) => {
  const handleOnChangeCardNumber = e => {
    setCcNum(formatCard(e.target.value));
  };

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
        <input type="text" id="cardHolder" className="card-holder-input" />
      </div>
      <div className="form-row row-3">
        <div className="card-expires">
          <label htmlFor="cardExpires">Expiration Date</label>
          <div className="card-expires-selection">
            <select id="cardMonth" className="card-expires-month">
              <option value disabled="disabled" selected="selected">
                Month
              </option>
            </select>
            <select id="cardYear" className="card-expires-year">
              <option value disabled="disabled" selected="selected">
                Year
              </option>
            </select>
          </div>
        </div>
        <div className="card-cvv">
          <label htmlFor="cardCvv">CVV</label>
          <input type="text" id="cardCvv" className="card-holder-cvv" />
        </div>
      </div>
      <div className="form-row">4</div>
    </div>
  );
};

export default Form;
