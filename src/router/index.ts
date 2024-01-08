import Home from "@/views/Home";
import SearchInfo from "@/views/SearchInfo";

import { createBrowserRouter } from "react-router-dom";

const routes = createBrowserRouter([
	{
		path: "/",
		Component: Home,
	},
	{
		path: "/game/:id",
		Component: SearchInfo,
	},
]);

export default routes;
