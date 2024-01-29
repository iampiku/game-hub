/* eslint-disable no-mixed-spaces-and-tabs */
import { Card } from "@nextui-org/react";

import { useEffect, useState } from "react";

import { GameDetails } from "@/types";

import useFetch from "@/hooks/useFetch";

interface Props {
	gameId: string;
}

import ImageCarousel from "./ImageCarousel";

export default function GameInfo({ gameId }: Readonly<Props>) {
	const [gameDetails, setGameDetails] = useState<GameDetails | null>(null);

	const endPoint = gameId ? `/games/${gameId}` : "";
	const { data } = useFetch<GameDetails>(endPoint);

	const { data: response } = useFetch<{
		count: number;
		results: { id: number; image: string }[];
	}>(`/games/${gameId}/screenshots`);

	const gameScreenShots = !response
		? []
		: response.results.map((screenshot) => ({
				id: screenshot.id,
				src: screenshot.image,
				alt: "screenShot",
		  }));

	useEffect(() => {
		if (data) setGameDetails(data);
	}, [data]);

	if (gameDetails) {
		return (
			<Card isBlurred isFooterBlurred className="mx-w-full border-none">
				<ImageCarousel imageItems={gameScreenShots}></ImageCarousel>
			</Card>
		);
	} else {
		return <div>No details found</div>;
	}
}
