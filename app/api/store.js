import { create } from "zustand";

const useStore = create((set) => ({
	count: 0,
	increasePopulation: () => set((state) => ({ count: state.count + 1 })),
	currPokemeon: 1,
	nextPokemon: () =>
		set((state) => ({ currPokemeon: state.currPokemeon + 1 })),
	previousPokemon: () =>
		set((state) => ({ currPokemeon: state.currPokemeon - 1 })),
	pokemonData: {},
	currPokemonData: () => set((state) => ({ pokemonData: state.pokemonData })),
}));

export default useStore;
