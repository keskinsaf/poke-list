import React, { useEffect, useState } from "react";

import useWindowSize from "../../../util/hook/useWindowSize";

import Loading from "../../component/Loading";
import ResponsiveGrid from "../../component/ResponsiveGrid";
import PokemonCard from "../PokemonCard";

import api from "../../../api";

const PokemonList = ({ limit = 20, offset = 0, style = {} }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [pokemons, setPokemons] = useState([]);
  const [gridColumnCount, setGridColumnCount] = useState(3);
  const [gridWidth, setGridWidth] = useState(3);
  const [responsiveGridStyle] = useState({
    marginTop: "64px",
  });

  const [width] = useWindowSize();

  useEffect(() => {
    const fetchPokemons = async () => {
      try {
        setIsLoading(true);
        const {
          data: { results },
        } = await api.pokemon.getList(limit, offset);
        setPokemons(results);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchPokemons();
  }, [limit, offset]);

  useEffect(() => {
    let nextGridColumnCount, nextGridWidth;
    if (width > 960) {
      nextGridColumnCount = 3;
      nextGridWidth = "60%";
    } else if (width > 480) {
      nextGridColumnCount = 2;
      nextGridWidth = "80%";
    } else {
      nextGridColumnCount = 1;
      nextGridWidth = "80%";
    }
    setGridColumnCount(nextGridColumnCount);
    setGridWidth(nextGridWidth);
  }, [width]);

  return (
    <div
      className="full-width full-height vertical-flow cross-axis-centered"
      style={style}
    >
      {isLoading && <Loading value={isLoading} />}
      <div>Generation 1</div>
      <div>{`${pokemons.length} pokemon`}</div>
      <ResponsiveGrid
        gridColumnCount={gridColumnCount}
        gridWidth={gridWidth}
        style={responsiveGridStyle}
      >
        {pokemons.map((pokemon, index) => (
          <PokemonCard key={`pokemon-${index}`} name={pokemon.name} />
        ))}
      </ResponsiveGrid>
    </div>
  );
  // return <Component isLoading={isLoading}/>
};

export default PokemonList;
