import React from "react";
import { getTypeEffectiveness } from "../api/apiRequests";

export default async function TypeEffectiveness({ pokemonDataTypes }) {
	// console.log(pokemonDataTypes);
	const double_damage_from = [];
	const normal_damage_from = [];
	const half_damage_from = [];
	const no_damage_from = [];

	await Promise.all(
		pokemonDataTypes.map(async (item) => {
			const typeInfo = await getTypeEffectiveness(item.type.name);

			typeInfo.damage_relations.double_damage_from.forEach((item) => {
				if (double_damage_from.indexOf(item.name) == -1) {
					double_damage_from.push(item.name);
				}
			});
			typeInfo.damage_relations.half_damage_from.forEach((item) => {
				if (half_damage_from.indexOf(item.name) == -1) {
					half_damage_from.push(item.name);
				}
			});
			typeInfo.damage_relations.no_damage_from.forEach((item) => {
				if (no_damage_from.indexOf(item.name) == -1) {
					no_damage_from.push(item.name);
				}
			});
			typeInfo.damage_relations.no_damage_from.forEach((item) => {
				if (
					normal_damage_from.indexOf(item.name) == -1 &&
					double_damage_from.indexOf(item.name) == -1 &&
					half_damage_from.indexOf(item.name) == -1 &&
					no_damage_from.indexOf(item.name) == -1
				) {
					normal_damage_from.push(item.name);
				}
			});
		})
	);

	pokemonDataTypes.forEach((item) => {
		const typeName = item.type.name;
	  
		if (!double_damage_from.has(typeName) && !half_damage_from.has(typeName) && !no_damage_from.has(typeName)) {
		  normal_damage_from.add(typeName);
		}
	  });

	console.log("double_damage_from: " + double_damage_from);
	console.log("normal_damage_from: " + normal_damage_from);
	console.log("half_damage_from: " + half_damage_from);
	console.log("no_damage_from: " + no_damage_from);

	return (
		<>
			<div className="hero h-full w-full bg-base-200">
				<div className="hero-content w-full lg:flex-row">
					<div className="card flex w-full flex-row bg-base-100 shadow-xl">
						<div className="card-body">
							<h2 className="card-title ">Type effectiveness</h2>
							<h2 className="card-title">Damaged normally by:</h2>
							<h2 className="card-title">Weak to:</h2>
							<h2 className="card-title">Immune to:</h2>
							<h2 className="card-title">Resistant to:</h2>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

async function getTypeInfo(typeName) {
	const typeData = await getTypeEffectiveness(typeName);
	return typeData;
}
