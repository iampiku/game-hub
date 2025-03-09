import gameServiceInstance from "@/service";
import { Games, Params } from "@/types";
import { useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";

export default function useGame(params: Params) {
	return useQuery<Games | undefined, AxiosError>({
		queryKey: ["games", params],
		refetchOnWindowFocus: false,
		queryFn: ({ signal }) => gameServiceInstance.gameService(signal, params),
	});
}
