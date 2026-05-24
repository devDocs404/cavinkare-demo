import { createBrowserRouter } from "react-router-dom";
import { RootLayout } from "../components/layout/RootLayout";
import { HomePage } from "../pages/HomePage";
import { MediaPage } from "../pages/MediaPage";
import { MediaArticlePage } from "../pages/MediaArticlePage";

export const router = createBrowserRouter([
	{
		path: "/",
		element: <RootLayout />,
		children: [
			{
				index: true,
				element: <HomePage />,
			},
			{
				path: "organisation/media",
				element: <MediaPage />,
			},
			{
				path: "organisation/media/:id",
				element: <MediaArticlePage />,
			},
		],
	},
]);
