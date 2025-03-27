import BaseService from "@/api";

import type {
	Params,
	GameResponse,
	GenreResponse,
	StoreResponse,
	PlatformResponse,
	DeveloperResponse,
	GameDetails,
	ScreenshotResponse,
} from "@/types";

enum BASE_API_URLS {
	STORES = "/stores",
	BASE_URL = "/games",
	GENRES = "/genres",
	PUBLISHER = "/publishers",
	DEVELOPERS = "/developers",
	PLATFORMS = "/platforms/lists/parents",
}

class GameService extends BaseService {
	gameService(signal: AbortSignal, params: Partial<Params>) {
		return this.fetchData<GameResponse>({
			apiUrl: BASE_API_URLS.BASE_URL,
			signal,
			params,
		});
	}

	gameDetailsService(signal: AbortSignal, gameId: string) {
		const apiUrl = `${BASE_API_URLS.BASE_URL}/${gameId}`;
		return this.fetchData<GameDetails>({
			apiUrl,
			signal,
			params: { id: gameId },
		});
	}

	gameScreenShotService(
		signal: AbortSignal,
		params: { game_pk: string } & Partial<Omit<Params, "game_pk">>
	) {
		return this.fetchData<ScreenshotResponse>({
			signal,
			params,
			apiUrl: `${BASE_API_URLS.BASE_URL}/${params.game_pk}/screenshots`,
		});
	}

	genreService(signal: AbortSignal) {
		return this.fetchData<GenreResponse>({
			signal,
			apiUrl: BASE_API_URLS.GENRES,
		});
	}

	platformService(signal: AbortSignal) {
		return this.fetchData<PlatformResponse>({
			signal,
			apiUrl: BASE_API_URLS.PLATFORMS,
		});
	}

	developerService(signal: AbortSignal) {
		return this.fetchData<DeveloperResponse>({
			signal,
			apiUrl: BASE_API_URLS.DEVELOPERS,
		});
	}

	storeService(signal: AbortSignal) {
		return this.fetchData<StoreResponse>({
			signal,
			apiUrl: BASE_API_URLS.STORES,
		});
	}

	// TODO Add type definition for this endpoint
	publisherService(signal: AbortSignal) {
		return this.fetchData({ signal, apiUrl: BASE_API_URLS.PUBLISHER });
	}
}

const gameServiceInstance = new GameService();

export default gameServiceInstance;
