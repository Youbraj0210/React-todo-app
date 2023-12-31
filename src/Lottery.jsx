import React, { useState } from "react";
import "./Lottery.css";
import { Card } from "./Card";

export const Lottery = () => {
  const [lottery, setLottery] = useState([0,0,0]);
  const [win, setWin] = useState(false);

  let genreateLottery = () => {
    let x = Math.floor(Math.random() * 10);
    let y = Math.floor(Math.random() * 10);
    let z = Math.floor(Math.random() * 10);
    
    setLottery([x, y, z]);
    if(x+y+z == 15){
      setWin(true);
    }
    else{
      setWin(false);
    }
    
  };

  return (
    <div className="container">
      {win ? <h1>Congratulation you WON !!</h1> : <h1>LOTTERY</h1>}
      <button onClick={genreateLottery}>Lottery!</button>
      <Card num={lottery} />
    </div>
  );
};
