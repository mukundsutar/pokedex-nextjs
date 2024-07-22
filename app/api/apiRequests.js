export async function getPokemonData(name) {
	const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);

	if (!res.ok) {
		// This will activate the closest `error.js` Error Boundary
		throw new Error("Failed to fetch data");
	}

	return res.json();
}

export async function getTypeEffectiveness(typeName) {
	const res = await fetch(`https://pokeapi.co/api/v2/type/${typeName}`);

	if (!res.ok) {
		// This will activate the closest `error.js` Error Boundary
		throw new Error("Failed to fetch data");
	}

	return res.json();
}

export async function getPokemonSpecies(id) {
	const res = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${id}`);

	if (!res.ok) {
		// This will activate the closest `error.js` Error Boundary
		throw new Error("Failed to fetch data");
	}

	return res.json();
}

export async function getPokemonList() {
	const res = await fetch("https://pokeapi.co/api/v2/pokedex/national");

	if (!res.ok) {
		// This will activate the closest `error.js` Error Boundary
		throw new Error("Failed to fetch data");
	}

	return res.json();
}
