import type { Games } from "@/types";

import GameCard from "@/components/GameCard";
import GameCardSkeleton from "@/components/loaders/GameCardSkeleton";

interface Props {
	games: Games[];
	loading: boolean;
	onGameClick: (selectedGame: Games) => void;
}

export default function GameGrid({
	games,
	loading,
	onGameClick,
}: Readonly<Props>) {
	const cardCount = 6;

	const CardSkeletonLoader = (): Array<JSX.Element> => {
		let counter = 0;
		const Cards: Array<JSX.Element> = [];
		while (counter < cardCount) {
			Cards.push(<GameCardSkeleton key={counter} />);
			counter++;
		}
		return Cards;
	};

	return (
		<div className="lg:columns-4 md:columns-3 sm:columns-2 columns-1 gap-3">
			{loading && CardSkeletonLoader()}
			{games.map((game) => {
				return <GameCard key={game.id} game={game} onCardClick={onGameClick} />;
			})}
		</div>
	);
}
