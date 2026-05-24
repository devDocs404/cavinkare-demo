import type { ReactElement } from "react";

const STEPS = [
	{
		number: "01",
		title: "Inspiration & Insight",
		description:
			"Every great idea begins with a deep understanding of people. Our journey starts by closely observing consumer behavior, cultural nuances, and unmet needs. We tap into both data and dialogue from rural conversations to urban trends to uncover what truly matters to the people we serve.",
		image:
			"https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=600&auto=format&fit=crop",
	},
	{
		number: "02",
		title: "Research & Ideation",
		description:
			"Where science meets imagination. Once we uncover the 'why', we explore the 'how'. Our scientists and product teams brainstorm, research, and conceptualize unique solutions blending technical know-how with bold, creative thinking to design products that are thoughtful, relevant, and ahead of the curve.",
		image:
			"https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&w=600&auto=format&fit=crop",
	},
	{
		number: "03",
		title: "Development & Testing",
		description:
			"Rigor with purpose. In our DSIR-approved R&D facility, prototypes undergo stringent testing for performance, safety, and compliance. Whether it's a new skincare formula or a breakthrough food product, we ensure each iteration meets the highest standards of quality while staying affordable and accessible.",
		image:
			"https://images.unsplash.com/photo-1582719478250-c89402bb73e9?q=80&w=600&auto=format&fit=crop",
	},
	{
		number: "04",
		title: "Pilot & Scale",
		description:
			"From lab bench to market shelf. We don't stop at proof of concept. Our pilot programs help us refine production processes, minimize waste, and ensure consistency at scale. With an eye on cost efficiency and speed, we bridge the gap between innovation and execution.",
		image:
			"https://images.unsplash.com/photo-1563906267088-b029e7101114?q=80&w=600&auto=format&fit=crop",
	},
	{
		number: "05",
		title: "Iterate & Improve",
		description:
			"Because good isn't good enough. Even after launch, we keep listening and evolving. Whether it's upgrading packaging, improving shelf life, or tweaking formulations, we believe in constant iteration guided by user feedback and ever-changing consumer needs.",
		image:
			"https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=600&auto=format&fit=crop",
	},
];

export function RndProcess(): ReactElement {
	return (
		<section className="w-full bg-white py-20 dark:bg-slate-950">
			<div className="mx-auto max-w-4xl px-4 md:px-6 lg:px-8">
				<div className="mb-24 text-center">
					<h2 className="mb-4 text-3xl font-extrabold tracking-tight text-[#1a2e3b] md:text-4xl lg:text-[2.5rem] dark:text-blue-500">
						How Ideas Become Impact
					</h2>
					<p className="mx-auto max-w-2xl text-[13px] font-medium leading-relaxed text-[#7a848f] dark:text-gray-400">
						Our R&D process is a seamless journey from insight to invention
						designed to transform real consumer needs into meaningful product
						experiences.
					</p>
				</div>

				<div className="flex flex-col">
					{STEPS.map((step) => (
						<div
							key={step.number}
							className="relative flex w-full flex-col md:flex-row"
						>
							{/* Left Column: Image */}
							<div className="relative z-10 flex w-full justify-end pr-0 md:w-5/12 md:pr-10 pt-4 pb-8 md:pb-16">
								<div className="w-full overflow-hidden opacity-80 mix-blend-multiply dark:mix-blend-normal">
									<img
										src={step.image}
										alt={step.title}
										className="h-24 w-full object-cover grayscale transition-all duration-500 hover:grayscale-0 md:h-28"
									/>
								</div>
							</div>

							{/* Center Divider */}
							<div className="relative hidden w-px bg-transparent md:block">
								<div className="absolute top-0 bottom-0 left-0 w-px bg-[#0033a0]/20" />
								<div className="absolute top-6 left-[-2.5px] h-1.5 w-1.5 rounded-full bg-[#0033a0]" />
							</div>

							{/* Right Column: Content */}
							<div className="relative w-full pl-0 md:w-7/12 md:pl-10 pt-4 pb-12 md:pb-20">
								{/* Huge Number */}
								<div className="absolute -top-12 -left-16 z-0 select-none text-[140px] font-bold tracking-tighter text-gray-50/80 dark:text-slate-800/50">
									{step.number}
								</div>

								<div className="relative z-10 flex flex-col gap-1.5">
									<h3 className="text-[19px] font-bold tracking-tight text-[#0033a0] dark:text-blue-400">
										{step.title}
									</h3>
									<p className="text-[13px] leading-relaxed text-[#7a848f] dark:text-gray-300">
										{step.description}
									</p>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
