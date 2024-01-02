import TopBar from "@/components/TopBar";
import GameGrid from "@/components/GameGrid";
import SideNavigation from "@/components/SideNavigation";

import { results } from "../../apiResponse.json";

export default function Home() {
	return (
		<>
			<main className="w-full pb-10">
				<TopBar />
				<div className="grid grid-cols-1 lg:grid-cols-12">
					<div className="col-span-2">
						<SideNavigation />
					</div>
					<section className="col-span-10">
						<GameGrid games={results} />
					</section>
				</div>
			</main>
			<footer></footer>
		</>
	);
}
