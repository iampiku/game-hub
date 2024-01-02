import type { Games } from "@/types";
import GameCard from "./GameCard";

interface Props {
	games: Games[];
}

export default function GameGrid({ games }: Readonly<Props>) {
	return (
		<div className="columns-1 lg:columns-2 xl:columns-3 gap-4 mr-10">
			{games.map((game) => {
				return <GameCard key={game.id} game={game} />;
			})}
		</div>
	);
}
