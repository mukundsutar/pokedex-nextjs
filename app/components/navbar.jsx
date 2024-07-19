"use client";
import React from "react";
import useStore from "../api/store";

export default function Navbar() {
	const nextPokemon = useStore((state) => state.nextPokemon);
	const previousPokemon = useStore((state) => state.previousPokemon);
	const currPokemeon = useStore((state) => state.currPokemeon);

	return (
		<>
			<div className="navbar bg-base-100">
				<div className="navbar-start">
					<a className="btn btn-ghost text-xl">Previous</a>
				</div>
				<div className="navbar-center">
					<p className="text-3xl ">Bulbasaur</p>
				</div>
				<div className="navbar-end">
					<a className="btn btn-ghost text-xl">Next</a>
				</div>
			</div>
		</>
	);
}
