import React from "react";
import Navbar from "../components/navbar";
import Profile from "../components/profile";
import {
	getPokemonData,
	getPokemonSpecies,
	getTypeEffectiveness,
} from "../api/apiRequests";
import TypeEffectiveness from "../components/typeEffectiveness";

export default async function Pokemon({ params }) {
	const pokemonName = params?.pokemon;
	console.log(pokemonName);
	const pokemonData = await getPokemonData(pokemonName);
	const speciesData = await getPokemonSpecies(pokemonData.id);

	const double_damage_from = [];
	const double_damage_to = [];
	const half_damage_from = [];
	const half_damage_to = [];
	const no_damage_from = [];
	const no_damage_to = [];

	return (
		<>
			<div className="flex flex-col items-center justify-center">
				<Navbar pokemonData={pokemonData} />
				<Profile pokemonData={pokemonData} speciesData={speciesData} />
				<TypeEffectiveness pokemonDataTypes={pokemonData.types} />
			</div>
		</>
	);
}
