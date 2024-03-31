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

import useFetch from "@/hooks/useFetch";
import { useEffect, useState, useMemo } from "react";

import type { MenuList, GenreMenu, Genre } from "@/types";

type AccordionItems = {
	title: string;
	items: MenuList[];
};

type GenreResponse = {
	count: number;
	results: Array<Genre>;
};

export default function SideNavigation() {
	const [menus, setMenus] = useState<MenuList[]>([
		{
			_selected: false,
			label: "Last 30 days",
			type: "menu",
			menuType: "newRelease",
			icon: <FaStar className={"text-base"} />,
		},
		{
			_selected: false,
			label: "This week",
			type: "menu",
			menuType: "newRelease",
			icon: <FaFire className={"text-base"} />,
		},
		{
			_selected: false,
			label: "Next week",
			type: "menu",
			menuType: "newRelease",
			icon: <FaPlay className={"text-base"} />,
		},
		{
			_selected: false,
			label: "Release Calender",
			type: "menu",
			menuType: "newRelease",
			icon: <FaCalendar className={"text-base"} />,
		},
		{
			_selected: false,
			label: "Best of the year",
			type: "menu",
			menuType: "topGames",
			icon: <FaTrophy className={"text-base"} />,
		},
		{
			_selected: false,
			label: "Popular in 2023",
			type: "menu",
			menuType: "topGames",
			icon: <FaChartBar className={"text-base"} />,
		},
		{
			_selected: false,
			label: "All time up 250",
			type: "menu",
			menuType: "topGames",
			icon: <FaCrown className={"text-base"} />,
		},
		{
			_selected: false,
			label: "Windows",
			type: "menu",
			menuType: "platforms",
			icon: <FaWindows className={"text-base"} />,
		},
		{
			_selected: false,
			label: "Play Station",
			type: "menu",
			menuType: "platforms",
			icon: <FaPlaystation className={"text-base"} />,
		},
		{
			_selected: false,
			label: "Xbox",
			type: "menu",
			menuType: "platforms",
			icon: <FaXbox className={"text-base"} />,
		},
		{
			_selected: false,
			label: "Nintendo",
			type: "menu",
			menuType: "platforms",
			icon: <SiNintendo className={"text-base"} />,
		},
		{
			_selected: false,
			label: "Linux",
			type: "menu",
			menuType: "platforms",
			icon: <FaLinux className={"text-base"} />,
		},
		{
			_selected: false,
			label: "Android",
			type: "menu",
			menuType: "platforms",
			icon: <FaAndroid className={"text-base"} />,
		},
		{
			_selected: false,
			label: "Apple",
			type: "menu",
			menuType: "platforms",
			icon: <FaApple className={"text-base"} />,
		},
		{
			_selected: false,
			label: "Web",
			type: "menu",
			menuType: "platforms",
			icon: <FaGlobe className={"text-base"} />,
		},
		{
			_selected: false,
			label: "Phone",
			type: "menu",
			menuType: "platforms",
			icon: <FaMobile className={"text-base"} />,
		},
	]);

	const { data } = useFetch<GenreResponse>("/genres");

	useEffect(() => {
		if (data) {
			const genres: GenreMenu[] = data.results.map(
				({ id, name, image_background }) => ({
					id,
					label: name,
					type: "genre",
					imageUrl: image_background,
					_selected: false,
				})
			);
			setMenus((previousMenus) => [...previousMenus, ...genres]);
		}
	}, [data]);

	const accordionItemList: AccordionItems[] = useMemo(() => {
		return [
			{
				title: "New Releases",
				items: menus.filter(
					(menu) => menu.type === "menu" && menu.menuType === "newRelease"
				),
			},
			{
				title: "Top",
				items: menus.filter(
					(menu) => menu.type === "menu" && menu.menuType === "topGames"
				),
			},
			{
				title: "Platforms",
				items: menus.filter(
					(menu) => menu.type === "menu" && menu.menuType === "platforms"
				),
			},
			{
				title: "Genres",
				items: menus.filter((menu) => menu.type === "genre"),
			},
		];
	}, [menus]);

	function handleMenuClick(selectedMenu: MenuList) {
		const updatedMenus = menus.map((menu) => {
			if (menu.type === "genre" && selectedMenu.type === "genre") {
				if (menu.id === selectedMenu.id) return { ...selectedMenu };
				else return { ...menu, _selected: false };
			} else if (menu.type === "menu" && selectedMenu.type === "menu") {
				if (
					menu.menuType === "newRelease" &&
					selectedMenu.menuType === "newRelease"
				) {
					if (menu.label === selectedMenu.label) return { ...selectedMenu };
					else return { ...menu, _selected: false };
				} else if (
					menu.menuType === "platforms" &&
					selectedMenu.menuType === "platforms"
				) {
					if (menu.label === selectedMenu.label) return { ...selectedMenu };
					else return { ...menu, _selected: false };
				} else if (
					menu.menuType === "topGames" &&
					selectedMenu.menuType === "topGames"
				) {
					if (menu.label === selectedMenu.label) return { ...selectedMenu };
					else return { ...menu, _selected: false };
				} else return { ...menu };
			} else return { ...menu };
		});

		setMenus(updatedMenus);
		setFilterParams();
	}

	function setFilterParams() {
		const selectedMenuItems = menus.filter((menu) => menu._selected);
		console.log(selectedMenuItems);
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
							menuList={accordionItem.items}
							onAction={handleMenuClick}
						></ItemsList>
					</AccordionItem>
				);
			})}
		</Accordion>
	);
}
