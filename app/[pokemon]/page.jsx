import React from "react";
import Navbar from "../components/Navbar";
import Profile from "../components/Profile";
import {
  getPokemonData,
  getPokemonSpecies,
} from "../api/apiRequests";
import TypeEffectiveness from "../components/TypeEffectiveness";

export default async function Pokemon({ params }) {
  const pokemonName = params?.pokemon;
  console.log(pokemonName);
  const pokemonData = await getPokemonData(pokemonName);
  const speciesData = await getPokemonSpecies(pokemonData.id);

  return (
    <>
      <div className="flex w-full flex-col items-center justify-center">
        <Navbar pokemonData={pokemonData} />
        <Profile pokemonData={pokemonData} speciesData={speciesData} />
        <TypeEffectiveness pokemonDataTypes={pokemonData.types} />
      </div>
    </>
  );
}
