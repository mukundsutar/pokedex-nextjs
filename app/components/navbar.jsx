import React from "react";

export default function Navbar({ pokemonData }) {
	return (
		<>
			<div className="navbar bg-base-100">
				<div className="navbar-start">
					<a className="btn btn-ghost text-xl">Previous</a>
				</div>
				<div className="navbar-center">
					<p className="text-3xl capitalize">{pokemonData.name}</p>
				</div>
				<div className="navbar-end">
					<a className="btn btn-ghost text-xl">Next</a>
				</div>
			</div>
		</>
	);
}
