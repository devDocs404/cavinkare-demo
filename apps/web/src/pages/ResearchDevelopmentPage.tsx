import { useEffect } from "react";
import { RndHero } from "../components/sections/rnd/RndHero";
import { RndHighlights } from "../components/sections/rnd/RndHighlights";
import { RndProcess } from "../components/sections/rnd/RndProcess";
import { RndPartner } from "../components/sections/rnd/RndPartner";

export function ResearchDevelopmentPage() {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<main className="flex w-full flex-col bg-white dark:bg-slate-950">
			<RndHero />
			<RndHighlights />
			<RndProcess />
			<RndPartner />
		</main>
	);
}
