import gameServiceInstance from "@/service";
import { useQueries } from "@tanstack/react-query";

export default function useMenus() {
	return useQueries({
		queries: [
			{
				queryKey: ["developers"],
				refetchOnWindowFocus: false,
				refetchOnMount: false,
				staleTime: 1800000,
				queryFn: ({ signal }) => gameServiceInstance.developerService(signal),
			},
			{
				queryKey: ["genres"],
				refetchOnWindowFocus: false,
				refetchOnMount: false,
				staleTime: 1800000,
				queryFn: ({ signal }) => gameServiceInstance.genreService(signal),
			},
			{
				queryKey: ["publishers"],
				refetchOnWindowFocus: false,
				refetchOnMount: false,
				staleTime: 1800000,
				queryFn: ({ signal }) => gameServiceInstance.publisherService(signal),
			},
			{
				queryKey: ["platforms"],
				refetchOnWindowFocus: false,
				refetchOnMount: false,
				staleTime: 1800000,
				queryFn: ({ signal }) => gameServiceInstance.platformService(signal),
			},
		],
	});
}
