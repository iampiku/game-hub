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
					filterParams["dates"] = generateDateFilter(menu.label);
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

	const sortedArr = [...arr];

	return sortedArr.sort((a, b) => {
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

const formatDate = (date: Date) => {
	const year = date.getFullYear();
	const month = (date.getMonth() + 1).toString().padStart(2, "0");
	const day = date.getDate().toString().padStart(2, "0");
	return `${year}-${month}-${day}`;
};

export function generateDateFilter(selectedFilter: string) {
	let dateRanges = [];
	const today = new Date();

	switch (selectedFilter) {
		case "Last 30 days":
			const last30Days = new Date(today);
			last30Days.setDate(today.getDate() - 30);
			dateRanges = [[formatDate(last30Days), formatDate(today)]];
			break;
		case "This week":
			const thisWeekStart = new Date(today);
			thisWeekStart.setDate(today.getDate() - today.getDay() + 1);
			const thisWeekEnd = new Date(thisWeekStart);
			thisWeekEnd.setDate(thisWeekStart.getDate() + 6);
			dateRanges = [[formatDate(thisWeekStart), formatDate(thisWeekEnd)]];
			break;
		case "Next week":
			const nextWeekStart = new Date(today);
			nextWeekStart.setDate(today.getDate() - today.getDay() + 8);
			const nextWeekEnd = new Date(nextWeekStart);
			nextWeekEnd.setDate(nextWeekStart.getDate() + 6);
			dateRanges = [[formatDate(nextWeekStart), formatDate(nextWeekEnd)]];
			break;
		case "Release Calender":
			const currentMonthStart = new Date(
				today.getFullYear(),
				today.getMonth(),
				1
			);
			const currentMonthEnd = new Date(
				today.getFullYear(),
				today.getMonth() + 1,
				0
			);
			dateRanges = [
				[formatDate(currentMonthStart), formatDate(currentMonthEnd)],
			];
			break;
		case "Best of the year":
		case `Popular in ${new Date().getFullYear()}`:
			const yearStart = new Date(today.getFullYear(), 0, 1);
			const yearEnd = new Date(today.getFullYear(), 11, 31);
			dateRanges = [[formatDate(yearStart), formatDate(yearEnd)]];
			break;
		default:
			return "";
	}

	return dateRanges.map((dateRange) => dateRange.join(",")).join(".");
}
