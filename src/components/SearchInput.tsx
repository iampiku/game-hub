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

	const onClearText = () => handleSearch("");

	return (
		<Input
			size="sm"
			type="text"
			isClearable
			radius="lg"
			variant="flat"
			value={search}
			aria-label="Search"
			onClear={onClearText}
			onValueChange={setSearch}
			placeholder="Search Games...🔍"
			onKeyDown={(event) => onEnter(event.key)}
		></Input>
	);
}
