import gameServiceInstance from "@/service";

import { useQuery } from "@tanstack/react-query";

export default function useGameScreenshots(gameId: string | null) {
	return useQuery({
		enabled: Boolean(gameId),
		queryKey: ["screenShots", gameId],
		queryFn: ({ signal }) =>
			gameServiceInstance.gameScreenShotService(signal, {
				game_pk: gameId ?? "",
			}),
	});
}
