import { permanentRedirect } from "next/navigation";
import Pokemon from "./[pokemon]/page";

export default async function Home() {
  permanentRedirect("bulbasaur", "replace");

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Pokemon />
    </main>
  );
}
