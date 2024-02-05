import SearchLayout from "@/layouts/Search";

import GameInfoContainer from "@/components/GameInfoContainer";

import { gameDetailService } from "@/service";
import { useQuery } from "@tanstack/react-query";

import { GameDetails } from "@/types";

import { useMemo, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Card, CardBody } from "@nextui-org/react";

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

	const backGroundStyle = useMemo(() => {
		return gameDetails
			? { backgroundImage: `url(${gameDetails.background_image})` }
			: {};
	}, [gameDetails]);

	return (
		<SearchLayout>
			<Card
				style={backGroundStyle}
				className="col-span-12 bg-cover bg-center bg-gradient-to-t from-zinc-900 to-zinc-600 z-10 mb-10"
			>
				<CardBody>
					<GameInfoContainer
						error={isError}
						loading={isLoading}
						gameDetails={gameDetails ?? null}
					/>
				</CardBody>
			</Card>
		</SearchLayout>
	);
}
