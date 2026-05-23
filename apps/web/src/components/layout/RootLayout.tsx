import type { ReactElement } from "react";
import { Outlet } from "react-router-dom";
import { Footer } from "./Footer";
import { Navbar } from "./Navbar";
import { TopBanner } from "./TopBanner";

export function RootLayout(): ReactElement {
	return (
		<div className="min-h-screen bg-white font-host transition-colors duration-300 dark:bg-slate-950">
			<a
				href="#main-content"
				className="sr-only focus:not-sr-only focus:absolute focus:z-[100] focus:bg-brand-red focus:p-4 focus:text-white"
			>
				Skip to main content
			</a>
			<TopBanner />
			<Navbar />
			<main id="main-content">
				<Outlet />
			</main>
			<Footer />
		</div>
	);
}
