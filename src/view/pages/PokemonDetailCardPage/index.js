import React from "react";

import PokemonDetailCard from "../../container/PokemonDetailCard";

import "../page.scss";

export default (props) => (
  <div className="full-width vertical-flow cross-axis-centered page">
    <PokemonDetailCard {...props} />
  </div>
);
