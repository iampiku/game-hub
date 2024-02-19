import TopBar from "@/components/TopBar";

import { ReactNode } from "react";

interface Props {
	children: ReactNode;
}

export default function Search({ children }: Readonly<Props>) {
	return (
		<div className="min-h-screen">
			<TopBar />
			<main className="w-full h-full">
				<div className="grid grid-cols-12 mx-6">{children}</div>
			</main>
		</div>
	);
}
