import routes from "@/router";

import { RouterProvider } from "react-router-dom";

export default function App() {
	return (
		<main id="route-container">
			<RouterProvider router={routes}></RouterProvider>
		</main>
	);
}
