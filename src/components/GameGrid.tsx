import type { Games } from "@/types";

import { Link } from "react-router-dom";
import GameCard from "@/components/GameCard";
import GameCardSkeleton from "@/components/loaders/GameCardSkeleton";

interface Props {
	games: Games[];
	loading: boolean;
}

const LOADER_CARD_COUNT = 8;

export default function GameGrid({ games, loading }: Readonly<Props>) {
	const CardSkeletonLoader = (): Array<JSX.Element> => {
		let counter = 0;
		const Cards: Array<JSX.Element> = [];
		while (counter < LOADER_CARD_COUNT) {
			Cards.push(<GameCardSkeleton key={counter} />);
			counter++;
		}
		return Cards;
	};

	return (
		<div className="xl:columns-4 lg:columns-3 md:columns-2 columns-1 gap-3">
			{loading && CardSkeletonLoader()}
			{games.map((game) => {
				return (
					<Link to={`game/${game.id}`} key={game.id}>
						<GameCard game={game} />
					</Link>
				);
			})}
		</div>
	);
}
