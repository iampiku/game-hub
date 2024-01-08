import type { Games } from "@/types";

import GameCard from "@/components/GameCard";

interface Props {
	games: Games[];
}

export default function GameGrid({ games }: Readonly<Props>) {
	return (
		<div className="columns-1 md:columns-2 lg:columns-3 gap-3">
			{games.map((game) => {
				return <GameCard key={game.id} game={game} />;
			})}
		</div>
	);
}
