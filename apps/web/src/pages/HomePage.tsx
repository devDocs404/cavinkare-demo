import type { ReactElement } from "react";
import { CareersSection } from "../components/sections/CareersSection";
import { CompanyStats } from "../components/sections/CompanyStats";
import { Contact } from "../components/sections/Contact";
import { Hero } from "../components/sections/Hero";
import { InsideCavinKare } from "../components/sections/InsideCavinKare";
import { OurBrand } from "../components/sections/OurBrand";
import { PurposeSection } from "../components/sections/PurposeSection";
import { TimelineSection } from "../components/sections/TimelineSection";

export function HomePage(): ReactElement {
	return (
		<>
			<Hero />
			<InsideCavinKare />
			<CompanyStats />
			<OurBrand />
			<TimelineSection />
			<CareersSection />
			<PurposeSection />
			<Contact />
		</>
	);
}
