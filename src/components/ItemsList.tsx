/* eslint-disable no-mixed-spaces-and-tabs */
import { Listbox, ListboxItem, Chip, Avatar } from "@nextui-org/react";

import type { MenuList } from "@/types";
import { useMemo } from "react";

interface Props {
	menuList: MenuList[];
	onAction: (menu: MenuList) => void;
}

interface ListContentProps {
	menu: MenuList;
}

function ListStartContent({ menu }: Readonly<ListContentProps>) {
	switch (menu.type) {
		case "genre":
			return (
				<Avatar
					size="sm"
					radius="lg"
					alt="genre_img"
					src={menu.imageUrl}
				></Avatar>
			);
		case "menu":
			return (
				<Chip variant="shadow" size="sm" color="primary">
					{menu.icon}
				</Chip>
			);
		default:
			return null;
	}
}

export default function ItemsList({ menuList, onAction }: Readonly<Props>) {
	function handleMenuSelection(menu: MenuList) {
		onAction({ ...menu, _selected: !menu._selected });
	}

	const selectedItemKey = useMemo(() => {
		const selectedMenuItem = menuList.find((menu) => menu._selected);
		return selectedMenuItem ? [selectedMenuItem.label] : [];
	}, [menuList]);

	return (
		<Listbox
			variant="faded"
			aria-label="list-component"
			selectionMode="single"
			selectedKeys={selectedItemKey}
		>
			{menuList.map((menu) => {
				return (
					<ListboxItem
						key={menu.label}
						onClick={() => handleMenuSelection(menu)}
						startContent={ListStartContent({ menu })}
					>
						{menu.label}
					</ListboxItem>
				);
			})}
		</Listbox>
	);
}
