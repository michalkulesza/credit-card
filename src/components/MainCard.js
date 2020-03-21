import React from "react";
import "./MainCard.scss";

import Card from "./Card";
import Form from "./Form";

const MainCard = () => {
  return (
    <div className="main-card-wrapper">
      <Card></Card>
      <Form></Form>
    </div>
  );
};

export default MainCard;
