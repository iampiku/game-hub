import { useEffect, useState } from "react";

import apiClient from "@/api";
import { CanceledError } from "axios";

export default function useFetch<T>(endPoint: string) {
	const [data, setData] = useState<T | null>(null);
	const [loading, setLoading] = useState(false);
	const [errorMessage, setErrorMessage] = useState("");

	useEffect(() => {
		setLoading(true);
		const controller = new AbortController();

		apiClient
			.get(endPoint)
			.then((response) => setData(response.data))
			.catch((error) => {
				if (error instanceof CanceledError) return;
				setErrorMessage(error.toString());
				setData(null);
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
