import routes from "@/router";

import { RouterProvider } from "react-router-dom";

export default function App() {
	return (
		<main id="route-container" className="py-10">
			<RouterProvider router={routes}></RouterProvider>
		</main>
	);
}
