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

	const searchQuery = searchParams.get("query");

	const apiParams = useMemo(() => {
		let params: { [key: string]: string | number } = {};

		params["page"] = page;
		params["page_size"] = 16;
		if (searchQuery) params["search"] = searchQuery;
		if (filterParams) params = { ...params, ...filterParams };

		return params;
	}, [page, searchQuery, filterParams]);

	const { data, isLoading, isError } = useQuery({
		queryKey: ["games", apiParams],
		queryFn: ({ signal }) =>
			gameService<{ results: Games[]; count: number }>(signal, apiParams),
	});

	// const { data: developers } = useQuery({
	// 	queryKey: ["developer"],
	// 	queryFn: ({ signal }) => developerService(signal),
	// });

	// console.log(developers);

	const handlePagination = (currentPage: number) => {
		if (currentPage === page) return;
		else setPage(currentPage);
	};

	return (
		<DefaultLayout>
			{isError && <span>Oops! something went wrong</span>}

			<GameGrid games={data?.results || []} loading={isLoading} />

			<footer className="flex justify-center pt-6">
				<Pagination
					page={page}
					initialPage={1}
					total={data?.count ?? 0}
					onChange={handlePagination}
				></Pagination>
			</footer>
		</DefaultLayout>
	);
}
