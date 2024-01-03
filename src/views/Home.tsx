import TopBar from "@/components/TopBar";
import GameGrid from "@/components/GameGrid";
import SideNavigation from "@/components/SideNavigation";

// import { results } from "../../apiResponse.json";
import useFetch from "@/hooks/useFetch";

import type { Games } from "@/types";

export default function Home() {
	const { data } = useFetch("/games");
	console.log(data);
	const games = data?.results ? (data.results as Games[]) : [];
	return (
		<>
			<main className="w-full">
				<TopBar />
				<div className="grid grid-cols-1 lg:grid-cols-12 my-4 gap-1 px-6">
					<div className="col-span-2">
						<SideNavigation />
					</div>
					<section className="col-span-10">
						<GameGrid games={games} />
					</section>
				</div>
			</main>
			<footer></footer>
		</>
	);
}
