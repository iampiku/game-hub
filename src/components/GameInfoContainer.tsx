import {
	Card,
	CardBody,
	CardHeader,
	Spinner,
	ScrollShadow,
} from "@nextui-org/react";

import { GameDetails } from "@/types";

import CriticScore from "./CriticScore";
import PlatformIcons from "./PlatformIcons";
import ImageCarousel from "./ImageCarousel";

interface Props {
	gameDetails: GameDetails | null;
	loading: boolean;
	error: boolean;
}

function GameDetailsCard({
	gameDetails,
}: Readonly<{ gameDetails: GameDetails }>) {
	return (
		<Card isBlurred className="h-full">
			<CardHeader className="flex gap-2 justify-end">
				<header className="font-sans text-3xl uppercase">
					{gameDetails.name_original}
				</header>
				{gameDetails.metacritic !== null && (
					<CriticScore score={gameDetails.metacritic} />
				)}
			</CardHeader>
			<CardBody className="grid grid-cols-12 w-full ">
				<div className="col-span-8 h-full">
					<ImageCarousel />
				</div>
				<div className="flex flex-col gap-1 items-end pb-2 col-span-4 h-full">
					<div className="flex gap-2 pb-2">
						<PlatformIcons
							platformNames={gameDetails.parent_platforms.map(
								(p) => p.platform.slug
							)}
						/>
					</div>
					<div className="flex flex-col text-right">
						{gameDetails.released &&
							new Date(gameDetails.released).toLocaleDateString()}
						<span>
							{gameDetails.developers.map((developer) => {
								return <span key={developer.id}>{developer.name}</span>;
							})}
						</span>
					</div>
					<ScrollShadow className="max-w-[360px] max-h-[300px] scroll-smooth">
						<p className="text-right pr-2">{gameDetails.description_raw}</p>
					</ScrollShadow>
				</div>
			</CardBody>
		</Card>
	);
}

/**
 * Renders the game information based on the provided game details, loading status, and error.
 * @param {Readonly<Props>} gameDetails - The details of the game to be displayed.
 * @return {JSX.Element} The JSX element representing the rendered game information.
 */
export default function GameInfo({
	gameDetails,
	loading,
	error,
}: Readonly<Props>): JSX.Element {
	return (
		<>
			{error && <p>Oops! something went wrong</p>}
			{loading && (
				<Spinner
					size="lg"
					className="flex justify-center align-middle min-h-full"
					label="Loading game details..."
				></Spinner>
			)}
			{gameDetails && <GameDetailsCard gameDetails={gameDetails} />}
		</>
	);
}
