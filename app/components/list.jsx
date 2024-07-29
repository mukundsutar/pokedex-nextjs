import Link from "next/link";
import React from "react";

export default function List({ pokemonList }) {
  return (
    <>
      <label
        htmlFor="my-drawer-2"
        aria-label="close sidebar"
        className="drawer-overlay"
      ></label>
      <ul className="menu min-h-full w-80 bg-base-200 p-4 text-base-content">
        {/* Sidebar content here */}
        <li className="sticky top-4 z-10">
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-[95%] max-w-xs"
          />
        </li>
        {pokemonList &&
          pokemonList.map((item, index) => (
            <li key={index}>
              <Link href={item.pokemon_species.name} className="uppercase">
                {item.pokemon_species.name}
              </Link>
            </li>
          ))}
      </ul>
    </>
  );
}
