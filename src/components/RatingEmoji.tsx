import { Tooltip } from "@nextui-org/react";

interface Props {
	rating: number;
}

export default function RatingEmoji({ rating }: Readonly<Props>) {
	if (rating < 3) return null;
	const emojiMap: { [key: number]: { label: string; emoji: string } } = {
		3: { label: "Meh", emoji: "🫤" },
		4: { label: "Recommended", emoji: "👍🏽" },
		5: { label: "Exceptional", emoji: "🎯" },
	};
	return (
		<Tooltip content={emojiMap[rating].label}>
			<span>{emojiMap[rating].emoji}</span>
		</Tooltip>
	);
}
