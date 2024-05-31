import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";

import { Image } from "@nextui-org/react";
import Thumbnail from "@/components/carousel/Thumbnail";

import "./css/index.css";

interface CarouselProps {
	slides: { id: number; image: string }[];
	loading: boolean;
}

export default function Carousel({ slides, loading }: Readonly<CarouselProps>) {
	const [selectedSlide, setSelectedSlide] = useState(0);
	const [emblaMainRef, emblaMainApi] = useEmblaCarousel({});
	const [emblaThumbsRef, emblaThumbsApi] = useEmblaCarousel({
		containScroll: "keepSnaps",
	});

	const onThumbnailClick = useCallback(
		(id: number) => {
			if (!emblaMainApi || !emblaThumbsApi) return;
			emblaMainApi.scrollTo(slides.findIndex((slide) => slide.id === id));
		},
		[emblaMainApi, emblaThumbsApi, slides]
	);

	const onSelect = useCallback(() => {
		if (!emblaMainApi || !emblaThumbsApi) return;

		const selectedIndex = emblaMainApi.selectedScrollSnap();
		const gameId = slides[selectedIndex]?.id ?? null;
		setSelectedSlide(gameId);
		emblaThumbsApi.scrollTo(selectedIndex);
	}, [emblaMainApi, emblaThumbsApi, setSelectedSlide, slides]);

	useEffect(() => {
		if (!emblaMainApi) return;
		onSelect();

		emblaMainApi.on("select", onSelect).on("init", onSelect);
	}, [emblaMainApi, onSelect]);

	return (
		<>
			<div className="embla pb-2">
				<div className="embla__viewport" ref={emblaMainRef}>
					<div className="embla__container">
						{slides.map((slide) => (
							<div className="embla__slide" key={slide.id}>
								<Image
									width={"100%"}
									object-fit="fill"
									src={slide.image}
									isLoading={loading}
								></Image>
							</div>
						))}
					</div>
				</div>
			</div>
			<div className="embla-thumbs px-2">
				<div className="embla-thumbs__viewport" ref={emblaThumbsRef}>
					<div className="embla-thumbs__container gap-2">
						{slides.map((slide) => (
							<Thumbnail
								key={slide.id}
								thumbnail={slide}
								onClick={onThumbnailClick}
								selected={slide.id === selectedSlide}
							/>
						))}
					</div>
				</div>
			</div>
		</>
	);
}
