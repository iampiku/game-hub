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

export default function SideNavigation() {
	const iconClasses = "";
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

	function handleListItemClick(item: string) {
		console.log(item);
	}

	return (
		<Accordion
			variant="splitted"
			isCompact
			selectionMode="multiple"
			defaultExpandedKeys={["1"]}
		>
			<AccordionItem
				aria-label="New Releases"
				className="bg-white/50"
				title="New Releases"
				key={1}
				isCompact
			>
				<ItemsList
					listItems={newReleasesItems}
					listTitle="New Releases"
					onAction={handleListItemClick}
				/>
			</AccordionItem>

			<AccordionItem aria-label="Top" title="Top" key={2} isCompact>
				<ItemsList
					listItems={topGames}
					listTitle="Top"
					onAction={handleListItemClick}
				/>
			</AccordionItem>

			<AccordionItem aria-label="PlatForms" title="PlatForms" key={3} isCompact>
				<ItemsList
					listItems={platforms}
					listTitle="PlatForms"
					onAction={handleListItemClick}
				/>
			</AccordionItem>
		</Accordion>
	);
}
