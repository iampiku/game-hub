import SearchLayout from "@/layouts/Search";

import { useParams } from "react-router-dom";
import useGame from "@/hooks/useGames";

import { Spinner } from "@nextui-org/react";
import GameInfoCard from "@/components/GameInfoCard";
import useGameScreenshots from "@/hooks/useGameScreenshots";

export default function GameInfo() {
	const { id } = useParams();
	const gameId = id ?? null;

	const { isError, isLoading, gameData } = useGame(gameId);
	const { isLoading: screenshotLoading, gameScreenshots } =
		useGameScreenshots(gameId);

	return (
		<SearchLayout>
			<div className="col-span-12">
				{isError && <p>Oops something went wrong.</p>}
				{isLoading && (
					<Spinner
						size="lg"
						className="flex justify-center align-middle min-h-screen"
						label="Loading game details..."
					></Spinner>
				)}
				<GameInfoCard
					gameInfo={gameData.gameDetails}
					gameScreenshots={gameScreenshots}
					screenshotsLoading={screenshotLoading}
				/>
			</div>
		</SearchLayout>
	);
}
