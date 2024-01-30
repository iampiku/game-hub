import DefaultLayout from "@/layouts/Default";

import GameGrid from "@/components/GameGrid";

import { Games } from "@/types";
import { gameService } from "@/service";

import { useNavigate, useSearchParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

export default function Home() {
	const navigate = useNavigate();
	// const [search] = useSearchParams();

	const { data, isLoading, isError } = useQuery({
		queryKey: ["results"],
		queryFn: ({ signal }) =>
			gameService<{ results: Games[] }>(signal, { page: 1, page_size: 10 }),
	});
	console.log(data);

	function onGameClick(selectedGame: Games) {
		navigate(`game/${selectedGame.id}`);
	}

	return (
		<DefaultLayout>
			{isError && <span>Oops! something went wrong</span>}

			<GameGrid
				games={data?.results ?? []}
				loading={isLoading}
				onGameClick={onGameClick}
			/>
		</DefaultLayout>
	);
}
