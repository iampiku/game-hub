import TopBar from "@/components/TopBar";

import { ReactNode } from "react";

interface Props {
	children: ReactNode;
}

export default function Search({ children }: Readonly<Props>) {
	return (
		<div className="min-h-screen">
			<TopBar />
			<main className="w-full">
				<div className="grid grid-cols-12 gap-2 mx-3">{children}</div>
			</main>
		</div>
	);
}
