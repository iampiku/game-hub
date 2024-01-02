import Home from "@/views/Home";

import { createBrowserRouter } from "react-router-dom";

const routes = createBrowserRouter([
	{
		path: "/",
		Component: Home,
	},
]);

export default routes;
