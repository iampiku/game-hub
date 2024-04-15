import { useEffect, useState } from "react";

import apiClient from "@/api";
import { AxiosError, CanceledError } from "axios";

export default function useFetch<T>(endPoint: string) {
	const [data, setData] = useState<T | null>(null);
	const [loading, setLoading] = useState(false);
	const [errorMessage, setErrorMessage] = useState<string | null>(null);

	useEffect(() => {
		setLoading(true);
		const controller = new AbortController();

		apiClient
			.get<T>(endPoint, {
				signal: controller.signal,
			})
			.then((response) => {
				setData(response.data);
				setErrorMessage(null);
			})
			.catch((error: AxiosError) => {
				if (error instanceof CanceledError) return;

				setData(null);
				setErrorMessage(error.message);
			})
			.finally(() => setLoading(false));

		return () => controller.abort();
	}, [endPoint]);

	return {
		data,
		loading,
		errorMessage,
	};
}
