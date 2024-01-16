/* eslint-disable no-mixed-spaces-and-tabs */
import { Listbox, ListboxItem, Chip, Avatar } from "@nextui-org/react";

import type { ListItem } from "@/types";

interface Props {
	listTitle?: string;
	listItems: ListItem;
	onAction: (item: string) => void;
}

export default function ItemsList({ listItems, onAction }: Readonly<Props>) {
	function ListStartContent(listItem: ListItem) {
		switch (listItem.type) {
			case "AVATAR":
				return (
					<Avatar
						isBordered
						radius="md"
						alt="genre_img"
						src={listItem.item.image_background}
					></Avatar>
				);
			case "ICON":
				return (
					<Chip variant="shadow" size="sm" color="primary">
						{listItem.item.icon}
					</Chip>
				);
			case "SIMPLE":
			default:
				return null;
		}
	}

	function ListLabel(listItem: ListItem) {
		switch (listItem.type) {
			case "ICON":
				return listItem.item.label;
			case "AVATAR":
				return listItem.item.name;
			case "SIMPLE":
				return listItem.item;
			default:
				return "";
		}
	}

	// function ListWithIcons() {
	// 	return (listItems as ListItemsWithIcons[]).map(({ label, icon }) => {
	// 		return (
	// 			<ListboxItem
	// 				key={label}
	// 				startContent={
	// 					<Chip variant="shadow" size="sm" color="primary">
	// 						{icon}
	// 					</Chip>
	// 				}
	// 				textValue={label}
	// 			>
	// 				<span className="text-base">{label}</span>
	// 			</ListboxItem>
	// 		);
	// 	});
	// }

	// function ListWithImages() {
	// 	return (listItems as Genres[]).map(({ id, image_background, name }) => {
	// 		return (
	// 			<ListboxItem
	// 				key={id}
	// 				startContent={
	// 					<Avatar
	// 						isBordered
	// 						radius="md"
	// 						alt="genre_img"
	// 						src={image_background}
	// 					></Avatar>
	// 				}
	// 				textValue={name}
	// 			>
	// 				<span className="text-base">{name}</span>
	// 			</ListboxItem>
	// 		);
	// 	});
	// }

	return (
		<Listbox
			variant="shadow"
			aria-label="list-component"
			onAction={(key) => onAction(key.toString())}
		>
			{listItems.item.map((item) => {
				return <ListboxItem key={ListLabel(item)}></ListboxItem>;
			})}
		</Listbox>
	);
}
