import { Chip, Tooltip } from "@nextui-org/react";

interface Props {
	score: number;
}

export default function CriticScore({ score }: Readonly<Props>) {
	const chipColor = score > 90 ? "primary" : "secondary";
	return (
		<Chip color={chipColor} variant="shadow">
			<Tooltip content="Meta Critic Score">
				<span className="font-semibold">{score}</span>
			</Tooltip>
		</Chip>
	);
}
