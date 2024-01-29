import DefaultLayout from "@/layouts/Default";

import GameGrid from "@/components/GameGrid";

// import { results } from "../../apiResponse.json";
import { Games } from "@/types";

import useFetch from "@/hooks/useFetch";

import { useNavigate, useSearchParams } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Home() {
	const navigate = useNavigate();
	const [search] = useSearchParams();
	const [games, setGames] = useState<Games[]>([]);

	const searchQuery = search.get("query");
	const url = !searchQuery ? "/games" : `/games?search='${searchQuery}'`;

	const { data, loading, errorMessage } = useFetch(url);

	useEffect(() => {
		const newGames = (data?.results as Games[]) ?? [];
		setGames(newGames);
	}, []);
	console.log(games);
	function onGameClick(selectedGame: Games) {
		navigate(`game/${selectedGame.id}`);
	}

	return (
		<DefaultLayout>
			{errorMessage && <span>{errorMessage}</span>}
			<GameGrid games={games} loading={loading} onGameClick={onGameClick} />
		</DefaultLayout>
	);
}
