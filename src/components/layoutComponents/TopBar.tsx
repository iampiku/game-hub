import { Switch } from "@nextui-org/react";
import SearchInput from "@/components/utilComponents/SearchInput";

import useLocalStorage from "@/hooks/useLocalStorage";
import { useCallback, useEffect, useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { useAnimation, motion } from "framer-motion";

export default function TopBar() {
	const navigate = useNavigate();
	const { setItem, getItem } = useLocalStorage<boolean>("isDark");

	const [isDark, setIsDark] = useState(!!getItem());
	const [search, setSearch] = useSearchParams();
	const formAnimateControl = useAnimation();

	const setFormAnimateWidth = (width: number) =>
		formAnimateControl.start({ maxWidth: width });

	function updateSearchParams(query: string) {
		if (query.length !== 0) setSearch({ query });
		else search.delete("query");
	}

	const updateAppTheme = useCallback(
		(isDark: boolean) => {
			setItem(isDark);
			const appContainer = document.getElementById("route-container");
			if (!appContainer) return;
			appContainer.className = isDark
				? "dark text-foreground bg-background"
				: "";
		},
		[setItem]
	);

	useEffect(() => {
		updateAppTheme(isDark);
	}, [isDark, updateAppTheme]);

	const commonNavClasses =
		"sticky top-0 s flex flex-col md:flex-row md:gap-0 items-center gap-3 justify-between px-6 py-5 mb-4 z-10 backdrop-blur-md";
	const navbarClasses =
		(isDark ? "bg-white/10 " : "bg-white/95 ") + commonNavClasses;

	return (
		<nav className={navbarClasses}>
			<motion.button
				type="button"
				onClick={() => navigate("/")}
				transition={{ type: "spring", duration: 0.2 }}
				className="font-semibold text-xl cursor-pointer"
			>
				⚛️ Game Browser
			</motion.button>

			<motion.div
				className="flex w-full justify-center items-center"
				initial={{ maxWidth: 400 }}
				animate={formAnimateControl}
				transition={{ type: "spring", duration: 0.6 }}
			>
				<SearchInput
					handleSearch={updateSearchParams}
					animateWidth={setFormAnimateWidth}
				/>
			</motion.div>
			<Switch size="sm" isSelected={isDark} onValueChange={setIsDark}></Switch>
		</nav>
	);
}
