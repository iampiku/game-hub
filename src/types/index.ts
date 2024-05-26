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
	platforms: PlatformElement[];
	parent_platforms: ParentPlatform[];
	genres: Genre[];
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
	language?: string;
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
	title: string;
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

export type GenreMenu = {
	id: number;
	label: string;
	type: "genre";
	imageUrl: string;
	_selected: boolean;
};

export type Menu = {
	label: string;
	type: "menu";
	menuType: "newRelease" | "topGames" | "platforms";
	icon: JSX.Element;
	_selected: boolean;
};

export type MenuList = GenreMenu | Menu;

export type GameDetails = {
	id: number;
	slug: string;
	name: string;
	name_original: string;
	description: string;
	metacritic: number;
	released: Date;
	tba: boolean;
	updated: Date;
	background_image: string;
	background_image_additional: string;
	website: string;
	rating: number;
	rating_top: number;
	ratings: Rating[];
	reactions: { [key: string]: number };
	added: number;
	added_by_status: AddedByStatus;
	playtime: number;
	screenshots_count: number;
	movies_count: number;
	creators_count: number;
	achievements_count: number;
	parent_achievements_count: number;
	reddit_url: string;
	reddit_name: string;
	reddit_description: string;
	reddit_logo: string;
	reddit_count: number;
	twitch_count: number;
	youtube_count: number;
	reviews_text_count: number;
	ratings_count: number;
	suggestions_count: number;
	alternative_names: string[];
	metacritic_url: string;
	parents_count: number;
	additions_count: number;
	game_series_count: number;
	user_game: null;
	reviews_count: number;
	saturated_color: string;
	dominant_color: string;
	parent_platforms: ParentPlatform[];
	platforms: PlatformElement[];
	stores: Store[];
	developers: Developer[];
	genres: Developer[];
	tags: Developer[];
	publishers: Developer[];
	esrb_rating: EsrbRating;
	clip: null;
	description_raw: string;
};

export interface Developer {
	id: number;
	name: string;
	slug: string;
	games_count: number;
	image_background: string;
	domain?: string;
	language?: Language;
}
