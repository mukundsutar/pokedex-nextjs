import React from "react";
import Navbar from "../components/navbar";
import Profile from "../components/profile";
import { getPokemonData } from "../api/apiRequests";

export default async function Pokemon({ params }) {
	const pokemonName = params?.pokemon;
	console.log(pokemonName);
	const data = await getPokemonData(pokemonName);

	return (
		<>
			<div className="flex flex-col items-center justify-center">
				<Navbar pokemonData={data} />
				<Profile pokemonData={data} />
			</div>
		</>
	);
}
