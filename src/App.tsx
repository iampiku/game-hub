import routes from "@/router";

import { RouterProvider } from "react-router-dom";

export default function App() {
	return (
		<div className="dark text-foreground bg-background">
			<RouterProvider router={routes}></RouterProvider>
		</div>
	);
}
