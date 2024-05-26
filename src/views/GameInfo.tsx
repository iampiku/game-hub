import SearchLayout from "@/layouts/Search";

import GameInfoContainer from "@/components/GameInfoContainer";

import { useParams } from "react-router-dom";
import useGame from "@/hooks/useGames";

export default function GameInfo() {
	const { id } = useParams();

	const gameId = id ?? null;
	const { isError, isLoading, gameData } = useGame(gameId);

	return (
		<SearchLayout>
			<div className="col-span-12 mb-10 mt-3">
				{gameData?.gameDetails && (
					<GameInfoContainer
						error={isError}
						loading={isLoading}
						gameDetails={gameData.gameDetails}
					/>
				)}
			</div>
		</SearchLayout>
	);
}
