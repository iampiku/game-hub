import { screenshotService } from "@/service";

import { useQuery } from "@tanstack/react-query";

export default function useGameScreenshots(gameId: string | null) {
	const { data, isLoading, isError } = useQuery({
		queryKey: ["screenshots"],
		queryFn: ({ signal }) =>
			screenshotService<{ results: { id: number; image: string }[] }>(signal, {
				game_pk: gameId,
			}),
	});
	const gameScreenshots =
		data?.results.map(({ id, image }) => ({ id, image })) ?? [];

	return {
		isLoading,
		isError,
		gameScreenshots,
	};
}
