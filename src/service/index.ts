import { AxiosError, AxiosResponse, CanceledError } from "axios";
import axiosClient from "../api";

type Params = {
	id?: string;
	page?: number;
	genres?: string;
	game_pk?: string;
	search?: string;
	page_size?: number;
	platforms?: string;
};

enum BASE_API_URLS {
	BASE_URL = "/games",
	GENRES = "/genres",
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
) {
	const apiParams =
		apiUrl === BASE_API_URLS.BASE_URL && params ? { ...params } : {};
	try {
		const response = await axiosClient.get<T>(apiUrl, {
			signal,
			params: { ...apiParams },
		});
		return _requestSuccessHandler<T>(response);
	} catch (error) {
		return _requestErrorHandler(error);
	}
}

export async function gameDetailService<T>(
	signal: AbortSignal,
	params: Params
) {
	if ("id" in params)
		return _makeRequest<T>(signal, `${BASE_API_URLS.BASE_URL}/${params.id}`);
	else throw new Error("For game details id is required");
}

export async function gameService<T>(signal: AbortSignal, params: Params) {
	return _makeRequest<T>(signal, BASE_API_URLS.BASE_URL, params);
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

export async function screenshotService<T>(
	signal: AbortSignal,
	params: Params
) {
	if ("game_pk" in params) {
		const apiUrl = `${BASE_API_URLS.BASE_URL}/${params.game_pk}/screenshots`;
		return _makeRequest<T>(signal, apiUrl);
	} else throw new Error("For game screenshots id is required");
}
