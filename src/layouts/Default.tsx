import TopBar from "@/components/TopBar";
import SideNavigation from "@/components/SideNavigation";

import { ReactNode } from "react";

interface Props {
	children: ReactNode;
}

export default function DefaultLayout({ children }: Readonly<Props>) {
	return (
		<div className="min-h-screen">
			<TopBar />
			<main className="w-full">
				<div className="grid grid-cols-1 xl:grid-cols-12 xl:gap-2 mx-3">
					<div className="col-span-2 w-full pb-4 pt-2">
						<SideNavigation />
					</div>

					<section className="col-span-10">{children}</section>
				</div>
			</main>
			<footer className="py-10 text-center text-xl">
				<p>
					Build with ⚛️ by{" "}
					<span className="font-bold">Pradipta Chatterjee</span> 👨🏽‍💻
				</p>
			</footer>
		</div>
	);
}
