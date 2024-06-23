import { useState } from "react";

import { GameDetails } from "@/types";

import {
	Card,
	CardHeader,
	Button,
	CardBody,
	ScrollShadow,
	CardFooter,
	Accordion,
	AccordionItem,
	Link,
} from "@nextui-org/react";

import { FaArrowLeft } from "react-icons/fa";
import ShowError from "./utilComponents/ShowError";
import Carousel from "@/components/carousel/Carousel";
import CriticScore from "@/components/utilComponents/CriticScore";
import PlatformIcons from "@/components/utilComponents/PlatformIcons";

interface GameInfoProps {
	screenshotsLoading: boolean;
	gameInfo: GameDetails | null;
	gameScreenshots: { id: number; image: string }[];
}

export default function GameInfoCard({
	gameInfo,
	gameScreenshots,
	screenshotsLoading,
}: Readonly<GameInfoProps>) {
	const [showMoreInfo, setShowMoreInfo] = useState(true);

	const onSelectionChange = () => setShowMoreInfo(!showMoreInfo);

	if (!gameInfo) return <ShowError errorCode={404}></ShowError>;

	const {
		genres,
		website,
		released,
		metacritic,
		developers,
		publishers,
		description,
		name_original,
		description_raw,
		parent_platforms,
	} = gameInfo;

	const releaseDate = !released
		? null
		: new Date(released).toLocaleDateString();

	return (
		<Card>
			<CardHeader className="flex justify-between px-6 my-2">
				<Link href="/">
					<Button isIconOnly variant="shadow" color="primary" size="sm">
						<FaArrowLeft />
					</Button>
				</Link>
				<header className="text-lg sm:text-2xl md:text-4xl lg:text-5xl uppercase flex items-center gap-2">
					<Link
						isExternal
						href={website}
						className="text-lg sm:text-2xl md:text-4xl lg:text-5xl"
					>
						{name_original}
					</Link>

					{!!metacritic && <CriticScore score={metacritic} />}
				</header>
			</CardHeader>
			<CardBody className="grid gird-cols-1 gap-2 lg:grid-cols-12">
				<div className="lg:col-span-8 mt-[3px]">
					<Carousel slides={gameScreenshots} loading={screenshotsLoading} />
				</div>

				<Card className="lg:col-span-4 max-h-[600px]" isFooterBlurred isBlurred>
					<CardHeader>
						<header className="text-4xl">About</header>
					</CardHeader>

					<CardBody>
						<ScrollShadow hideScrollBar className="scroll-smooth max-h-[300px]">
							{!description_raw.length ? (
								<p dangerouslySetInnerHTML={{ __html: description }}></p>
							) : (
								<p className="pr-2">{description_raw}</p>
							)}
						</ScrollShadow>
					</CardBody>

					<CardFooter>
						<Accordion
							isCompact
							defaultExpandedKeys={["1"]}
							onSelectionChange={onSelectionChange}
						>
							<AccordionItem
								key="1"
								title={showMoreInfo ? "Close" : "Show More"}
								aria-label={showMoreInfo ? "Close" : "Show More"}
							>
								<div className="space-y-2">
									<p>
										<span className="font-semibold">Released: </span>
										{releaseDate}
									</p>
									<p>
										<span className="font-semibold">Developer: </span>
										{developers.map(({ name }) => name).join(", ")}
									</p>
									<p>
										<span className="font-semibold">Publishers: </span>
										{publishers.map((publisher) => publisher.name).join(", ")}
									</p>
									<p>
										<span className="font-semibold">Genres: </span>
										{genres.map((genre) => genre.name).join(", ")}
									</p>
								</div>
								<div className="flex gap-2 py-2">
									<span className="font-semibold pt-[2px]">Platforms: </span>
									<PlatformIcons
										platformNames={parent_platforms.map((p) => p.platform.slug)}
									/>
								</div>
							</AccordionItem>
						</Accordion>
					</CardFooter>
				</Card>
			</CardBody>
		</Card>
	);
}
