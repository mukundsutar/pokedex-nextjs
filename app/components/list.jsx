import React from "react";
import { getPokemonList } from "../api/apiRequests";

export default async function List() {
	const data = await getPokemonList();
	const pokemonList = data.pokemon_entries;

	return (
		<>
			<label
				htmlFor="my-drawer-2"
				aria-label="close sidebar"
				className="drawer-overlay"
			></label>
			<ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
				{/* Sidebar content here */}
				<li className="sticky top-4 z-10">
					<input
						type="text"
						placeholder="Type here"
						className="input input-bordered w-[95%] max-w-xs"
					/>
				</li>
				{data &&
					pokemonList.map((item, index) => (
						<li key={index}>
							<a
								className="uppercase"
								href={item.pokemon_species.name}
							>
								{item.pokemon_species.name}
							</a>
						</li>
					))}
			</ul>
		</>
	);
}
