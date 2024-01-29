import { Input } from "@nextui-org/react";

import { useState } from "react";

interface Props {
	handleSearch: (search: string) => void;
}

export default function SearchInput({ handleSearch }: Readonly<Props>) {
	const [search, setSearch] = useState("");

	function onEnter(key: string) {
		if (key !== "Enter") return;
		handleSearch(search);
	}

	function onClearText() {
		handleSearch("");
	}

	return (
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
			onKeyDown={(event) => onEnter(event.key)}
			onClear={onClearText}
		></Input>
	);
}
