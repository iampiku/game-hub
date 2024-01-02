/* eslint-disable no-mixed-spaces-and-tabs */
import { Listbox, ListboxItem } from "@nextui-org/react";

type ListItems = string[];
type ListItemsWithIcons = { label: string; icon: JSX.Element }[];

interface Props {
	listTitle?: string;
	listItems: ListItems | ListItemsWithIcons;
}

export default function ItemsList({
	listItems,
	listTitle = "",
}: Readonly<Props>) {
	if (listItems.length === 0) return null;

	const itemsWithIcons = listItems.every((item) => typeof item === "object");

	const ListItemComponent = () => {
		return itemsWithIcons
			? (listItems as ListItemsWithIcons).map((item) => {
					return (
						<ListboxItem key={item.label} startContent={item.icon}>
							<span className="text-base">{item.label}</span>
						</ListboxItem>
					);
			  })
			: (listItems as ListItems).map((item) => {
					return <ListboxItem key={item}>{item}</ListboxItem>;
			  });
	};

	return (
		<>
			<p className="font-semibold text-xl ml-3">{listTitle}</p>
			<Listbox variant="shadow" className="text-2xl">
				{ListItemComponent()}
			</Listbox>
		</>
	);
}
