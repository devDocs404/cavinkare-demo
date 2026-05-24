import { AnimatePresence, motion } from "motion/react";
import { useState, useEffect } from "react";
import { MapPin } from "lucide-react";

const timelineData = [
	{
		id: "1983",
		year: "1983",
		title: "CavinKare launches India's first affordable shampoo sachet.",
		quote: "“Why should affordability stop someone from self-care?”",
		stats: "10 paise. No bottle. No barrier.",
		image: "/images/timeline-1983.png",
	},
	{
		id: "1990s",
		year: "1990s",
		title: "Expanding reach and product lines across India.",
		quote: "“Innovation driven by deep consumer understanding.”",
		stats: "Millions of households reached.",
		image: "/images/timeline-1983.png",
	},
	{
		id: "2000s",
		year: "2000s",
		title: "Going global and diversifying into food & beverages.",
		quote: "“A truly Indian multinational company.”",
		stats: "Presence in 30+ countries.",
		image: "/images/timeline-1983.png",
	},
];

export function TimelineSection() {
	const [activeTab, setActiveTab] = useState(timelineData[0].id);

	useEffect(() => {
		const interval = setInterval(() => {
			setActiveTab((current) => {
				const currentIndex = timelineData.findIndex(
					(item) => item.id === current,
				);
				const nextIndex = (currentIndex + 1) % timelineData.length;
				return timelineData[nextIndex].id;
			});
		}, 5000); // Change slide every 5 seconds

		return () => clearInterval(interval);
	}, []);

	const activeIndex = timelineData.findIndex((item) => item.id === activeTab);
	const activeItem = timelineData[activeIndex];

	return (
		<section className="py-24 bg-white relative overflow-hidden">
			<div className="container mx-auto px-4 max-w-6xl">
				{/* Heading Section */}
				<div className="text-center max-w-4xl mx-auto mb-20 space-y-4">
					<h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-brand-dark tracking-tight">
						How One Small Sachet{" "}
						<span className="text-gradient-brand">Sparked a</span>
						<br /> Giant{" "}
						<span className="text-gradient-brand"> Revolution</span>
					</h2>
					<p className="text-lg md:text-xl text-gray-500 max-w-3xl mx-auto">
						A story of bold thinking, inclusive innovation, and how a drop of
						shampoo changed the Indian market forever.
					</p>
				</div>

				{/* Timeline Navigation */}
				<div className="relative mb-16 flex justify-between items-center max-w-4xl mx-auto px-4">
					{/* Background Line */}
					<div className="absolute top-1/2 left-0 right-0 h-[2px] bg-gray-100 -z-10" />

					{timelineData.map((item) => {
						const isActive = activeTab === item.id;
						return (
							<button
								key={item.id}
								onClick={() => setActiveTab(item.id)}
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

				{/* Timeline Content */}
				<div className="max-w-4xl mx-auto">
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
										<MapPin className="w-5 h-5 fill-red-500 text-white" />
										<span className="text-xl font-medium">
											{activeItem.year}
										</span>
									</div>

									{/* Vertical Dotted Line */}
									<div className="ml-[9px] w-px h-12 my-2 border-l-2 border-dotted border-gray-300" />

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
			</div>
		</section>
	);
}
