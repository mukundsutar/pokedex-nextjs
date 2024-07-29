"use client";
import React, { useEffect, useState } from "react";
import typeEffectivenessData from "../api/typeEffectivenessData.json";
import clsx from "clsx";
import TypeEffectivenessRow from "./TypeEffectivenessRow";

export default function TypeEffectiveness({ pokemonDataTypes }) {
  const [doubleDamageFrom, setDoubleDamageFrom] = useState([]);
  const [normalDamageFrom, setNormalDamageFrom] = useState([]);
  const [halfDamageFrom, setHalfDamageFrom] = useState([]);
  const [noDamageFrom, setNoDamageFrom] = useState([]);

  useEffect(() => {
    const double_damage_from = [];
    const normal_damage_from = [];
    const half_damage_from = [];
    const no_damage_from = [];

    // Helper function to calculate damage multiplier for a type
    const calculateEffectiveness = (type) => {
      let effectiveness = 1;
      pokemonDataTypes.forEach((pokemonType) => {
        const typeName = pokemonType.type.name;
        effectiveness *= typeEffectivenessData[type][typeName] || 1;
      });
      return effectiveness;
    };

    // Calculate effectiveness for all types
    Object.keys(typeEffectivenessData).forEach((type) => {
      const effectiveness = calculateEffectiveness(type);
      if (effectiveness === 2) double_damage_from.push(type);
      else if (effectiveness === 1) normal_damage_from.push(type);
      else if (effectiveness === 0.5) half_damage_from.push(type);
      else if (effectiveness === 0) no_damage_from.push(type);
    });

    setDoubleDamageFrom(double_damage_from);
    setNormalDamageFrom(normal_damage_from);
    setHalfDamageFrom(half_damage_from);
    setNoDamageFrom(no_damage_from);
  }, [pokemonDataTypes]);

  return (
    <div className="hero h-full w-full bg-base-200">
      <div className="hero-content w-full lg:flex-row">
        <div className="card flex w-full flex-row bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">Type effectiveness</h2>
            <div>
              <h2 className="card-title">Damaged normally by (1x):</h2>
              <div className="flex flex-wrap">
                <TypeEffectivenessRow typeArray={normalDamageFrom} />
              </div>
            </div>
            <div>
              <h2 className="card-title">Weak to (2x):</h2>
              <div className="flex flex-wrap">
                <TypeEffectivenessRow typeArray={doubleDamageFrom} />
              </div>
            </div>
            <div>
              <h2 className="card-title">Immune to:</h2>
              <div className="flex flex-wrap">
                <TypeEffectivenessRow typeArray={noDamageFrom} />
              </div>
            </div>
            <div>
              <h2 className="card-title">Resistant to (½ˣ):</h2>
              <div className="flex flex-wrap">
                <TypeEffectivenessRow typeArray={halfDamageFrom} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
