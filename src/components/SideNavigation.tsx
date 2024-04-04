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

import useQueryParams from "@/hooks/useQueryParams";
import { useState, useMemo, useEffect } from "react";

import type { MenuList } from "@/types";

import { parentPlatforms, genres } from "@/utils";

type AccordionItems = {
	title: string;
	items: MenuList[];
};

export default function SideNavigation() {
	const modifiedGenres = genres.map(({ id, name, image_background }) => ({
		id,
		label: name,
		type: "genre",
		imageUrl: image_background,
		_selected: false,
	})) as MenuList[];

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
		...modifiedGenres,
	]);

	const [searchParams, setSearchParams] = useQueryParams<{
		[key: string]: string | number;
	}>("filter");

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

	useEffect(() => {
		if (!searchParams) return;
		const { genres, newRelease, topGames } = searchParams;

		setMenus((previousMenus) => {
			const updatedMenus = previousMenus.map((menu) => {
				if (menu.type === "genre") {
				}
			});
		});
	}, [searchParams]);

	function handleMenuClick(selectedMenu: MenuList) {
		const updatedMenus = menus.map((menu) => {
			if (selectedMenu.type === "genre" && menu.type === "genre")
				return {
					...menu,
					_selected: menu.id === selectedMenu.id && selectedMenu._selected,
				};
			else if (
				selectedMenu.type === "menu" &&
				menu.type === "menu" &&
				menu.menuType === selectedMenu.menuType
			)
				return {
					...menu,
					_selected:
						menu.label === selectedMenu.label && selectedMenu._selected,
				};
			else return { ...menu };
		});

		setMenus(updatedMenus);
		buildFilterParams(updatedMenus);
	}

	function buildFilterParams(updatedMenus: MenuList[]) {
		const selectedMenuItems = updatedMenus.filter(({ _selected }) => _selected);
		if (!selectedMenuItems.length) return;

		const filterParams: { [key: string]: string | number } = {};
		for (const menu of selectedMenuItems) {
			if (menu.type === "genre") filterParams["genres"] = menu.id;
			else {
				switch (menu.menuType) {
					case "newRelease":
						filterParams["newRelease"] = menu.label;
						continue;
					case "platforms":
						filterParams["parent_platforms"] =
							parentPlatforms.find((platform) => platform.name === menu.label)
								?.id ?? -1;
						continue;
					case "topGames":
						filterParams["topGames"] = menu.label;
						continue;
				}
			}
		}
		setSearchParams(filterParams, { replace: true });
	}

	return (
		<Accordion
			isCompact
			keepContentMounted
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
