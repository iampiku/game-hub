import { Spinner } from "@nextui-org/react";

import { GameDetails } from "@/types";

interface Props {
	gameDetails: GameDetails | null;
	loading: boolean;
	error: boolean;
}

export default function GameInfo({
	gameDetails,
	loading,
	error,
}: Readonly<Props>) {
	return (
		<>
			{error && <p>Oops! something went wrong</p>}
			{loading && (
				<Spinner
					size="lg"
					className="flex justify-center align-middle min-h-full"
					label="Loading game details..."
				></Spinner>
			)}
			<span>{gameDetails && JSON.stringify(gameDetails)}</span>
		</>
	);
}
