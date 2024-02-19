import { Games } from "@/types";

import { gameService } from "@/service";

import { useMemo } from "react";
import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "react-router-dom";

export default function useGame() {
	const [searchParams] = useSearchParams();
	const searchQuery = searchParams.get("query");

	const apiParams = useMemo(() => {
		return searchQuery
			? { page: 1, page_size: 15, search: searchQuery }
			: { page: 1, page_size: 15 };
	}, [searchQuery]);

	const { data, isLoading, isError } = useQuery({
		queryKey: ["games"],
		queryFn: ({ signal }) =>
			gameService<{ results: Games[] }>(signal, apiParams),
	});

	return {
		data,
		isError,
		isLoading,
	};
}
