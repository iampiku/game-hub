import {
	Navbar,
	NavbarContent,
	NavbarItem,
	Input,
	Switch,
} from "@nextui-org/react";

import { useState } from "react";

export default function TopBar() {
	const [search, setSearch] = useState("");
	const [isDark, setIsDark] = useState(false);

	return (
		<Navbar isBlurred>
			<NavbarContent justify="center">
				<NavbarItem>
					<p className="font-bold text-2xl">Game Browser</p>
				</NavbarItem>
				<NavbarItem>
					<Input
						size="sm"
						type="text"
						variant="flat"
						placeholder="Search Games..."
						value={search}
						onChange={(event) => setSearch(event.target.value)}
					></Input>
				</NavbarItem>
				<NavbarItem>
					<Switch
						color="secondary"
						size="sm"
						onChange={() => setIsDark(!isDark)}
					></Switch>
				</NavbarItem>
			</NavbarContent>
		</Navbar>
	);
}
