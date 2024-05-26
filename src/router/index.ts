import Home from "@/views/Home";
import GameInfo from "@/views/GameInfo";

import { createBrowserRouter } from "react-router-dom";

const routes = createBrowserRouter([
	{
		path: "/",
		Component: Home,
	},
	{
		path: "/game/:id",
		Component: GameInfo,
	},
]);

export default routes;
