import type { ReactElement } from "react";
import { Footer } from "./components/layout/Footer";
import { Navbar } from "./components/layout/Navbar";
import { TopBanner } from "./components/layout/TopBanner";
import { CareersSection } from "./components/sections/CareersSection";
import { CompanyStats } from "./components/sections/CompanyStats";
import { Contact } from "./components/sections/Contact";
import { Hero } from "./components/sections/Hero";
import { InsideCavinKare } from "./components/sections/InsideCavinKare";
import { OurBrand } from "./components/sections/OurBrand";
import { PurposeSection } from "./components/sections/PurposeSection";

export function App(): ReactElement {
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
				<Hero />
				<InsideCavinKare />
				<CompanyStats />
				<OurBrand />
				<PurposeSection />
				<CareersSection />
				<Contact />
			</main>
			<Footer />
		</div>
	);
}
