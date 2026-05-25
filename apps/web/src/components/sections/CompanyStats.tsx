import type { ReactElement } from "react";
import { StatCard } from "./stats/StatCard";

import {
	FadeInStaggerContainer,
	FadeInStaggerItem,
} from "../ui/motion/FadeInStagger";
import thirtyYears from "../../assets/30YearsStats.svg";
import exports from "../../assets/exportsStatus.png";
import patients from "../../assets/patientsStatus.svg";
import consumerScore from "../../assets/consumerScore.svg";
import retail from "../../assets/retail.svg";
import sustainable from "../../assets/sustainable.svg";
import sachets from "../../assets/sachets.svg";
import csr from "../../assets/csr.svg";
import herbal from "../../assets/herbal.svg";

export function CompanyStats(): ReactElement {
	const imgHoverClass =
		"w-full h-auto object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]";

	return (
		<section
			id="company-stats"
			aria-label="Company statistics"
			className="relative w-full overflow-hidden bg-white px-6 py-24 md:px-12 dark:bg-slate-950"
		>
			<div className="mx-auto max-w-7xl">
				<FadeInStaggerContainer className="grid grid-cols-1 gap-4 md:grid-cols-4 md:gap-6">
					{/* Column 1 */}
					<div className="col-span-1 flex flex-col gap-4 md:gap-6">
						{/* 91% Consumer Satisfaction */}
						<StatCard>
							<img
								src={consumerScore}
								alt="Consumer Score"
								className={imgHoverClass}
							/>
						</StatCard>

						{/* 1.5M+ Retail Touchpoints */}
						<StatCard>
							<img src={retail} alt="Retail" className={imgHoverClass} />
						</StatCard>
					</div>

					{/* Column 2 & 3 */}
					<div className="col-span-1 flex flex-col gap-4 md:col-span-2 md:gap-6">
						<div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-6">
							{/* 25+ Countries */}
							<StatCard className="">
								<img src={exports} alt="Exports" className={imgHoverClass} />
							</StatCard>

							{/* 16+ Patents */}
							<StatCard className="">
								<img src={patients} alt="Patients" className={imgHoverClass} />
							</StatCard>
						</div>

						{/* 30+ Years of Innovation */}
						<FadeInStaggerItem className="group relative overflow-hidden rounded-2xl shadow-sm transition-all duration-500 ease-out hover:-translate-y-1.5 hover:shadow-xl hover:shadow-black/10 dark:hover:shadow-white/5">
							<img
								src={thirtyYears}
								alt="Thirty Years"
								className={imgHoverClass}
							/>
						</FadeInStaggerItem>

						{/* 1.2M+ Lives Impacted */}
						<StatCard>
							<img src={csr} alt="CSR" className={imgHoverClass} />
						</StatCard>
					</div>

					{/* Column 4 */}
					<div className="col-span-1 flex flex-col gap-4 md:gap-6">
						{/* 44% Sustainable Packaging Rate */}
						<StatCard>
							<img
								src={sustainable}
								alt="Sustainable"
								className={imgHoverClass}
							/>
						</StatCard>

						{/* 62% Of products */}
						<StatCard className="">
							<img src={herbal} alt="Herbal" className={imgHoverClass} />
						</StatCard>

						{/* 19M+ CHIK */}
						<StatCard>
							<img src={sachets} alt="Sachets" className={imgHoverClass} />
						</StatCard>
					</div>
				</FadeInStaggerContainer>
			</div>
		</section>
	);
}
