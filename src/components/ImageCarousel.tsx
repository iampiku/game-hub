import "@/styles/embla.css";

import { flushSync } from "react-dom";

/**
 * Components
 */
import { Image, Spinner } from "@nextui-org/react";

/**
 * Hooks
 */
import useEmblaCarousel from "embla-carousel-react";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { useState, useCallback, useEffect } from "react";

/**
 * Api service
 */
import { screenshotService } from "@/service";

const TWEEN_FACTOR = 1.2;

export default function ImageCarousel() {
	const { id } = useParams();
	const [emblaRef, emblaApi] = useEmblaCarousel();
	const [tweenValues, setTweenValues] = useState<number[]>([]);

	const [screenshots, setScreenshots] = useState<
		{ id: number; src: string; alt: string }[]
	>([]);

	const { data, isLoading } = useQuery({
		queryKey: ["screenshots"],
		queryFn: ({ signal }) =>
			screenshotService<{ results: { id: number; image: string }[] }>(signal, {
				game_pk: id,
			}),
	});

	useEffect(() => {
		if (data?.results) {
			const screenshots = data.results.map(({ id, image }) => ({
				id,
				src: image,
				alt: "game_screenshot",
			}));
			setScreenshots(screenshots);
		}
	}, [data?.results]);

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
	}, [emblaApi]);

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
			<div
				className="embla__viewport flex justify-center items-center"
				ref={emblaRef}
			>
				<div className="embla__container ">
					{isLoading && (
						<Spinner
							size="lg"
							className="pt-[140px]"
							label="Loading game screen-shots..."
						></Spinner>
					)}
					{screenshots.map((imageItem, index) => (
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
										isBlurred
										radius="none"
										content="cover"
										src={imageItem.src}
										alt={imageItem.alt}
										isLoading={isLoading}
										className="embla__slide__img cursor-grab active:cursor-grabbing"
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
