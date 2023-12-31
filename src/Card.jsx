import React from "react";
import "./Card.css"

export const Card = ({ num }) => {

  return (
  <div className="Card">
    <h2>Lottery: <b>{num[0]}</b><b>{num[1]}</b><b>{num[2]}</b></h2>
  </div>
  )
};
