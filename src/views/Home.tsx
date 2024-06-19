import DefaultLayout from "@/layouts/Default";

import {
	Button,
	Dropdown,
	DropdownMenu,
	DropdownItem,
	DropdownTrigger,
} from "@nextui-org/react";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";
import GameGrid from "@/components/GameGrid";
import ShowError from "@/components/utilComponents/ShowError";

import useGame from "@/hooks/useGames";
import { useMemo, useState } from "react";

import { sortArrayOfObjects } from "@/utils";

import { Games } from "@/types";
// import useQueryParams from "@/hooks/useQueryParams";

export default function Home() {
	const { isLoading, isError, gameData, setPage, page } = useGame(null);

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
		{ label: "Metacritic", _selected: true },
	]);

	// const [filters] = useQueryParams("filter");

	function handlePagination(move: "next" | "prev") {
		if (move === "next") {
			setPage((prevPage) => prevPage + 1);
		} else {
			setPage((prevPage) => {
				if (prevPage === 1) return prevPage;
				else return prevPage - 1;
			});
		}
	}

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

	const showError = (isError || !gameData.games.length) && !isLoading;

	const selectedOrderByOption =
		orderByList.find((option) => option._selected)?.label ?? "";

	// const games = useMemo((): Games[] => {
	// 	const sortByKeyMap = {};
	// 	return sortArrayOfObjects<Games>({ arr: gameData.games });
	// });

	return (
		<DefaultLayout>
			{showError && (
				<div className="min-h-screen my-auto">
					<ShowError errorCode={404} />
				</div>
			)}

			<div id="top-container">
				<p className="font-semibold text-6xl pb-4 pt-2">Top Rated Games</p>

				<div className="flex justify-between items-center py-4">
					<Dropdown>
						<DropdownTrigger>
							<Button variant="flat" color="secondary">
								Order By:{" "}
								{orderByList.find((option) => option._selected)?.label}
							</Button>
						</DropdownTrigger>
						<DropdownMenu variant="flat" color="secondary">
							{orderByList.map((option, index) => {
								return (
									<DropdownItem
										key={index}
										onClick={() => onOrderByChange(option)}
										className={option._selected ? "text-secondary-300" : ""}
									>
										{option.label}
									</DropdownItem>
								);
							})}
						</DropdownMenu>
					</Dropdown>

					<div className="flex justify-end gap-4 ">
						<Button
							variant="shadow"
							color="secondary"
							isLoading={isLoading}
							isDisabled={page === 1}
							onClick={() => handlePagination("prev")}
							startContent={<FaArrowAltCircleLeft />}
						>
							Previous
						</Button>
						<Button
							variant="shadow"
							color="secondary"
							isLoading={isLoading}
							isDisabled={gameData.totalGames === page}
							onClick={() => handlePagination("next")}
							endContent={<FaArrowAltCircleRight />}
						>
							Next
						</Button>
					</div>
				</div>
			</div>

			<GameGrid games={gameData.games} loading={isLoading} />
		</DefaultLayout>
	);
}
