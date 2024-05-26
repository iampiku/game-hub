import { useCallback, useMemo } from "react";
import { NavigateOptions, useSearchParams } from "react-router-dom";

export default function useQueryParams<T>(
	key: string
): [
	value: T | null,
	setValue: (newValue: T, options?: NavigateOptions) => void
] {
	const [searchParams, setSearchParams] = useSearchParams();
	const params = searchParams.get(key);

	const value = useMemo<T | null>(() => {
		if (!params) return null;

		try {
			return JSON.parse(decodeURIComponent(params));
		} catch (error) {
			console.error(error);
			return null;
		}
	}, [params]);

	const setValue: (newValue: T, options?: NavigateOptions) => void =
		useCallback(
			(newValue: T, options?: NavigateOptions) => {
				const newSearchParams = new URLSearchParams(searchParams);
				newSearchParams.set(key, encodeURIComponent(JSON.stringify(newValue)));
				setSearchParams(newSearchParams, options);
			},
			[key, searchParams, setSearchParams]
		);

	return [value, setValue];
}
