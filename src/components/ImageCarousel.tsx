import { AnimatePresence, motion } from "framer-motion";

type ImageItem = {
	id: string;
	src: string;
	alt: string;
};

interface Props {
	imageItems: ImageItem[];
}

import { Image, Card, CardBody } from "@nextui-org/react";

export default function ImageCarousel({ imageItems }: Readonly<Props>) {
	return (
		<AnimatePresence>
			<motion.div className="">
				<motion.div
					drag="x"
					className="flex gap-2 p-24"
					dragConstraints={{ right: 0, left: -1100 }}
					dragTransition={{ bounceStiffness: 600, bounceDamping: 8 }}
					animate={{ scale: [1, 1, 1, 1, 1], rotate: [0, 30, 60, 240, 360] }}
				>
					{imageItems.map((image) => {
						return (
							<motion.div
								key={image.id}
								whileHover={{ scale: 1.2 }}
								whileTap={{ scale: 2 }}
								transition={{ duration: 3 }}
							>
								<Card isBlurred isHoverable className="max-w-[800px]">
									<CardBody>
										<Image src={image.src} alt={image.alt}></Image>
									</CardBody>
								</Card>
							</motion.div>
						);
					})}
				</motion.div>
			</motion.div>
		</AnimatePresence>
	);
}
