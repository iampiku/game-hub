import { Card, CardBody, Skeleton } from "@nextui-org/react";

export default function GameCardSkeleton() {
	return (
		<Card
			isBlurred
			isHoverable
			className="shadow-lg mb-3 bg-white/10 lg:max-w-[480px]"
		>
			<CardBody>
				<Skeleton className="rounded-lg mb-4">
					<div className="h-[240px] rounded-lg bg-default-300"></div>
				</Skeleton>
				<div className="space-y-3">
					<div className="flex gap-2">
						<Skeleton className="w-[35px] rounded-3xl">
							<div className="h-7  rounded-3xl bg-default-200"></div>
						</Skeleton>
						<Skeleton className="w-[35px] rounded-3xl">
							<div className="h-7  rounded-3xl bg-default-200"></div>
						</Skeleton>
						<Skeleton className="w-[35px] rounded-3xl">
							<div className="h-7  rounded-3xl bg-default-200"></div>
						</Skeleton>
					</div>
					<Skeleton className="w-4/5 rounded-lg">
						<div className="h-4 w-4/5 rounded-lg bg-default-200"></div>
					</Skeleton>
					<Skeleton className="w-2/5 rounded-lg">
						<div className="h-4 w-2/5 rounded-lg bg-default-300"></div>
					</Skeleton>
				</div>
			</CardBody>
		</Card>
	);
}
