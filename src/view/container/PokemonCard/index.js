import React, { useCallback } from "react";

import { withRouter } from "react-router-dom";

import Card from "../../component/Card";

import imgUrlGenerator from "../../../util/imgUrlGenerator";

import { pokemonGifURL } from "../../../util/constants";

const PokemonCard = ({ name, history }) => {
  const onCardClick = useCallback(() => {
    history.push(`/${name}`);
  }, [name, history]);
  return (
    <div onClick={onCardClick}>
      <Card name={name} src={imgUrlGenerator(pokemonGifURL, name)} />
    </div>
  );
};

export default withRouter(PokemonCard);
