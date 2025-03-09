import BaseService from "@/api";

import type {
	Games,
	Genre,
	Store,
	Params,
	Developer,
	Screenshot,
	ParentPlatform,
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
	gameService(signal: AbortSignal, params: Params) {
		const apiUrl = params?.id
			? `${BASE_API_URLS.BASE_URL}/${params.id}`
			: BASE_API_URLS.BASE_URL;

		return this.fetchData<Games>({ apiUrl, signal, params });
	}

	gameScreenShotService(signal: AbortSignal, params: Params) {
		if (!params?.game_pk) return;
		return this.fetchData<Screenshot>({
			signal,
			params,
			apiUrl: `${BASE_API_URLS.BASE_URL}/${params.game_pk}/screenshots`,
		});
	}

	genreService(signal: AbortSignal) {
		return this.fetchData<Genre>({ signal, apiUrl: BASE_API_URLS.GENRES });
	}

	platformService(signal: AbortSignal) {
		return this.fetchData<ParentPlatform>({
			signal,
			apiUrl: BASE_API_URLS.PLATFORMS,
		});
	}

	developerService(signal: AbortSignal) {
		return this.fetchData<Developer>({
			signal,
			apiUrl: BASE_API_URLS.DEVELOPERS,
		});
	}

	storeService(signal: AbortSignal) {
		return this.fetchData<Store>({ signal, apiUrl: BASE_API_URLS.STORES });
	}

	publisherService(signal: AbortSignal) {
		return this.fetchData({ signal, apiUrl: BASE_API_URLS.PUBLISHER });
	}
}

const gameServiceInstance = new GameService();

export default gameServiceInstance;
