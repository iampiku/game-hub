import {
	Dropdown,
	DropdownTrigger,
	Button,
	DropdownMenu,
	DropdownItem,
} from "@nextui-org/react";
import { FaSortAmountUp, FaSortAmountDown } from "react-icons/fa";

import { useState, useMemo, useEffect } from "react";
import useQueryParams from "@/hooks/useQueryParams";

export default function SortGames() {
	const [gameFilter, setGameFilter] = useQueryParams<{
		[key: string]: string | number;
	}>("filter");
	const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");
	const [orderByList, setOrderByList] = useState<
		{ label: string; _selected: boolean }[]
	>([
		{ label: "Relevance", _selected: false },
		{ label: "Name", _selected: false },
		{ label: "Release", _selected: false },
		{ label: "Added", _selected: false },
		{ label: "Created", _selected: false },
		{ label: "Updated", _selected: false },
		{ label: "Rating", _selected: false },
		{ label: "Metacritic", _selected: false },
	]);

	const updatedSortOrder = useMemo(() => {
		let sortBy =
			orderByList.find((item) => item._selected)?.label.toLowerCase() ?? null;
		sortBy = !sortBy ? null : sortOrder === "asc" ? `-${sortBy}` : sortBy;

		if (!sortBy) return null;

		return { ordering: sortBy };
	}, [orderByList, sortOrder]);

	function onOrderByChange(selectedOption: {
		label: string;
		_selected: boolean;
	}) {
		setOrderByList((previousOrderList) => {
			return previousOrderList.map((option) => ({
				...option,
				_selected: selectedOption.label === option.label,
			}));
		});
	}

	useEffect(() => {
		if (updatedSortOrder) setGameFilter({ ...gameFilter, ...updatedSortOrder });

		if (!gameFilter || "ordering" in gameFilter) return;
		setSortOrder(() =>
			typeof gameFilter["ordering"] === "string" &&
			gameFilter["ordering"].includes("-")
				? "asc"
				: "desc"
		);
		setOrderByList((previousOrderByList) => {
			return previousOrderByList.map((item) => ({
				...item,
				_selected: item.label.toLowerCase() === gameFilter["ordering"],
			}));
		});
	}, [gameFilter, setGameFilter, updatedSortOrder]);

	return (
		<div className="flex gap-3">
			<Dropdown>
				<DropdownTrigger>
					<Button variant="flat" color="primary">
						Order By: {orderByList.find((option) => option._selected)?.label}
					</Button>
				</DropdownTrigger>
				<DropdownMenu variant="flat" color="primary">
					{orderByList.map((option, index) => {
						return (
							<DropdownItem
								key={index}
								onClick={() => onOrderByChange(option)}
								className={option._selected ? "text-primary-300" : ""}
							>
								{option.label}
							</DropdownItem>
						);
					})}
				</DropdownMenu>
			</Dropdown>
			<Button
				variant="flat"
				color="secondary"
				isIconOnly
				onClick={() =>
					setSortOrder((previousSortOrder) =>
						previousSortOrder === "asc" ? "desc" : "asc"
					)
				}
			>
				{sortOrder === "asc" ? <FaSortAmountUp /> : <FaSortAmountDown />}
			</Button>
		</div>
	);
}
