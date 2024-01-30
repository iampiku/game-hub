import SearchLayout from "@/layouts/Search";

import GameInfoContainer from "@/components/GameInfoContainer";

import { gameDetailService } from "@/service";
import { useQuery } from "@tanstack/react-query";

import { GameDetails } from "@/types";

import { useMemo } from "react";
import { useParams } from "react-router-dom";

export default function GameInfo() {
	const { id } = useParams();
	const { data, isLoading, isError } = useQuery({
		queryKey: ["gameDetails"],
		queryFn: ({ signal }) => gameDetailService<GameDetails>(signal, { id }),
	});

	const backGroundClass = useMemo(() => {
		return data
			? {
					backgroundImage: `url(${data.background_image})`,
			  }
			: {};
	}, [data]);

	return (
		<SearchLayout>
			<div className="col-span-12 bg-cover bg-center" style={backGroundClass}>
				<GameInfoContainer
					gameDetails={data ?? null}
					loading={isLoading}
					error={isError}
				/>
			</div>
		</SearchLayout>
	);
}
