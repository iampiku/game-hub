import { AxiosError, AxiosResponse } from "axios";
import axiosClient from "../api";

type Params = {
	id?: string;
	page: number;
	genre?: string;
	search?: string;
	page_size: number;
	platforms?: string;
};

enum API_URLS {
	BASE_URL = "/games",
	GENRES = "/genres",
	DEVELOPERS = "/developers",
	PLATFORMS = "/platforms/lists/parents",
}

const _requestErrorHandler = (error: unknown) => {
	error instanceof AxiosError
		? console.error(error.message)
		: console.error("Oops! something went wrong");
};

function _requestSuccessHandler<T>(response: AxiosResponse) {
	return response.statusText === "OK" ? (response.data as T) : null;
}

async function _makeRequest<T>(
	signal: AbortSignal,
	apiUrl: string,
	params?: Params
): Promise<T | null> {
	const apiParams = apiUrl === API_URLS.BASE_URL ? { ...params } : {};
	try {
		const response = await axiosClient.get<T>(apiUrl, {
			signal,
			params: { ...apiParams },
		});
		return _requestSuccessHandler(response);
	} catch (error) {
		_requestErrorHandler(error);
		return null;
	}
}

export async function gameDetailService<T>(
	signal: AbortSignal,
	params: Params
) {
	if ("gameId" in params)
		return _makeRequest<T>(signal, `${API_URLS.BASE_URL}/${params.gameId}`);
	else throw new Error("For game details gameId is required");
}

export async function gameService<T>(signal: AbortSignal, params: Params) {
	return _makeRequest<T>(signal, API_URLS.BASE_URL, params);
}

export async function genreService<T>(signal: AbortSignal) {
	return _makeRequest<T>(signal, API_URLS.GENRES);
}

export async function platformService<T>(signal: AbortSignal) {
	return _makeRequest<T>(signal, API_URLS.PLATFORMS);
}
