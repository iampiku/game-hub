import { Input } from "@nextui-org/react";

import { useState } from "react";

interface Props {
	handleSearch: (search: string) => void;
	animateWidth: (elementWidth: number) => void;
}

export default function SearchInput({
	handleSearch,
	animateWidth,
}: Readonly<Props>) {
	const [search, setSearch] = useState("");

	function onEnter(key: string) {
		if (key !== "Enter") return;
		handleSearch(search);
	}

	const onClearText = () => handleSearch("");

	return (
		<Input
			size="md"
			type="text"
			isClearable
			radius="md"
			variant="faded"
			onFocus={() => animateWidth(700)}
			onBlur={() => animateWidth(400)}
			value={search}
			aria-label="Search"
			onClear={onClearText}
			onValueChange={setSearch}
			placeholder="Search Games...🔍"
			onKeyDown={(event) => onEnter(event.key)}
		></Input>
	);
}
