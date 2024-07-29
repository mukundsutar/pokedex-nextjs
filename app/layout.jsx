import { Inter } from "next/font/google";
import "./globals.css";
import List from "./components/List";
import { getPokemonList } from "./api/apiRequests";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Master Pokedex",
  description: "made by Mukund Sutar",
};

export default async function RootLayout({ children }) {
  const data = await getPokemonList();
  const pokemonList = data.pokemon_entries;

  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="drawer lg:drawer-open">
          {/* toggle checkbox */}
          <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />

          {/* page content */}
          <div className="drawer-content flex flex-col items-center">
            {children}
          </div>

          {/* sidebar */}
          <div className="drawer-side drawer-open">
            <List pokemonList={pokemonList} />
          </div>
        </div>
      </body>
    </html>
  );
}
