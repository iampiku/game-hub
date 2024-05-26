import { GameDetails, Games } from "@/types";

import { gameService } from "@/service";

import { useMemo, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "react-router-dom";
import useQueryParams from "@/hooks/useQueryParams";

type GameList = { results: Games[]; count: number };
type GameState = {
	games: Games[];
	totalGames: number | null;
	gameDetails: GameDetails | null;
};
const initialGameState: GameState = {
	games: [],
	totalGames: null,
	gameDetails: null,
} as const;

export default function useGame(id: null | string) {
	const [page, setPage] = useState(1);
	const [searchParams] = useSearchParams();
	const searchQuery = searchParams.get("query");
	const [filterParams] = useQueryParams<{ [key: string]: string | number }>(
		"filter"
	);

	const apiParams = useMemo(() => {
		let params: { [key: string]: string | number } = {
			page_size: 16,
		};

		params["page"] = page;
		if (id) params["id"] = id;
		if (searchQuery) params["search"] = searchQuery;
		if (filterParams) params = { ...params, ...filterParams };

		return params;
	}, [page, searchQuery, filterParams, id]);

	const { data, isLoading, isError } = useQuery({
		queryKey: ["games", apiParams],
		queryFn: ({ signal }) =>
			gameService<GameList | GameDetails | null>(signal, apiParams),
	});

	const gameData: GameState = useMemo(() => {
		if (!data)
			return {
				...initialGameState,
			};

		if ("results" in data && "count" in data)
			return {
				...initialGameState,
				games: data.results,
				totalGames: data.count,
			};
		else return { ...initialGameState, gameDetails: data };
	}, [data]);

	return {
		page,
		setPage,
		isError,
		gameData,
		isLoading,
	};
}
