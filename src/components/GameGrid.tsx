import type { Games } from "@/types";

import GameCard from "@/components/GameCard";
import GameCardSkeleton from "@/components/loaders/GameCardSkeleton";

interface Props {
	games: Games[];
	loading: boolean;
}

export default function GameGrid({ games, loading }: Readonly<Props>) {
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
		<div className="columns-1 md:columns-2 lg:columns-3">
			{loading && CardSkeletonLoader()}
			{games.map((game) => {
				return <GameCard key={game.id} game={game} />;
			})}
		</div>
	);
}
