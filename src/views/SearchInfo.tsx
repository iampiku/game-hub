import DefaultLayout from "@/layouts/Default";

import { useParams } from "react-router-dom";

export default function SearchInfo() {
	const { id } = useParams();
	return (
		<DefaultLayout>
			<span>hi from search SearchInfo {id}</span>
		</DefaultLayout>
	);
}
