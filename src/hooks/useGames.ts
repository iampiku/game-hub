import gameServiceInstance from "@/service";

import { AxiosError } from "axios";
import { GameResponse, Params } from "@/types";

import { formatNumber } from "@/utils";

import { useQuery } from "@tanstack/react-query";

type GameResponseWithCount = GameResponse & {
	totalGameCountInLong: string;
	totalGameCountInShort: string;
};

function useGetGames(params: Partial<Params>) {
	return useQuery<
		GameResponse | undefined,
		AxiosError,
		GameResponseWithCount | undefined
	>({
		queryKey: ["games", params],
		refetchOnWindowFocus: false,
		queryFn: ({ signal }) => gameServiceInstance.gameService(signal, params),
		select: (gameResponse) => {
			if (!gameResponse) return undefined;
			const totalGames = gameResponse.count;
			const totalGameCountInLong = formatNumber({
				value: totalGames,
				notation: "standard",
				compactDisplay: "long",
			});
			const totalGameCountInShort = formatNumber({
				value: totalGames,
			});

			return {
				...gameResponse,
				totalGameCountInLong,
				totalGameCountInShort,
			};
		},
	});
}

function useGetGameDetails(gameId: string | undefined) {
	return useQuery({
		queryKey: ["game-details", gameId],
		enabled: Boolean(gameId),
		queryFn: ({ signal }) =>
			gameServiceInstance.gameDetailsService(signal, gameId ?? ""),
	});
}

export { useGetGames, useGetGameDetails };
