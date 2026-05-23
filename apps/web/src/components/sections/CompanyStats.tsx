import { Star } from "lucide-react";
import type { ReactElement } from "react";
import { DocumentIcon } from "../../../../../packages/ui/src/components/icons/DocumentIcon";
import { LeafIcon } from "../../../../../packages/ui/src/components/icons/LeafIcon";
import { StatCard } from "./stats/StatCard";

export function CompanyStats(): ReactElement {
	return (
		<section
			id="company-stats"
			className="relative w-full overflow-hidden bg-white px-6 py-24 md:px-12 dark:bg-slate-950"
		>
			<div className="mx-auto max-w-7xl">
				<div className="grid grid-cols-1 gap-4 md:grid-cols-4 md:gap-6">
					{/* Column 1 */}
					<div className="col-span-1 flex flex-col gap-4 md:gap-6">
						{/* 91% Consumer Satisfaction */}
						<StatCard className="min-h-[260px] justify-start">
							<h3 className="text-5xl font-extrabold tracking-tight text-brand-dark md:text-6xl dark:text-white">
								91<span className="text-brand-blue dark:text-blue-400">%</span>
							</h3>
							<p className="mt-4 text-xl leading-tight font-bold text-brand-dark dark:text-slate-300">
								Consumer
								<br />
								Satisfaction
								<br />
								Score
							</p>
							<div className="mt-auto flex gap-1 pt-6">
								{[1, 2, 3, 4, 5].map((id) => (
									<Star
										key={id}
										size={20}
										className="fill-brand-blue text-brand-blue dark:fill-blue-400 dark:text-blue-400"
									/>
								))}
							</div>
						</StatCard>

						{/* 1.5M+ Retail Touchpoints */}
						<StatCard className="min-h-[260px] justify-between">
							<div className="absolute -right-16 -bottom-16 h-72 w-72 rounded-full bg-linear-to-tl from-brand-red-deep to-brand-red-light opacity-90 blur-2xl transition-transform duration-700 group-hover:scale-110"></div>
							<h3 className="relative z-10 flex items-center justify-start text-5xl font-extrabold text-brand-red-light md:text-6xl dark:text-red-400">
								1.5M<span className="text-brand-red dark:text-red-500">+</span>
							</h3>
							<p className="relative z-10 mt-auto pt-8 text-right text-2xl leading-tight font-bold text-white drop-shadow-lg">
								Retail
								<br />
								Touchpoints
								<br />
								Globally
							</p>
						</StatCard>
					</div>

					{/* Column 2 & 3 */}
					<div className="col-span-1 flex flex-col gap-4 md:col-span-2 md:gap-6">
						<div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6">
							{/* 25+ Countries */}
							<StatCard className="min-h-[180px] justify-center">
								<div className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-5 transition-transform duration-700 group-hover:scale-105 dark:opacity-10">
									<div
										className="h-full w-full opacity-50"
										style={{
											backgroundImage:
												"radial-gradient(var(--color-brand-blue) 2px, transparent 2px)",
											backgroundSize: "20px 20px",
										}}
									></div>
								</div>
								<p className="z-10 text-sm font-bold text-brand-dark dark:text-slate-300">
									Exports to{" "}
									<span className="text-brand-blue dark:text-blue-400">
										Over
									</span>
								</p>
								<h3 className="z-10 my-2 text-6xl font-extrabold text-brand-dark dark:text-white">
									25
									<span className="text-brand-blue dark:text-blue-400">+</span>
								</h3>
								<p className="z-10 text-sm font-bold text-brand-dark dark:text-slate-300">
									Countries
								</p>
							</StatCard>

							{/* 16+ Patents */}
							<StatCard className="min-h-[180px] justify-center">
								<div className="pointer-events-none absolute right-4 bottom-4 text-brand-blue opacity-5 transition-transform duration-700 group-hover:scale-110 group-hover:-rotate-3 dark:text-blue-400 dark:opacity-10">
									<DocumentIcon width={120} height={120} />
								</div>
								<h3 className="z-10 my-2 text-6xl font-extrabold text-brand-dark dark:text-white">
									16
									<span className="text-brand-blue dark:text-blue-400">+</span>
								</h3>
								<p className="z-10 text-sm font-bold text-brand-dark dark:text-slate-300">
									Patents{" "}
									<span className="text-brand-blue dark:text-blue-400">
										Filed
									</span>
								</p>
							</StatCard>
						</div>

						{/* 30+ Years of Innovation */}
						<div className="group relative flex min-h-[220px] flex-col items-center justify-center overflow-hidden rounded-3xl bg-linear-to-br from-brand-red to-brand-red-deep p-10 text-white shadow-lg transition-shadow hover:shadow-md md:min-h-[260px] dark:from-red-900 dark:to-red-950">
							<div className="pointer-events-none absolute inset-0">
								<div className="absolute top-[20%] left-[20%] h-2 w-2 animate-pulse rounded-full bg-white opacity-60 blur-[1px]"></div>
								<div className="absolute top-[30%] right-[25%] h-3 w-3 animate-pulse rounded-full bg-white opacity-40 blur-[2px] delay-75"></div>
								<div className="absolute bottom-[25%] left-[35%] h-2 w-2 animate-pulse rounded-full bg-white opacity-80 blur-[1px] delay-150"></div>
								<div className="absolute right-[20%] bottom-[30%] h-4 w-4 animate-pulse rounded-full bg-white opacity-30 blur-[3px] delay-300"></div>
							</div>

							<h3 className="relative z-10 text-7xl font-extrabold tracking-tight transition-transform duration-700 group-hover:scale-105 md:text-8xl">
								30<span className="text-white/80">+</span>
							</h3>
							<p className="relative z-10 mt-4 text-sm font-semibold tracking-[0.25em] text-white/90 uppercase">
								Years of Innovation
							</p>
						</div>

						{/* 1.2M+ Lives Impacted */}
						<StatCard className="flex-row! items-center! p-8! sm:min-h-[120px]">
							<h3 className="mr-6 shrink-0 text-4xl font-extrabold text-brand-dark transition-transform duration-300 group-hover:-translate-y-1 md:text-5xl dark:text-white">
								1.2M
								<span className="text-brand-blue dark:text-blue-400">+</span>
							</h3>
							<p className="mt-2 text-base font-bold text-brand-dark sm:mt-0 dark:text-slate-300">
								Lives impacted through{" "}
								<span className="text-brand-blue dark:text-blue-400">
									CSR programs
								</span>
							</p>
						</StatCard>
					</div>

					{/* Column 4 */}
					<div className="col-span-1 flex flex-col gap-4 md:gap-6">
						{/* 44% Sustainable Packaging Rate */}
						<StatCard className="min-h-[260px] justify-center md:min-h-[280px]">
							<div className="pointer-events-none absolute top-4 right-4 origin-center text-brand-blue opacity-10 transition-transform duration-700 group-hover:scale-110 group-hover:rotate-12 dark:text-blue-400 dark:opacity-20">
								<LeafIcon width={140} height={140} />
							</div>
							<h3 className="z-10 mt-auto text-6xl font-extrabold text-brand-dark md:text-7xl dark:text-white">
								44<span className="text-brand-blue dark:text-blue-400">%</span>
							</h3>
							<p className="z-10 mt-4 text-xl leading-tight font-bold text-brand-dark dark:text-slate-300">
								Sustainable
								<br />
								Packaging{" "}
								<span className="text-brand-blue dark:text-blue-400">Rate</span>
							</p>
						</StatCard>

						{/* 62% Of products */}
						<StatCard className="min-h-[140px] justify-center p-6!">
							<h3 className="text-4xl font-extrabold text-brand-dark transition-transform duration-300 group-hover:scale-105 dark:text-white">
								62<span className="text-brand-blue dark:text-blue-400">%</span>
							</h3>
							<p className="mt-2 text-sm leading-tight font-bold text-brand-dark dark:text-slate-300">
								Of products made{" "}
								<span className="text-brand-blue dark:text-blue-400">with</span>
								<br />
								herbal or natural{" "}
								<span className="text-brand-blue dark:text-blue-400">
									ingredients
								</span>
							</p>
						</StatCard>

						{/* 19M+ CHIK */}
						<StatCard className="min-h-[120px] justify-center p-6!">
							<h3 className="text-4xl font-extrabold text-brand-dark transition-transform duration-300 group-hover:-translate-y-1 dark:text-white">
								19M<span className="text-brand-blue dark:text-blue-400">+</span>
							</h3>
							<p className="mt-1 text-sm font-bold text-brand-dark dark:text-slate-300">
								CHIK Sachets/mo
							</p>
						</StatCard>
					</div>
				</div>
			</div>
		</section>
	);
}
