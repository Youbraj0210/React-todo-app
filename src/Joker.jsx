import React from "react";
import { useEffect } from "react";
import { useState } from "react";

export const Joker = () => {
  let [joke, setJOke] = useState({});
  let url = "https://official-joke-api.appspot.com/random_joke";
  let getRandomJoke = async () => {
    let response = await fetch(url);
    let jsonRes = await response.json();
    console.log(jsonRes);
    setJOke({
      setup: jsonRes.setup,
      punchline: jsonRes.punchline,
    });
  };

  useEffect(() => {
    let initJoke = async () => {
      let response = await fetch(url);
      let jsonRes = await response.json();
      setJOke({
        setup: jsonRes.setup,
        punchline: jsonRes.punchline,
      });
    };
    initJoke();
  }, []);
  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <h1>Joker</h1>
      <h2>Setup: {joke.setup}</h2>
      <h2>Punchline: {joke.punchline}</h2>
      <button onClick={getRandomJoke}>Submit</button>
    </div>
  );
};
