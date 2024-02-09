import useEmblaCarousel from "embla-carousel-react";

type ImageItem = {
	id: string;
	src: string;
	alt: string;
};

interface Props {
	imageItems: ImageItem[];
}

import { flushSync } from "react-dom";
import { useState, useCallback, useEffect } from "react";

import { Image } from "@nextui-org/react";

const TWEEN_FACTOR = 1.2;

export default function ImageCarousel({ imageItems }: Readonly<Props>) {
	const [tweenValues, setTweenValues] = useState<number[]>([]);
	const [emblaRef, emblaApi] = useEmblaCarousel();

	const onScroll = useCallback(() => {
		if (!emblaApi) return;

		const engine = emblaApi.internalEngine();
		const scrollProgress = emblaApi.scrollProgress();

		const styles = emblaApi.scrollSnapList().map((scrollSnap, index) => {
			let diffToTarget = scrollSnap - scrollProgress;

			if (engine.options.loop) {
				engine.slideLooper.loopPoints.forEach((loopItem) => {
					const target = loopItem.target();
					if (index === loopItem.index && target !== 0) {
						const sign = Math.sign(target);
						if (sign === -1) diffToTarget = scrollSnap - (1 + scrollProgress);
						if (sign === 1) diffToTarget = scrollSnap + (1 - scrollProgress);
					}
				});
			}
			return diffToTarget * (-1 / TWEEN_FACTOR) * 100;
		});
		setTweenValues(styles);
	}, [emblaApi, setTweenValues]);

	useEffect(() => {
		if (!emblaApi) return;
		onScroll();
		emblaApi.on("scroll", () => {
			flushSync(() => onScroll());
		});
		emblaApi.on("reInit", onScroll);
	}, [emblaApi, onScroll]);

	return (
		<div className="embla">
			<div className="embla__viewport" ref={emblaRef}>
				<div className="embla__container">
					{imageItems.map((imageItem, index) => (
						<div className="embla__slide" key={imageItem.id}>
							<div className="embla__parallax">
								<div
									className="embla__parallax__layer"
									style={{
										...(tweenValues.length && {
											transform: `translateX(${tweenValues[index]}%)`,
										}),
									}}
								>
									<Image
										isZoomed
										isBlurred
										className="embla__slide__img"
										src={imageItem.src}
										alt={imageItem.alt}
									/>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
