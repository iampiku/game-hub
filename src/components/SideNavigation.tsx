import ItemsList from "@/components/ItemsList";
import { FaStar, FaFire, FaPlay, FaCalendar } from "react-icons/fa";

export default function SideNavigation() {
	const newReleasesItems = [
		{
			label: "Last 30 days",
			icon: <FaStar className="text-base text-default-500 " />,
		},
		{
			label: "This week",
			icon: <FaFire className="text-base text-default-500" />,
		},
		{
			label: "Next week",
			icon: <FaPlay className="text-base text-default-500" />,
		},
		{
			label: "Release Calender",
			icon: <FaCalendar className="text-base text-default-500" />,
		},
	];
	return (
		<div className="p-4">
			<ItemsList listItems={newReleasesItems} listTitle="New Releases" />
		</div>
	);
}
