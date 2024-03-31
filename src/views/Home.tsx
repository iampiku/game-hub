import DefaultLayout from "@/layouts/Default";

import GameGrid from "@/components/GameGrid";

import { Games } from "@/types";
import { gameService } from "@/service";

import { useSearchParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useMemo, useState } from "react";
import { Pagination } from "@nextui-org/react";

export default function Home() {
	const [page, setPage] = useState(1);
	const [searchParams] = useSearchParams();
	const [games, setGames] = useState<Games[]>([]);

	const genreQuery = searchParams.get("genres");
	const searchQuery = searchParams.get("query");
	const platformQuery = searchParams.get("platforms");

	const apiParams = useMemo(() => {
		const params: { [key: string]: string | number } = {};

		params["page"] = page;
		params["page_size"] = 15;
		if (genreQuery) params["genres"] = genreQuery;
		if (searchQuery) params["search"] = searchQuery;
		if (platformQuery) params["parent_platform"] = platformQuery;

		return params;
	}, [page, genreQuery, searchQuery, platformQuery]);

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
