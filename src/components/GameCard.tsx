import type { Games } from "@/types";

import { Card, CardBody, CardHeader, Image } from "@nextui-org/react";

import RatingEmoji from "@/components/RatingEmoji";
import CriticScore from "@/components/CriticScore";
import PlatformIcons from "@/components/PlatformIcons";

interface Props {
	game: Games;
}

export default function GameCard({ game }: Readonly<Props>) {
	const platformNames = game.parent_platforms.map(
		({ platform }) => platform.slug
	);

	return (
		<Card
			isHoverable
			isBlurred
			isPressable
			className="my-2 shadow-lg mb-4 bg-white/10 lg:max-w-[480px]"
		>
			<CardHeader>
				<Image
					isZoomed
					isBlurred
					loading={"lazy"}
					alt="game_poster"
					src={game.background_image}
				></Image>
			</CardHeader>
			<CardBody>
				<div className="flex flex-wrap justify-between gap-2 pb-3">
					<div className="flex gap-2 text-xl">
						<PlatformIcons platformNames={platformNames} />
					</div>
					<CriticScore score={game.metacritic} />
				</div>
				<p className="font-semibold text-2xl">
					<span className="pr-2">{game.name}</span>
					<RatingEmoji rating={game.rating_top} />
				</p>
			</CardBody>
		</Card>
	);
}
