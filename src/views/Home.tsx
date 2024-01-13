import DefaultLayout from "@/layouts/Default";
import GameCardSkeleton from "@/components/loaders/GameCardSkeleton";
import GameGrid from "@/components/GameGrid";

import { results } from "../../apiResponse.json";
// import useFetch from "@/hooks/useFetch";

// import type { Games } from "@/types";

export default function Home() {
	// const { data } = useFetch("/games");
	// const games = data?.results ? (data.results as Games[]) : [];
	return (
		<DefaultLayout>
			<GameGrid games={results} loading={false} />
		</DefaultLayout>
	);
}
