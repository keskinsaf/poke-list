import React, { useState } from "react";

import PokemonList from "../../container/PokemonList";

import "./index.scss";
import "../page.scss";

export default (props) => {
  const [pokemonListStyle] = useState({ marginTop: "32px" });

  return (
    <div className="full-width vertical-flow cross-axis-centered page pokemon-list-page">
      <img
        src="http://mandmglobal.com/wp-content/uploads/2016/08/IMMFLY-logo.png"
        width="60px"
        height="40px"
        alt="immfly"
      />
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/1920px-International_Pok%C3%A9mon_logo.svg.png"
        alt="pokemon"
        width="400"
        height="160"
        className="pokemon-image"
      />
      <PokemonList style={pokemonListStyle} {...props} />
    </div>
  );
};
