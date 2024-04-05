import { MenuList } from "@/types";

import { useEffect, useState } from "react";
import useQueryParams from "./useQueryParams";

export default function useMenu() {
	const [menuItems, setMenuItems] = useState<MenuList[]>([]);
	const [gameFilters] = useQueryParams<{ [key: string]: string | number }>(
		"filter"
	);

	useEffect(() => {
		if (!gameFilters) return;

		const { genres, platforms, newRelease, topGames } = gameFilters;
		setMenuItems((previousMenuItems) => {
			return previousMenuItems.map((menu) => {
				const isSelected = Boolean(
					(genres && menu.type === "genre" && menu.id === genres) ||
						(platforms &&
							menu.type === "menu" &&
							menu.menuType === "platforms" &&
							menu.label === platforms) ||
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

	function updateMenus(selectedMenuItem: MenuList): void {
		const updatedMenus = menuItems.map((menu) => {
			const isSelected =
				(menu.type === "genre" &&
					selectedMenuItem.type === "genre" &&
					menu.id === selectedMenuItem.id) ||
				(menu.type === "menu" &&
					selectedMenuItem.type === "menu" &&
					menu.menuType === selectedMenuItem.menuType &&
					menu.label === selectedMenuItem.label);
			return { ...menu, _selected: selectedMenuItem._selected && isSelected };
		});

		setMenuItems(updatedMenus);
	}

	return [menuItems, updateMenus];
}
