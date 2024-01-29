/* eslint-disable no-mixed-spaces-and-tabs */
import { Listbox, ListboxItem, Chip, Avatar } from "@nextui-org/react";

import type { ListItem } from "@/types";

interface Props {
	listTitle?: string;
	listItems: ListItem[];
	onAction: (item: ListItem) => void;
}

interface ListContentProps {
	type: "Icon" | "Avatar" | null;
	listItem: ListItem;
}

function ListStartContent({ type, listItem }: Readonly<ListContentProps>) {
	switch (type) {
		case "Avatar":
			return (
				<Avatar
					size="sm"
					radius="md"
					alt="genre_img"
					src={listItem.imageUrl}
				></Avatar>
			);
		case "Icon":
			return (
				<Chip variant="shadow" size="sm" color="primary">
					{listItem.icon}
				</Chip>
			);
		case null:
			return null;
	}
}

export default function ItemsList({ listItems, onAction }: Readonly<Props>) {
	const containsIcon = listItems.every((item) => item.icon);
	const containsAvatar = listItems.every((item) => item.imageUrl);

	function getItemType() {
		if (containsIcon) return "Icon";
		else if (containsAvatar) return "Avatar";
		else return null;
	}

	const type = getItemType();

	function onItemClick(key: string) {
		const item = listItems.find((item) => item.label === key) ?? null;
		if (item) onAction(item);
	}

	return (
		<Listbox
			variant="faded"
			aria-label="list-component"
			onAction={(key) => onItemClick(key.toString())}
		>
			{listItems.map((item) => {
				return (
					<ListboxItem
						key={item.label}
						startContent={ListStartContent({ type, listItem: item })}
					>
						{item.label}
					</ListboxItem>
				);
			})}
		</Listbox>
	);
}
