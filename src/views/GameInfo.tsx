import SearchLayout from "@/layouts/Search";

import GameInfoContainer from "@/components/GameInfoContainer";

import { gameDetailService } from "@/service";
import { useQuery } from "@tanstack/react-query";

import { GameDetails } from "@/types";

import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function GameInfo() {
	const { id } = useParams();
	const [gameDetails, setGameDetails] = useState<GameDetails | null>(null);

	const { data, isLoading, isError } = useQuery({
		queryKey: ["gameDetails"],
		queryFn: ({ signal }) => gameDetailService<GameDetails>(signal, { id }),
	});

	useEffect(() => {
		if (data) setGameDetails(data);
	}, [data]);

	return (
		<SearchLayout>
			<div className="col-span-12 mb-10 mt-3">
				<GameInfoContainer
					error={isError}
					loading={isLoading}
					gameDetails={gameDetails ?? null}
				/>
			</div>
		</SearchLayout>
	);
}
