import React from "react";
import Image from "next/image";

export default async function Profile({ pokemonData }) {
	return (
		<>
			<div className="hero bg-base-200 min-h-fit p-10 ">
				<div className="hero-content flex-col lg:flex-row space-x-20">
					<Image
						src={
							pokemonData.sprites.other["official-artwork"]
								.front_default
						}
						className="max-w-sm rounded-lg shadow-2xl"
						width={600}
						height={600}
					/>
					<div>
						<h1 className="text-5xl font-bold capitalize">
							{pokemonData.name}
						</h1>
						<p className="py-6">
							Provident cupiditate voluptatem et in. Quaerat
							fugiat ut assumenda excepturi exercitationem quasi.
							In deleniti eaque aut repudiandae et a id nisi.
						</p>
						<p className="py-6">
							Provident cupiditate voluptatem et in. Quaerat
							fugiat ut assumenda excepturi exercitationem quasi.
							In deleniti eaque aut repudiandae et a id nisi.
						</p>
					</div>
				</div>
			</div>
		</>
	);
}
