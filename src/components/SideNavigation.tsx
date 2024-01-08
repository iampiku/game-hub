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

type ListItem = {
	label: string;
	icon: JSX.Element;
};

type AccordionItems = {
	title: string;
	items: ListItem[];
};

export default function SideNavigation() {
	const iconClasses: string = "text-base";

	const newReleasesItems: ListItem[] = [
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
	const topGames: ListItem[] = [
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
	const platforms: ListItem[] = [
		{
			label: "Windows",
			icon: <FaWindows className={iconClasses} />,
		},
		{
			label: "Play Station",
			icon: <FaPlaystation className={iconClasses} />,
		},
		{
			label: "Xbox",
			icon: <FaXbox className={iconClasses} />,
		},
		{
			label: "Nintendo",
			icon: <SiNintendo className={iconClasses} />,
		},
		{
			label: "Linux",
			icon: <FaLinux className={iconClasses} />,
		},
		{
			label: "Android",
			icon: <FaAndroid className={iconClasses} />,
		},
		{
			label: "Apple",
			icon: <FaApple className={iconClasses} />,
		},
		{
			label: "Web",
			icon: <FaGlobe className={iconClasses} />,
		},
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
	];

	function handleListItemClick(item: string) {
		console.log(item);
	}

	return (
		<Accordion
			isCompact
			variant="splitted"
			selectionMode="multiple"
			defaultExpandedKeys={["0"]}
		>
			{accordionItemList.map((item, key) => {
				return (
					<AccordionItem key={key} arial-label={item.title} title={item.title}>
						<ItemsList
							listItems={item.items}
							onAction={handleListItemClick}
						></ItemsList>
					</AccordionItem>
				);
			})}
		</Accordion>
	);
}
