import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";

import colours from "./Colours";

function Pokemon({ name }) {
  const BASE_URL = "https://pokeapi.co/api/v2";
  const [loading, setLoading] = useState(true);
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    axios
      .get(BASE_URL + `/pokemon/${name}`)
      .then((res) => {
        setPokemon(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [name]);

  if (loading) {
    return (
      <div className="pokemon">
        <h3>Loading...</h3>
        <img src="" alt="" />
        <div className="pokemon-type">
          <br></br>
        </div>
      </div>
    );
  }

  return (
    <div className="pokemon">
      <div className="pokemon-number"><h3>{pokemon.id}</h3></div>
      <img src={pokemon.sprites.front_default} alt={"Loading..."} />
      <div className="pokemon-types">
        {pokemon.types.map((type) => {
          return (
            <div
              className="pokemon-type"
              style={{ backgroundColor: colours.colors[type.type.name] }}
              key={type.slot}
            >
              {type.type.name}
            </div>
          );
        })}
      </div>
      <h3 className="pokemon-name">{pokemon.name}</h3>
    </div>
  );
}

export default Pokemon;
