import TopBar from "@/components/layoutComponents/TopBar";
import SideNavigation from "@/components/layoutComponents/SideNavigation";

import { ReactNode } from "react";

import { Link } from "@nextui-org/react";

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
			<footer className="py-10 text-center text-base">
				<p>
					Build with ⚛️ by{" "}
					<span className="font-bold cursor-pointer">
						<Link isExternal href="https://github.com/iampiku" showAnchorIcon>
							Pradipta Chatterjee
						</Link>
					</span>{" "}
					👨🏽‍💻 and powered by <strong>rawg</strong> API
				</p>
			</footer>
		</div>
	);
}
