import { Input } from "@nextui-org/react";

import { useState } from "react";
import { motion, useAnimation } from "framer-motion";

interface Props {
	handleSearch: (search: string) => void;
}

export default function SearchInput({ handleSearch }: Readonly<Props>) {
	const [search, setSearch] = useState("");
	const formAnimateControl = useAnimation();

	const setFormAnimateWidth = (width: number) =>
		formAnimateControl.start({ maxWidth: width });

	function onEnter(key: string) {
		if (key !== "Enter") return;
		handleSearch(search);
	}

	const onClearText = () => handleSearch("");

	return (
		<motion.div initial={{ maxWidth: 400 }} animate={formAnimateControl}>
			<Input
				size="md"
				type="text"
				isClearable
				radius="md"
				variant="faded"
				onFocus={() => setFormAnimateWidth(700)}
				onBlur={() => setFormAnimateWidth(400)}
				value={search}
				aria-label="Search"
				onClear={onClearText}
				onValueChange={setSearch}
				placeholder="Search Games...🔍"
				onKeyDown={(event) => onEnter(event.key)}
			></Input>
		</motion.div>
	);
}
