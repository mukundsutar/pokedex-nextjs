import React from "react";
import Navbar from "../components/navbar";
import Details from "../components/details";

export default function Pokemon() {
	return (
		<>
			<div className="flex flex-col items-center justify-center">
				<Navbar />
				<Details />
			</div>
		</>
	);
}
