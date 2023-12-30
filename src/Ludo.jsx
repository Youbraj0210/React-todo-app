import { useState } from "react";

function Ludo() {
  const [moves, setMoves] = useState({ blue: 0, green: 0, red: 0, yellow: 0 });

  function blueMoves(){
    setMoves((prevMoves)=>{
        return ({...prevMoves,blue:prevMoves.blue+1})
    })
  }
  function yellowMoves(){
    setMoves((prevMoves)=>{
        return ({...prevMoves,yellow:prevMoves.yellow+1})
    })
  }
  function greenMoves(){
    setMoves((prevMoves)=>{
        return ({...prevMoves,green:prevMoves.green+1})
    })
  }
  function redMoves(){
    setMoves((prevMoves)=>{
        return ({...prevMoves,red:prevMoves.red+1})
    })
  }

  return (
    <>
      <p>blue={moves.blue}</p>
      <button onClick={blueMoves}>+1</button>
      <p>green={moves.green}</p>
      <button onClick={greenMoves}>+1</button>
      <p>red={moves.red}</p>
      <button onClick={redMoves}>+1</button>
      <p>yellow={moves.yellow}</p>
      <button onClick={yellowMoves}>+1</button>
    </>
  );
}

export default Ludo;
