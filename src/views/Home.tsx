import DefaultLayout from "@/layouts/Default";

import { Button } from "@nextui-org/react";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";
import GameGrid from "@/components/GameGrid";
import ShowError from "@/components/ShowError";

import useGame from "@/hooks/useGames";

export default function Home() {
	const { isLoading, isError, gameData, setPage, page } = useGame(null);

	function handlePagination(move: "next" | "prev") {
		if (move === "next") {
			setPage((prevPage) => ++prevPage);
		} else {
			setPage((prevPage) => {
				if (prevPage === 1) return prevPage;
				else return --prevPage;
			});
		}
	}

	return (
		<DefaultLayout>
			{isError && (
				<div className="min-h-screen my-auto">
					<ShowError errorCode={404} />
				</div>
			)}

			<GameGrid games={gameData.games} loading={isLoading} />

			<footer className="flex justify-end gap-4 pt-6">
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
			</footer>
		</DefaultLayout>
	);
}
