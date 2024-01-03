import {
	FaWindows,
	FaPlaystation,
	FaXbox,
	FaApple,
	FaLinux,
	FaAndroid,
	FaGlobe,
	FaMobile,
} from "react-icons/fa";

import { SiNintendo } from "react-icons/si";

import { IconType } from "react-icons";

import { Tooltip, Chip } from "@nextui-org/react";

interface Props {
	platformNames: string[];
}

export default function PlatformIcons({ platformNames }: Readonly<Props>) {
	const iconMap: { [key: string]: IconType } = {
		xbox: FaXbox,
		web: FaGlobe,
		mac: FaApple,
		ps: FaWindows,
		linux: FaLinux,
		android: FaAndroid,
		ios: FaMobile,
		nintendo: SiNintendo,
		playstation: FaPlaystation,
	};
	return platformNames.map((name) => {
		const IconComponent = iconMap[name];
		return IconComponent ? (
			<Tooltip key={name} content={name} showArrow={true}>
				<Chip variant="shadow">
					<IconComponent />
				</Chip>
			</Tooltip>
		) : null;
	});
}
