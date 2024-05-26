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

import { useState, useMemo, useEffect, useCallback, ReactNode } from "react";
import useQueryParams from "@/hooks/useQueryParams";

import type { MenuList } from "@/types";

import { parentPlatforms, genres, buildFilterParams } from "@/utils";

type AccordionItems = {
	title: string;
	items: MenuList[];
};

export default function SideNavigation() {
	const PLATFORM_ICON_MAP: { [key: string]: ReactNode } = {
		phone: <FaMobile className={"text-base"} />,
		web: <FaGlobe className={"text-base"} />,
		android: <FaAndroid className={"text-base"} />,
		linux: <FaLinux className={"text-base"} />,
		playstation: <FaPlaystation className={"text-base"} />,
		xbox: <FaXbox className={"text-base"} />,
		windows: <FaWindows className={"text-base"} />,
		nintendo: <SiNintendo className={"text-base"} />,
	} as const;

	const platforms = parentPlatforms.map((platform) => {
		return {
			...platform,
			icon: PLATFORM_ICON_MAP[platform.label.toLowerCase()],
		};
	}) as MenuList[];

	const [gameFilters, setGameFilters] = useQueryParams<{
		[key: string]: string | number;
	}>("filter");
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
		...platforms,
		...genres,
	]);

	const updateMenuFromFilterParams = useCallback(() => {
		if (!gameFilters) return;

		const { genres, parent_platforms, newRelease, topGames } = gameFilters;
		setMenus((previousMenuItems) => {
			return previousMenuItems.map((menu) => {
				const isSelected = Boolean(
					(genres && menu.type === "genre" && menu.id === genres) ||
						(parent_platforms &&
							menu.type === "menu" &&
							menu.menuType === "platforms" &&
							("id" in menu ? (menu.id as number) : -1) === parent_platforms) ||
						(newRelease &&
							menu.type === "menu" &&
							menu.menuType === "newRelease" &&
							menu.label === newRelease) ||
						(topGames &&
							menu.type === "menu" &&
							menu.menuType === "topGames" &&
							menu.label === topGames)
				);
				return { ...menu, _selected: isSelected };
			});
		});
	}, [gameFilters]);

	useEffect(() => {
		updateMenuFromFilterParams();
	}, [updateMenuFromFilterParams]);

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
		const selectedMenuItems = updatedMenus.filter((menu) => menu._selected);
		updateFilterParams(selectedMenuItems);
	}

	function updateFilterParams(selectedMenus: MenuList[]) {
		const filterParams = buildFilterParams(selectedMenus);
		if (filterParams) setGameFilters(filterParams, { replace: true });
		else setGameFilters({});
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
