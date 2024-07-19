import { Inter } from "next/font/google";
import "./globals.css";
import List from "./components/list";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
	title: "Master Pokedex",
	description: "made by Mukund Sutar",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<div className="drawer lg:drawer-open">
					{/* toggle checkbox */}
					<input
						id="my-drawer-2"
						type="checkbox"
						className="drawer-toggle"
					/>

					{/* page content */}
					<div className="drawer-content flex flex-col items-center ">
						{children}
					</div>

					{/* sidebar */}
					<div className="drawer-side drawer-open">
						<List />
					</div>
				</div>
			</body>
		</html>
	);
}
