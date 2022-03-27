import React, { useState } from "react";

const CaughtPokemon = (props) => {
  const [caught, setCaught] = useState([]);

  function catchPokemon() {
    setCaught(caught.concat("pikachu"));
  }
  return (
    <p>
      Caught {caught.length} Pokemon on {props.date}
      <button onClick={catchPokemon}>catch Pokemon</button>
      {caught.map((item, index) => {
        return <li key={index}>{item}</li>;
      })}
    </p>
  );
};

export default CaughtPokemon;
