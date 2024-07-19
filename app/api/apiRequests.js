export async function getData(id) {
	const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);

	if (!res.ok) {
		// This will activate the closest `error.js` Error Boundary
		throw new Error("Failed to fetch data");
	}

	return res.json();
}
