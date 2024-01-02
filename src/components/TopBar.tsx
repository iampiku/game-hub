import {
	Navbar,
	NavbarContent,
	NavbarItem,
	Input,
	Switch,
} from "@nextui-org/react";

import { useState } from "react";

import useLocalStorage from "@/hooks/useLocalStorage";

export default function TopBar() {
	const { setItem } = useLocalStorage<boolean>("isDark");
	const [search, setSearch] = useState("");
	const [isDark, setIsDark] = useState(false);

	function handleThemeSwitch() {
		setItem(isDark);
		updateAppTheme();
	}

	function updateAppTheme() {
		const appContainer = document.getElementById("route-container");
		if (!appContainer) return;
		appContainer.className = !isDark
			? "dark text-foreground bg-background"
			: "";
	}

	return (
		<Navbar isBlurred maxWidth="full">
			<NavbarContent>
				<NavbarItem>
					<p className="font-semibold text-xl">
						Game <br /> Browser
					</p>
				</NavbarItem>
				<NavbarItem className="w-full">
					<Input
						type="text"
						variant="flat"
						isClearable
						size=""
						aria-label="Search"
						radius="lg"
						value={search}
						placeholder="Search Games...🔍"
						onValueChange={setSearch}
					></Input>
				</NavbarItem>
				<NavbarItem>
					<Switch
						size="sm"
						isSelected={isDark}
						onValueChange={setIsDark}
						onChange={handleThemeSwitch}
					></Switch>
				</NavbarItem>
			</NavbarContent>
		</Navbar>
	);
}
