import TopBar from "@/components/layoutComponents/TopBar";

import { ReactNode } from "react";

interface Props {
	children: ReactNode;
}

export default function Search({ children }: Readonly<Props>) {
	return (
		<>
			<TopBar />
			<main className="grid grid-cols-12 mx-6 min-h-screen">{children}</main>
		</>
	);
}
