import { AnimatePresence, motion } from "motion/react";
import type { ReactElement } from "react";
import { useState, useEffect, useCallback, useRef } from "react";
import { MapPin } from "lucide-react";
import { FadeIn } from "../ui/motion/FadeIn";

const timelineData = [
	{
		id: "1983",
		year: "1983",
		title: "CavinKare launches India's first affordable shampoo sachet.",
		quote: "\u201CWhy should affordability stop someone from self-care?\u201D",
		stats: "10 paise. No bottle. No barrier.",
		image: "/images/timeline-1983.png",
	},
	{
		id: "1990s",
		year: "1990s",
		title: "Expanding reach and product lines across India.",
		quote: "\u201CInnovation driven by deep consumer understanding.\u201D",
		stats: "Millions of households reached.",
		image: "/images/timeline-1983.png",
	},
	{
		id: "2000s",
		year: "2000s",
		title: "Going global and diversifying into food & beverages.",
		quote: "\u201CA truly Indian multinational company.\u201D",
		stats: "Presence in 30+ countries.",
		image: "/images/timeline-1983.png",
	},
];

export function TimelineSection(): ReactElement {
	const [activeTab, setActiveTab] = useState(timelineData[0].id);
	const [isPaused, setIsPaused] = useState(false);
	const tabListRef = useRef<HTMLDivElement>(null);

	const activeIndex = timelineData.findIndex((item) => item.id === activeTab);
	const activeItem = timelineData[activeIndex];

	const goToTab = useCallback((id: string): void => {
		setActiveTab(id);
	}, []);

	const goToNext = useCallback((): void => {
		setActiveTab((current) => {
			const currentIndex = timelineData.findIndex(
				(item) => item.id === current,
			);
			const nextIndex = (currentIndex + 1) % timelineData.length;
			return timelineData[nextIndex].id;
		});
	}, []);

	const goToPrev = useCallback((): void => {
		setActiveTab((current) => {
			const currentIndex = timelineData.findIndex(
				(item) => item.id === current,
			);
			const prevIndex =
				(currentIndex - 1 + timelineData.length) % timelineData.length;
			return timelineData[prevIndex].id;
		});
	}, []);

	/* ─── Auto-advance with pause support (WCAG 2.2.2) ─── */
	useEffect(() => {
		if (isPaused) {
			return undefined;
		}

		const interval = setInterval(goToNext, 5000);
		return () => clearInterval(interval);
	}, [isPaused, goToNext]);

	/* ─── Arrow key navigation for tabs (WCAG 2.1.1) ─── */
	const handleTabKeyDown = useCallback(
		(event: React.KeyboardEvent<HTMLDivElement>): void => {
			if (event.key === "ArrowRight" || event.key === "ArrowDown") {
				event.preventDefault();
				goToNext();
				/* Focus the newly active tab button */
				const nextIndex = (activeIndex + 1) % timelineData.length;
				const tabButtons =
					tabListRef.current?.querySelectorAll<HTMLButtonElement>(
						'[role="tab"]',
					);
				tabButtons?.[nextIndex]?.focus();
			} else if (event.key === "ArrowLeft" || event.key === "ArrowUp") {
				event.preventDefault();
				goToPrev();
				const prevIndex =
					(activeIndex - 1 + timelineData.length) % timelineData.length;
				const tabButtons =
					tabListRef.current?.querySelectorAll<HTMLButtonElement>(
						'[role="tab"]',
					);
				tabButtons?.[prevIndex]?.focus();
			} else if (event.key === "Home") {
				event.preventDefault();
				goToTab(timelineData[0].id);
				const tabButtons =
					tabListRef.current?.querySelectorAll<HTMLButtonElement>(
						'[role="tab"]',
					);
				tabButtons?.[0]?.focus();
			} else if (event.key === "End") {
				event.preventDefault();
				goToTab(timelineData[timelineData.length - 1].id);
				const tabButtons =
					tabListRef.current?.querySelectorAll<HTMLButtonElement>(
						'[role="tab"]',
					);
				tabButtons?.[timelineData.length - 1]?.focus();
			}
		},
		[activeIndex, goToNext, goToPrev, goToTab],
	);

	return (
		<section
			aria-labelledby="timeline-heading"
			className="py-24 bg-white relative overflow-hidden"
			onMouseEnter={() => setIsPaused(true)}
			onMouseLeave={() => setIsPaused(false)}
			onFocus={() => setIsPaused(true)}
			onBlur={() => setIsPaused(false)}
		>
			<div className="container mx-auto px-4 max-w-6xl">
				{/* Heading Section */}
				<FadeIn className="text-center max-w-4xl mx-auto mb-20 space-y-4">
					<h2
						id="timeline-heading"
						className="text-4xl md:text-5xl lg:text-6xl font-bold text-brand-dark tracking-tight"
					>
						How One Small Sachet{" "}
						<span className="text-gradient-brand">Sparked a</span>
						<br /> Giant{" "}
						<span className="text-gradient-brand"> Revolution</span>
					</h2>
					<p className="text-lg md:text-xl text-gray-500 max-w-3xl mx-auto">
						A story of bold thinking, inclusive innovation, and how a drop of
						shampoo changed the Indian market forever.
					</p>
				</FadeIn>

				{/* Timeline Navigation — ARIA Tabs Pattern */}
				<FadeIn delay={0.2}>
					<div
						ref={tabListRef}
						role="tablist"
						aria-label="Company timeline"
						onKeyDown={handleTabKeyDown}
						className="relative mb-16 flex justify-between items-center max-w-4xl mx-auto px-4"
					>
						{/* Background Line */}
						<div
							aria-hidden="true"
							className="absolute top-1/2 left-0 right-0 h-[2px] bg-gray-100 -z-10"
						/>

						{timelineData.map((item) => {
							const isActive = activeTab === item.id;
							return (
								<button
									key={item.id}
									role="tab"
									id={`timeline-tab-${item.id}`}
									aria-selected={isActive}
									aria-controls={`timeline-panel-${item.id}`}
									tabIndex={isActive ? 0 : -1}
									onClick={() => goToTab(item.id)}
									type="button"
									className={`relative px-4 py-2 text-4xl md:text-6xl font-light transition-all duration-300 bg-white ${
										isActive
											? "text-[#002B5B]"
											: "text-gray-300 hover:text-gray-400"
									}`}
								>
									{item.year}
								</button>
							);
						})}
					</div>
				</FadeIn>

				{/* Timeline Content — Tab Panel */}
				<FadeIn delay={0.4}>
					<div
						id={`timeline-panel-${activeItem.id}`}
						role="tabpanel"
						aria-labelledby={`timeline-tab-${activeItem.id}`}
						className="max-w-4xl mx-auto"
					>
						<AnimatePresence mode="wait">
							<motion.div
								key={activeItem.id}
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								exit={{ opacity: 0, y: -20 }}
								transition={{ duration: 0.4, ease: "easeInOut" }}
								className="grid md:grid-cols-2 gap-8 md:gap-16 items-center"
							>
								{/* Image Side */}
								<div className="relative aspect-square md:aspect-4/3 rounded-3xl overflow-hidden">
									<img
										src={activeItem.image}
										alt={activeItem.title}
										className="w-full h-full object-cover"
									/>
								</div>

								{/* Content Side */}
								<div className="space-y-6 relative flex flex-col h-full justify-center">
									<div className="flex flex-col h-full">
										{/* Pin and Year */}
										<div className="flex items-center gap-2 text-gray-900 relative">
											<MapPin
												aria-hidden="true"
												className="w-5 h-5 fill-red-500 text-white"
											/>
											<span className="text-xl font-medium">
												{activeItem.year}
											</span>
										</div>

										{/* Vertical Dotted Line */}
										<div
											aria-hidden="true"
											className="ml-[9px] w-px h-12 my-2 border-l-2 border-dotted border-gray-300"
										/>

										{/* Main Content */}
										<div className="space-y-4">
											<h3 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-[#002B5B] leading-tight max-w-lg">
												{activeItem.title}
											</h3>

											<div className="space-y-2 mt-4">
												<p className="text-gray-500 text-lg md:text-xl">
													{activeItem.quote}
												</p>
												<p className="font-bold text-[#002B5B] text-lg italic">
													{activeItem.stats}
												</p>
											</div>
										</div>
									</div>
								</div>
							</motion.div>
						</AnimatePresence>
					</div>
				</FadeIn>
			</div>
		</section>
	);
}
