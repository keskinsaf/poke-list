import React, { useState, useCallback, useEffect } from "react";

import { withRouter } from "react-router-dom";

import imgUrlGenerator from "../../../util/imgUrlGenerator";
import { pokemonGifURL } from "../../../util/constants";

import Loading from "../../component/Loading";
import DetailCard from "../../component/DetailCard";
import TitleTextCouple from "../../component/TitleTextCouple";
import TitleListCouple from "../../component/TitleListCouple";

import api from "../../../api";

import "./index.scss";

const PokemonDetailCard = ({ name, history }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [detail, setDetail] = useState({ abilities: [] });
  const [marginTop8Px] = useState({ marginTop: "8px" });

  useEffect(() => {
    const fetchDetail = async () => {
      setIsLoading(true);
      try {
        const { data } = await api.pokemon.getByName(name);
        setDetail(data);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchDetail();
  }, [name]);

  const handleClose = useCallback(() => {
    history.push("/");
  }, [history]);
  return (
    <div className="full-width horizontal-flow main-axis-centered pokemon-detail-card">
      {isLoading && <Loading isLoading={isLoading} />}
      <DetailCard
        name={name}
        src={imgUrlGenerator(pokemonGifURL, name)}
        handleClose={handleClose}
      >
        <TitleTextCouple title="ID" text={detail.id} style={marginTop8Px} />
        <TitleTextCouple
          title="Height"
          text={detail.height}
          style={marginTop8Px}
        />
        <TitleListCouple
          title="Abilities"
          list={detail.abilities}
          itemValueGetter={(item) => item.ability.name}
          style={marginTop8Px}
        />
      </DetailCard>
    </div>
  );
};

export default withRouter(PokemonDetailCard);
