import type { ReactElement } from "react";

const HIGHLIGHTS = [
	{
		id: "dsir",
		title: "DSIR Recognition",
		description:
			"Recognized by the Department of Scientific and Industrial Research (DSIR), Government of India.",
		image:
			"https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=800&auto=format&fit=crop",
		style: "mt-0",
	},
	{
		id: "personal-care",
		title: "Personal Care Business",
		description:
			"Caters to businesses of Personal Care as well as Food/Snacks, Beverages and Dairy segments.",
		image:
			"https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop",
		style: "md:mt-16",
	},
	{
		id: "campus",
		title: "Research Facility Campus",
		description:
			"State-of-the-art R&D facility of over 30000 sq ft in a spacious campus in Chennai.",
		image:
			"https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?q=80&w=800&auto=format&fit=crop",
		style: "mt-0",
	},
];

export function RndHighlights(): ReactElement {
	return (
		<section className="w-full py-16 md:py-24">
			<div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
				<div className="grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-12 lg:gap-16">
					{HIGHLIGHTS.map((item) => (
						<div key={item.id} className={`flex flex-col gap-6 ${item.style}`}>
							<div className="overflow-hidden rounded-[20px] transition-transform duration-500 hover:scale-[1.02]">
								<img
									src={item.image}
									alt={item.title}
									className="aspect-[4/5] w-full object-cover md:aspect-square"
								/>
							</div>
							<div className="flex flex-col gap-2">
								<h3 className="text-xl font-bold tracking-tight text-[#1a2e3b] dark:text-blue-500">
									{item.title}
								</h3>
								<p className="text-[13px] leading-relaxed text-[#7a848f] dark:text-gray-400">
									{item.description}
								</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
