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
		<Card className="min-h-full">
			<CardHeader className="flex gap-2 justify-end">
				<header className="text-2xl md:text-4xl lg:text-6xl uppercase">
					{gameDetails.name_original}
				</header>

				{gameDetails.metacritic !== null && (
					<CriticScore score={gameDetails.metacritic} />
				)}
			</CardHeader>
			<CardBody className="grid gird-cols-1 lg:grid-cols-12">
				<div className="lg:col-span-8">
					<ImageCarousel />
				</div>
				<div className="flex flex-col gap-1 text-sm lg:items-end pb-2 lg:col-span-4 ">
					<header className="text-4xl">About</header>
					<ScrollShadow hideScrollBar className="max-h-[400px] scroll-smooth">
						<p className="pr-2">{gameDetails.description_raw}</p>
					</ScrollShadow>

					{/* <div className="flex gap-2 pb-2">
						<PlatformIcons
							platformNames={gameDetails.parent_platforms.map(
								(p) => p.platform.slug
							)}
						/>
					</div>
					<div className="font-semibold space-y-1">
						<p>
							{gameDetails.released &&
								new Date(gameDetails.released).toLocaleDateString()}
						</p>
						<p>
							{gameDetails.developers
								.map((developer) => developer.name)
								.join(",")}
						</p>
					</div> */}
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
					className="flex justify-center align-middle min-h-screen"
					label="Loading game details..."
				></Spinner>
			)}
			{gameDetails && <GameDetailsCard gameDetails={gameDetails} />}
		</>
	);
}
