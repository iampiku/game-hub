import {
	Navbar,
	NavbarContent,
	NavbarItem,
	Input,
	Switch,
} from "@nextui-org/react";

import { useEffect, useState } from "react";

import useLocalStorage from "@/hooks/useLocalStorage";

export default function TopBar() {
	const { setItem, getItem } = useLocalStorage<boolean>("isDark");

	const [search, setSearch] = useState("");
	const [isDark, setIsDark] = useState(!!getItem());

	useEffect(() => {
		setItem(isDark);
		const appContainer = document.getElementById("route-container");
		if (!appContainer) return;
		appContainer.className = isDark ? "dark text-foreground bg-background" : "";
	}, [isDark, setItem]);

	return (
		<Navbar isBlurred maxWidth="full" className="pb-2">
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
						size="sm"
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
					></Switch>
					<span>{isDark}</span>
				</NavbarItem>
			</NavbarContent>
		</Navbar>
	);
}
