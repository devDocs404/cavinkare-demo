import type { ReactElement } from "react";
import { useEffect, useState } from "react";
import { RouterProvider } from "react-router-dom";
import { SplashScreen } from "./components/ui/SplashScreen";
import { router } from "./routes";

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
