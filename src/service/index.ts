import { AxiosError, AxiosResponse, CanceledError } from "axios";
import axiosClient from "../api";

type Params = {
	id?: string;
	page?: number;
	genres?: string;
	game_pk: string | null;
	search?: string;
	page_size?: number;
	platforms?: string;
};

enum BASE_API_URLS {
	STORES = "/stores",
	BASE_URL = "/games",
	GENRES = "/genres",
	PUBLISHER = "/publishers",
	DEVELOPERS = "/developers",
	PLATFORMS = "/platforms/lists/parents",
}

const _requestErrorHandler = (error: unknown) => {
	if (error instanceof CanceledError) return;
	error instanceof AxiosError
		? console.error(error.message)
		: console.error("Oops! something went wrong");
};

function _requestSuccessHandler<T>(response: AxiosResponse) {
	return response.status === 200 ? (response.data as T) : null;
}

async function _makeRequest<T>(
	signal: AbortSignal,
	apiUrl: string,
	params?: Params
): Promise<T | null> {
	const apiParams =
		apiUrl === BASE_API_URLS.BASE_URL && params ? { ...params } : {};
	try {
		const response = await axiosClient.get<T>(apiUrl, {
			signal,
			params: { ...apiParams },
		});
		return _requestSuccessHandler<T>(response);
	} catch (error) {
		_requestErrorHandler(error);
		return null;
	}
}

export function gameService<T>(
	signal: AbortSignal,
	params: Params
): Promise<T | null> {
	const apiUrl = params.id
		? `${BASE_API_URLS.BASE_URL}/${params.id}`
		: BASE_API_URLS.BASE_URL;
	return _makeRequest<T>(signal, apiUrl, params);
}

export async function genreService<T>(signal: AbortSignal) {
	return _makeRequest<T>(signal, BASE_API_URLS.GENRES);
}

export async function platformService<T>(signal: AbortSignal) {
	return _makeRequest<T>(signal, BASE_API_URLS.PLATFORMS);
}

export async function developerService<T>(signal: AbortSignal) {
	return _makeRequest<T>(signal, BASE_API_URLS.DEVELOPERS);
}

export async function storeService<T>(signal: AbortSignal) {
	return _makeRequest<T>(signal, BASE_API_URLS.STORES);
}

export async function publisherService<T>(signal: AbortSignal) {
	return _makeRequest<T>(signal, BASE_API_URLS.PUBLISHER);
}

export async function screenshotService<T>(
	signal: AbortSignal,
	params: Params
) {
	if (params.game_pk) {
		const apiUrl = `${BASE_API_URLS.BASE_URL}/${params.game_pk}/screenshots`;
		return _makeRequest<T>(signal, apiUrl);
	} else throw new Error("For game screenshots id is required");
}
