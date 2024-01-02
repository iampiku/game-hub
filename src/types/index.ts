export type Filters = {
	years: FiltersYear[];
};

export type FiltersYear = {
	from: number;
	to: number;
	filter: string;
	decade: number;
	years: YearYear[];
	nofollow: boolean;
	count: number;
};

export type YearYear = {
	year: number;
	count: number;
	nofollow: boolean;
};

export type Games = {
	id: number;
	slug: string;
	name: string;
	released: string;
	tba: boolean;
	background_image: string;
	rating: number;
	rating_top: number;
	ratings: Rating[];
	ratings_count: number;
	reviews_text_count: number;
	added: number;
	added_by_status: AddedByStatus;
	metacritic: number;
	playtime: number;
	suggestions_count: number;
	updated: string;
	reviews_count: number;
	saturated_color: Color;
	dominant_color: Color;
	platforms: PlatformElement[];
	parent_platforms: ParentPlatform[];
	genres: Genre[];
	stores: Store[];
	tags: Genre[];
	esrb_rating: EsrbRating;
	short_screenshots: ShortScreenshot[];
};

export type AddedByStatus = {
	yet: number;
	owned: number;
	beaten: number;
	toplay: number;
	dropped: number;
	playing: number;
};

export type Color = "0f0f0f";

export type EsrbRating = {
	id: number;
	name: string;
	slug: string;
};

export type Genre = {
	id: number;
	name: string;
	slug: string;
	games_count: number;
	image_background: string;
	domain?: Domain;
	language?: Language;
};

export type Domain =
	| "store.playstation.com"
	| "epicgames.com"
	| "store.steampowered.com"
	| "marketplace.xbox.com"
	| "microsoft.com"
	| "gog.com"
	| "nintendo.com"
	| "play.google.com"
	| "apps.apple.com";

export type Language = "eng";

export type ParentPlatform = {
	platform: EsrbRating;
};

export type PlatformElement = {
	platform: PlatformPlatform;
	released_at: string;
	requirements_en: Requirements | null;
	requirements_ru: Requirements | null;
};

export type PlatformPlatform = {
	id: number;
	name: string;
	slug: string;
	image: null;
	year_end: null;
	year_start: number | null;
	games_count: number;
	image_background: string;
};

export type Requirements = {
	minimum: string;
	recommended?: string;
};

export type Rating = {
	id: number;
	title: Title;
	count: number;
	percent: number;
};

export type Title = "exceptional" | "recommended" | "meh" | "skip";

export type ShortScreenshot = {
	id: number;
	image: string;
};

export type Store = {
	id: number;
	store: Genre;
};