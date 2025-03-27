import Home from "@/views/Home";
import GameInfo from "@/views/GameInfo";
import React from "react";
import { createBrowserRouter } from "react-router-dom";
import ErrorBoundary from "@/components/ErrorBoundary";

const routes = createBrowserRouter([
	{
		path: "/",
		Component: Home,
		errorElement: React.createElement(ErrorBoundary),
	},
	{
		path: "/game/:id",
		Component: GameInfo,
		errorElement: React.createElement(ErrorBoundary),
	},
]);

export default routes;
