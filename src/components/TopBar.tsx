import { Navbar, NavbarContent, NavbarItem, Switch } from "@nextui-org/react";

import { useCallback, useEffect, useState } from "react";

import { useSearchParams } from "react-router-dom";

import useLocalStorage from "@/hooks/useLocalStorage";

import SearchInput from "./SearchInput";

export default function TopBar() {
	const { setItem, getItem } = useLocalStorage<boolean>("isDark");

	const [isDark, setIsDark] = useState(!!getItem());
	const [search, setSearch] = useSearchParams();

	function updateSearchParams(query: string) {
		if (query.length !== 0) setSearch({ query }, { replace: true });
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

	return (
		<Navbar isBlurred maxWidth="full" className="pb-2">
			<NavbarContent>
				<NavbarItem>
					<p className="font-semibold text-xl">
						Game <br /> Browser
					</p>
				</NavbarItem>
				<NavbarItem className="w-full">
					<SearchInput handleSearch={updateSearchParams} />
				</NavbarItem>
				<NavbarItem>
					<Switch
						size="sm"
						isSelected={isDark}
						onValueChange={setIsDark}
					></Switch>
					<span>{isDark}</span>
				</NavbarItem>
			</NavbarContent>
		</Navbar>
	);
}
