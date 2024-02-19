import DefaultLayout from "@/layouts/Default";

import GameGrid from "@/components/GameGrid";

import { Games } from "@/types";
import { gameService } from "@/service";

import { useSearchParams } from "react-router-dom";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useEffect, useState } from "react";

export default function Home() {
	const queryClient = useQueryClient();
	const [searchParams] = useSearchParams();
	const searchQuery = searchParams.get("query");

	console.log("Home is re-rendering");

	if (searchQuery) queryClient.invalidateQueries({ queryKey: ["games"] });

	const [games, setGames] = useState<Games[]>([]);

	const { data, isLoading, isError } = useQuery({
		queryKey: ["games"],
		queryFn: ({ signal }) =>
			gameService<{ results: Games[] }>(signal, {
				page: 1,
				page_size: 15,
				search: searchQuery ?? "",
			}),
	});

	useEffect(() => {
		setGames(data?.results ?? []);
	}, [data?.results]);

	return (
		<DefaultLayout>
			{isError && <span>Oops! something went wrong</span>}

			<GameGrid games={games} loading={isLoading} />
		</DefaultLayout>
	);
}
