import { useState, useEffect } from "react";
import type { ReactElement } from "react";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes";
import { SplashScreen } from "./components/ui/SplashScreen";

export function App(): ReactElement {
	const [showSplash, setShowSplash] = useState(true);

	// Hide scrollbar when splash is active
	useEffect(() => {
		if (showSplash) {
			document.body.style.overflow = "hidden";
		} else {
			document.body.style.overflow = "unset";
		}
		return () => {
			document.body.style.overflow = "unset";
		};
	}, [showSplash]);

	return (
		<>
			{showSplash && <SplashScreen onComplete={() => setShowSplash(false)} />}
			<RouterProvider router={router} />
		</>
	);
}
