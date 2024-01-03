/* eslint-disable no-mixed-spaces-and-tabs */
import { Listbox, ListboxItem, Chip } from "@nextui-org/react";

type ListItems = string[];
type ListItemsWithIcons = { label: string; icon: JSX.Element }[];

interface Props {
	listTitle?: string;
	onAction: (item: string) => void;
	listItems: ListItems | ListItemsWithIcons;
}

export default function ItemsList({ listItems, onAction }: Readonly<Props>) {
	if (listItems.length === 0) return null;

	const itemsWithIcons = listItems.every((item) => typeof item === "object");

	return (
		<Listbox
			variant="shadow"
			aria-label="list-component"
			onAction={(key) => onAction(key.toString())}
		>
			{itemsWithIcons
				? (listItems as ListItemsWithIcons).map(({ label, icon }) => {
						return (
							<ListboxItem
								key={label}
								startContent={
									<Chip variant="shadow" size="sm" color="primary">
										{icon}
									</Chip>
								}
								textValue={label}
							>
								<span className="text-base">{label}</span>
							</ListboxItem>
						);
				  })
				: (listItems as ListItems).map((item) => {
						return (
							<ListboxItem key={item} textValue={item}>
								{item}
							</ListboxItem>
						);
				  })}
		</Listbox>
	);
}
