import clsx from "clsx";
import React from "react";

export default function TypeEffectivenessRow({ typeArray }) {
  return (
    <>
      {typeArray.length > 0 ? (
        typeArray.map((type) => (
          <div
            key={type}
            className={clsx("badge m-1 uppercase text-black", {
              "bg-normal": type === "normal",
              "bg-fire": type === "fire",
              "bg-water": type === "water",
              "bg-electric": type === "electric",
              "bg-grass": type === "grass",
              "bg-ice": type === "ice",
              "bg-fighting": type === "fighting",
              "bg-poison": type === "poison",
              "bg-ground": type === "ground",
              "bg-flying": type === "flying",
              "bg-psychic": type === "psychic",
              "bg-bug": type === "bug",
              "bg-rock": type === "rock",
              "bg-ghost": type === "ghost",
              "bg-dragon": type === "dragon",
              "bg-dark": type === "dark",
              "bg-steel": type === "steel",
              "bg-fairy": type === "fairy",
            })}
          >
            {type}
          </div>
        ))
      ) : (
        <div className="badge m-1">None</div>
      )}
    </>
  );
}
