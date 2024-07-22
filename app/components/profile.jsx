import React from "react";
import Image from "next/image";
import clsx from "clsx";

export default async function Profile({ pokemonData, speciesData }) {
	return (
		<>
			<div className="hero min-h-fit bg-base-200 p-10">
				<div className="hero-content flex-col space-x-20 lg:flex-row">
					<Image
						src={
							pokemonData.sprites.other["official-artwork"]
								.front_default
						}
						className="max-w-sm rounded-lg shadow-2xl"
						width={650}
						height={650}
					/>

					<div>
						<h1 className="text-5xl font-bold capitalize">
							{pokemonData.name}
						</h1>
						<p className="py-6">
							{speciesData.flavor_text_entries[0].flavor_text}
						</p>

						<div className="card flex w-full flex-row bg-base-100 shadow-xl">
							<div className="card-body w-[50%]">
								<h2 className="card-title">Genus</h2>
								<p>Seed Pokemon</p>
								<h2 className="card-title">Weight</h2>
								<p>69kg</p>
								<h2 className="card-title">Height</h2>
								<p>1.2m</p>
							</div>
							<div className="card-body h-full w-[50%]">
								<h2 className="card-title">Types</h2>
								<div className="flex flex-row flex-wrap gap-3">
									{pokemonData.types.map((item, index) => {
										// Define your base classes and conditional classes
										const baseClasses =
											"w-18 badge badge-md uppercase";
										const typeClass = `bg-${item.type.name}`;

										return (
											<div
												key={index}
												className={clsx(
													"w-18 badge badge-md uppercase",
													{
														"bg-normal":
															item.type.name ===
															"normal",
														"bg-fire":
															item.type.name ===
															"fire",
														"bg-water":
															item.type.name ===
															"water",
														"bg-electric":
															item.type.name ===
															"electric",
														"bg-grass":
															item.type.name ===
															"grass",
														"bg-ice":
															item.type.name ===
															"ice",
														"bg-fighting":
															item.type.name ===
															"fighting",
														"bg-poison":
															item.type.name ===
															"poison",
														"bg-ground":
															item.type.name ===
															"ground",
														"bg-flying":
															item.type.name ===
															"flying",
														"bg-psychic":
															item.type.name ===
															"psychic",
														"bg-bug":
															item.type.name ===
															"bug",
														"bg-rock":
															item.type.name ===
															"rock",
														"bg-ghost":
															item.type.name ===
															"ghost",
														"bg-dragon":
															item.type.name ===
															"dragon",
														"bg-dark":
															item.type.name ===
															"dark",
														"bg-steel":
															item.type.name ===
															"steel",
														"bg-fairy":
															item.type.name ===
															"fairy",
													}
												)}
											>
												{item.type.name}
											</div>
										);
									})}
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
