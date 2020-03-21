import React from "react";
import "./Form.scss";

const Form = () => {
  return (
    <div className="form-wrapper">
      <div className="form-row row-1">
        <label htmlFor="cardNumber">Card Number</label>
        <input type="text" id="cardNumber" class="card-number-input" />
      </div>
      <div className="form-row">
        <label htmlFor="cardHolder">Card Holders Name</label>
        <input type="text" id="cardHolder" class="card-holder-input" />
      </div>
      <div className="form-row row-3">
        <div className="card-expires">
          <label htmlFor="cardExpires">Expiration Date</label>
          <div className="card-expires-selection">
            <select id="cardMonth" class="card-expires-month">
              <option value disabled="disabled" selected="selected">
                Month
              </option>
            </select>
            <select id="cardYear" class="card-expires-year">
              <option value disabled="disabled" selected="selected">
                Year
              </option>
            </select>
          </div>
        </div>
        <div className="card-cvv">
          <label htmlFor="cardCvv">CVV</label>
          <input type="text" id="cardCvv" class="card-holder-cvv" />
        </div>
      </div>
      <div className="form-row">4</div>
    </div>
  );
};

export default Form;
