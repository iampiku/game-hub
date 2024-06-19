import { MenuList } from "@/types";
import { RAW_GENRES, RAW_PARENT_PLATFORMS } from "@/data";

export const parentPlatforms = RAW_PARENT_PLATFORMS.map((platform) => {
	return {
		_selected: false,
		id: platform.id,
		label: platform.name === "PC" ? "Windows" : platform.name,
		type: "menu",
		menuType: "platforms",
	};
});

export const genres = RAW_GENRES.map(({ id, name, image_background }) => ({
	id,
	label: name,
	type: "genre",
	imageUrl: image_background,
	_selected: false,
})) as MenuList[];

export function buildFilterParams(
	selectedMenuItems: MenuList[]
): { [key: string]: string | number } | null {
	if (!selectedMenuItems.length) return null;

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
						"id" in menu ? (menu.id as number) : -1;
					continue;
				case "topGames":
					filterParams["topGames"] = menu.label;
					continue;
			}
		}
	}
	return filterParams;
}

export function formatNumberToShot(value: number) {
	const numberFormatter = new Intl.NumberFormat("en-US", {
		notation: "compact",
		compactDisplay: "short",
	});
	return numberFormatter.format(value);
}

export function sortArrayOfObjects<T>(params: {
	arr: Array<T>;
	sortBy: keyof T;
	sortOrder: "asc" | "desc";
}): Array<T> {
	const { arr, sortOrder = "asc", sortBy } = params;
	if (!arr.length || !sortBy) return arr;
	return arr.sort((a, b) => {
		if (sortOrder === "asc") {
			if (a[sortBy] > b[sortBy]) return -1;
			if (a[sortBy] < b[sortBy]) return 1;
			return 0;
		} else {
			if (a[sortBy] > b[sortBy]) return 1;
			if (a[sortBy] < b[sortBy]) return -1;
			return 0;
		}
	});
}

// export function generateDateFilter(filterName: string) {
// 	if (filterName.length === 0) return null;

// 	const currentDate = new Date();

// 	const filterDateMapping: { [key: string]: string } = {
// 		"": "",
// 	};

// 	return filterDateMapping[filterName];
// }
