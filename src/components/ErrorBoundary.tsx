import { useRouteError } from "react-router-dom";

export default function ErrorBoundary() {
	const routeError = useRouteError();

	return <p>{JSON.stringify(routeError)}</p>;
}
