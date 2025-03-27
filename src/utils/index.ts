interface FormatNumberConfig {
	value: number;
	notation: "standard" | "compact";
	compactDisplay: "short" | "long";
}

export function formatNumber({
	value = 0,
	notation = "compact",
	compactDisplay = "short",
}: Partial<FormatNumberConfig>) {
	const numberFormatter = new Intl.NumberFormat("en-US", {
		notation,
		compactDisplay,
	});
	return numberFormatter.format(value);
}
