import axios, { AxiosError, AxiosResponse, CanceledError } from "axios";

import type { FetchDataParams } from "@/types";

const axiosInstance = axios.create({
	baseURL: import.meta.env.VITE_API_URL,
	params: {
		key: import.meta.env.VITE_API_KEY,
	},
});

export default class BaseService {
	async fetchData<T>(fetchPayload: FetchDataParams) {
		try {
			const response = await axiosInstance.get<T>(fetchPayload.apiUrl, {
				signal: fetchPayload.signal,
				params: fetchPayload?.params && fetchPayload.params,
			});
			return this.fetchSuccessHandler<T>(response);
		} catch (error) {
			this.fetchErrorHandler(error);
		}
	}

	private fetchErrorHandler(error: unknown) {
		if (error instanceof CanceledError) return;

		if (error instanceof AxiosError) {
			console.error(error.message);
			throw error;
		}

		throw error;
	}

	private fetchSuccessHandler<T>(response: AxiosResponse<T>) {
		return response.status === 200 ? response.data : undefined;
	}
}
