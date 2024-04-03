import DefaultLayout from "@/layouts/Default";

import GameGrid from "@/components/GameGrid";
import { Pagination } from "@nextui-org/react";

import { Games } from "@/types";
import { gameService } from "@/service";

import useQueryParams from "@/hooks/useQueryParams";
import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "react-router-dom";
import { useEffect, useMemo, useState } from "react";

export default function Home() {
	const [page, setPage] = useState(1);
	const [searchParams] = useSearchParams();
	const [filterParams] = useQueryParams<{ [key: string]: string | number }>(
		"filter"
	);
	const [games, setGames] = useState<Games[]>([]);

	const searchQuery = searchParams.get("query");

	const apiParams = useMemo(() => {
		let params: { [key: string]: string | number } = {};

		params["page"] = page;
		params["page_size"] = 15;
		if (searchQuery) params["search"] = searchQuery;
		if (filterParams) params = { ...params, ...filterParams };

		return params;
	}, [page, searchQuery, filterParams]);

	const { data, isLoading, isError } = useQuery({
		queryKey: ["games", apiParams],
		queryFn: ({ signal }) =>
			gameService<{ results: Games[]; count: number }>(signal, apiParams),
	});

	const handlePagination = (page: number) => setPage(page);

	useEffect(() => {
		setGames(data?.results ?? []);
	}, [data?.results]);

	return (
		<DefaultLayout>
			{isError && <span>Oops! something went wrong</span>}

			<GameGrid games={games} loading={isLoading} />

			<footer className="flex justify-center pt-4">
				<Pagination
					isCompact
					showControls
					initialPage={1}
					page={page}
					onChange={handlePagination}
					total={data?.count ?? 0}
				></Pagination>
			</footer>
		</DefaultLayout>
	);
}
