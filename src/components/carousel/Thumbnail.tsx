type ThumbnailProps = {
	thumbnail: {
		id: number;
		image: string;
	};
	onClick: (id: number) => void;
	selected: boolean;
};

import { Image } from "@nextui-org/react";

export default function Thumbnail({
	onClick,
	selected,
	thumbnail,
}: Readonly<ThumbnailProps>) {
	const elevationClass = selected ? "elevation-animation" : "";
	return (
		<Image
			radius="sm"
			isBlurred
			isZoomed
			object-fit="fill"
			width={"200px"}
			height={"200px"}
			key={thumbnail.id}
			src={thumbnail.image}
			className={elevationClass}
			onClick={() => onClick(thumbnail.id)}
		></Image>
	);
}
