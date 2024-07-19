import { create } from "zustand";

const useStore = create((set) => ({
	count: 0,
	increasePopulation: () => set((state) => ({ count: state.count + 1 })),
}));

export default useStore;
