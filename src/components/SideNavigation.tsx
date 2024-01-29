import ItemsList from "@/components/ItemsList";
import {
	FaStar,
	FaFire,
	FaPlay,
	FaCalendar,
	FaTrophy,
	FaChartBar,
	FaCrown,
	FaWindows,
	FaPlaystation,
	FaXbox,
	FaApple,
	FaLinux,
	FaAndroid,
	FaGlobe,
	FaMobile,
} from "react-icons/fa";
import { SiNintendo } from "react-icons/si";

import { Accordion, AccordionItem } from "@nextui-org/react";

import { useSearchParams } from "react-router-dom";

import useFetch from "@/hooks/useFetch";
// import useLocalStorage from "@/hooks/useLocalStorage";

import type { ListItem } from "@/types";

type AccordionItems = {
	title: string;
	items: ListItem[];
};

type GenreResponse = {
	count: number;
	results: Array<Genre>;
};

type Genre = {
	id: number;
	name: string;
	image_background: string;
};

export default function SideNavigation() {
	const [filter, setFilter] = useSearchParams();
	const { data } = useFetch<GenreResponse>("/genres");
	// const { setItem, getItem } = useLocalStorage<ListItem>("genres");

	const iconClasses: string = "text-base";

	// function populateGenres() {
	// 	const
	// }

	const genres =
		data?.results.map(({ id, name, image_background }) => ({
			id,
			label: name,
			imageUrl: image_background,
		})) ?? [];

	const newReleasesItems = [
		{
			label: "Last 30 days",
			icon: <FaStar className={iconClasses} />,
		},
		{
			label: "This week",
			icon: <FaFire className={iconClasses} />,
		},
		{
			label: "Next week",
			icon: <FaPlay className={iconClasses} />,
		},
		{
			label: "Release Calender",
			icon: <FaCalendar className={iconClasses} />,
		},
	];
	const topGames = [
		{
			label: "Best of the year",
			icon: <FaTrophy className={iconClasses} />,
		},
		{
			label: "Popular in 2023",
			icon: <FaChartBar className={iconClasses} />,
		},
		{
			label: "All time up 250",
			icon: <FaCrown className={iconClasses} />,
		},
	];
	const platforms = [
		{
			label: "Windows",
			icon: <FaWindows className={iconClasses} />,
		},
		{
			label: "Play Station",
			icon: <FaPlaystation className={iconClasses} />,
		},
		{ label: "Xbox", icon: <FaXbox className={iconClasses} /> },
		{
			label: "Nintendo",
			icon: <SiNintendo className={iconClasses} />,
		},
		{ label: "Linux", icon: <FaLinux className={iconClasses} /> },
		{
			label: "Android",
			icon: <FaAndroid className={iconClasses} />,
		},
		{ label: "Apple", icon: <FaApple className={iconClasses} /> },
		{ label: "Web", icon: <FaGlobe className={iconClasses} /> },
		{
			label: "Phone",
			icon: <FaMobile className={iconClasses} />,
		},
	];

	const accordionItemList: AccordionItems[] = [
		{
			title: "New Releases",
			items: newReleasesItems,
		},
		{
			title: "Top",
			items: topGames,
		},
		{
			title: "Platforms",
			items: platforms,
		},
		{
			title: "Genres",
			items: genres,
		},
	];

	function handleListItemClick(item: ListItem) {
		setFilter({});
		console.log(item);
	}

	return (
		<Accordion
			isCompact
			variant="splitted"
			selectionMode="multiple"
			defaultExpandedKeys={["New Releases"]}
		>
			{accordionItemList.map((accordionItem) => {
				return (
					<AccordionItem
						key={accordionItem.title}
						title={accordionItem.title}
						arial-label={accordionItem.title}
					>
						<ItemsList
							listItems={accordionItem.items}
							onAction={handleListItemClick}
						></ItemsList>
					</AccordionItem>
				);
			})}
		</Accordion>
	);
}
