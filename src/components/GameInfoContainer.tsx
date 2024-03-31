import {
	Card,
	CardBody,
	CardHeader,
	CardFooter,
	Accordion,
	AccordionItem,
	Spinner,
	ScrollShadow,
	Divider,
	Button,
	// Chip,
} from "@nextui-org/react";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import CriticScore from "./CriticScore";
import PlatformIcons from "./PlatformIcons";
import ImageCarousel from "./ImageCarousel";

import { GameDetails } from "@/types";
interface Props {
	gameDetails: GameDetails | null;
	loading: boolean;
	error: boolean;
}

import { useMemo, useState } from "react";

function GameDetailsCard({
	gameDetails,
}: Readonly<{ gameDetails: GameDetails }>) {
	const [showMoreInfo, setShowMoreInfo] = useState(false);

	const onSelectionChange = () => setShowMoreInfo(!showMoreInfo);

	const {
		website,
		released,
		metacritic,
		developers,
		name_original,
		description_raw,
		parent_platforms,
	} = gameDetails;

	const releaseDate = useMemo(() => {
		if (!released) return null;
		return new Date(released).toLocaleDateString();
	}, [released]);

	return (
		<Card className="min-h-full">
			<CardHeader className="flex justify-between px-6 my-2">
				<Link to="/">
					<Button isIconOnly variant="shadow" color="primary" size="sm">
						<FaArrowLeft />
					</Button>
				</Link>
				<header className="text-2xl md:text-4xl lg:text-5xl uppercase flex items-center gap-2">
					<Link to={website}>{name_original}</Link>

					{metacritic !== null && <CriticScore score={metacritic} />}
				</header>
			</CardHeader>
			<CardBody className="grid gird-cols-1 gap-2 lg:grid-cols-12">
				<div className="lg:col-span-8">
					<ImageCarousel />
				</div>

				<Card className="lg:col-span-4 " isFooterBlurred isBlurred>
					<CardHeader>
						<header className="text-4xl">About</header>
					</CardHeader>
					<Divider></Divider>
					<CardBody>
						<ScrollShadow hideScrollBar className="scroll-smooth">
							<p className="pr-2">{description_raw}</p>
						</ScrollShadow>
					</CardBody>
					<Divider></Divider>
					<CardFooter>
						<Accordion isCompact onSelectionChange={onSelectionChange}>
							<AccordionItem
								title={showMoreInfo ? "Close" : "Show More"}
								aria-label={showMoreInfo ? "Close" : "Show More"}
							>
								<div className="font-semibold space-y-1">
									<p>{releaseDate}</p>
									<p>{developers.map(({ name }) => name).join(", ")}</p>
								</div>
								<div className="flex gap-2 py-2">
									<PlatformIcons
										platformNames={parent_platforms.map((p) => p.platform.slug)}
									/>
								</div>
								{/* <div className="flex flex-wrap gap-2">
									{tags.map(({ name, id }) => {
										return (
											<Chip size="sm" key={id} color="primary" variant="shadow">
												{name}
											</Chip>
										);
									})}
								</div> */}
							</AccordionItem>
						</Accordion>
					</CardFooter>
				</Card>
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
