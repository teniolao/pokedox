import React from "react";

function Logo(props) {
  return (
    <header>
      <h1>Welcome to {props.appName}'s Pokedex</h1>
      <img
        onClick={props.handleClick}
        src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/016.png"
        alt="pokedox"
      />
    </header>
  );
}

export default Logo;
