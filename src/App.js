import React from "react";
import Logo from "./Logo";
import BestPokemon from "./BestPokemon";
import CaughtPokemon from "./CaughtPokemon";
//import PokemonMoves from "./PokemonMoves";
import PokemonMovesSelector from "./PokemonMovesSelector";
import PokemonCity from "./PokemonCity";

function App() {
  function logWhenClicked() {
    alert("Hello there!");
  }
  return (
    <div>
      <Logo handleClick={logWhenClicked} appName="Teniola" />
      <BestPokemon abilities={["Anticipation", "Adaptability", "Run-Away"]} />
      <CaughtPokemon date={new Date().toLocaleDateString()} />
      <PokemonMovesSelector />
      <PokemonCity  />
    </div>
  );
}

export default App;
