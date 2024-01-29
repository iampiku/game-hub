import SearchLayout from "@/layouts/Search";

import GameInfo from "@/components/GameInfo";

import { useParams } from "react-router-dom";

export default function SearchInfo() {
	const { id } = useParams();
	return (
		<SearchLayout>
			<div className="col-span-12">
				<GameInfo gameId={id ?? ""} />
			</div>
		</SearchLayout>
	);
}
