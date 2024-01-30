import routes from "@/router";

import { RouterProvider } from "react-router-dom";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
const queryClient = new QueryClient();

export default function App() {
	return (
		<main id="route-container" className="py-10">
			<QueryClientProvider client={queryClient}>
				<RouterProvider router={routes}></RouterProvider>
			</QueryClientProvider>
		</main>
	);
}
