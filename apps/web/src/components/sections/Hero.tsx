import type { ReactElement } from "react";
import img3 from "../../assets/office_worker_1779452993081.png";
import img2 from "../../assets/scientists_lab_1779452974081.png";
import img1 from "../../assets/skincare_model_1779452945535.png";
import img5 from "../../assets/various_products_1779453032588.png";
import img4 from "../../assets/yellow_shampoo_1779453014711.png";

const cards = [
	{ id: "hero-1", img: img1 },
	{ id: "hero-2", img: img2 },
	{ id: "hero-3", img: img3 },
	{ id: "hero-4", img: img4 },
	{ id: "hero-5", img: img5 },
	{ id: "hero-6", img: img1 },
	{ id: "hero-7", img: img2 },
];

export function Hero(): ReactElement {
	return (
		<section
			id="hero"
			className="relative flex min-h-[calc(100svh-160px)] w-full flex-col items-center justify-center overflow-hidden bg-white px-4 pt-10 dark:bg-slate-950"
		>
			{/* Background Glow */}
			<div className="absolute top-[45%] left-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-100/40 blur-3xl dark:bg-blue-900/20" />

			{/* CONTENT */}
			<div className="relative z-20 mx-auto flex w-full max-w-7xl flex-col items-center">
				{/* HEADING */}
				<div className="max-w-5xl text-center">
					<div className="relative inline-block text-center">
						{/* Hand-drawn Arrow */}
						<div className="pointer-events-none absolute -bottom-16 -left-12 hidden md:block lg:-bottom-24 lg:-left-24 xl:-bottom-32 xl:-left-32">
							<svg
								width="120"
								height="140"
								viewBox="0 0 120 140"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
								className="text-blue-400 opacity-60 dark:text-blue-500"
								aria-hidden="true"
							>
								<path
									d="M100 10 Q40 40 20 120"
									stroke="currentColor"
									strokeWidth="3"
									strokeLinecap="round"
									strokeLinejoin="round"
								/>
								<path
									d="M5 100 L20 120 L40 105"
									stroke="currentColor"
									strokeWidth="3"
									strokeLinecap="round"
									strokeLinejoin="round"
								/>
							</svg>
						</div>

						<h1 className="relative z-10 text-4xl leading-[0.95] font-bold tracking-[-0.05em] text-brand-dark sm:text-5xl md:text-5xl lg:text-6xl xl:text-7xl dark:text-white">
							A house of <span className="text-gradient-brand">everyday</span>
							<br />
							innovations that{" "}
							<span className="text-gradient-brand">care.</span>
						</h1>
					</div>
				</div>

				{/* GALLERY */}
				<div className="relative mt-2 flex h-[360px] w-full items-center justify-center perspective-[2400px] md:h-[420px]">
					{cards.map((card, index) => {
						const center = (cards.length - 1) / 2;
						const offset = index - center;

						return (
							<div
								key={card.id}
								className="group absolute transform-gpu transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] will-change-transform hover:z-50"
								style={{
									transform: `
                    translateX(${offset * 145}px)
                    translateY(${Math.abs(offset) * 10}px)
                    rotate(${offset * 6}deg)
                    scale(${1 - Math.abs(offset) * 0.03})
                  `,
									zIndex: 30 - Math.abs(offset),
								}}
							>
								<div className="overflow-hidden rounded-[30px] shadow-[0_20px_70px_rgba(0,0,0,0.18)] transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-translate-y-8 group-hover:scale-[1.15] group-hover:shadow-[0_30px_90px_rgba(0,0,0,0.25)]">
									<img
										src={card.img}
										alt="Everyday innovation showcase"
										loading="lazy"
										draggable={false}
										className="h-[220px] w-[150px] object-cover select-none sm:h-[260px] sm:w-[180px] md:h-[320px] md:w-[220px]"
									/>
								</div>
							</div>
						);
					})}
				</div>

				{/* SUBTITLE */}
				<p className="mx-auto mt-10 max-w-full px-4 text-center text-xs leading-relaxed font-semibold text-gray-500 sm:text-sm sm:whitespace-nowrap md:text-base lg:text-lg">
					From personal care to beverages and salons, our brands redefine how
					India <br />
					<span> lives, eats, and feels every day.</span>
				</p>

				{/* BUTTONS */}
				<div className="mt-8 flex flex-col items-center gap-4 sm:flex-row">
					{/* LEFT BUTTON */}
					<button
						type="button"
						className="group relative inline-flex items-center justify-center overflow-hidden rounded-full p-px font-semibold text-white shadow-lg transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_8px_30px_rgba(9,65,164,0.3)]"
					>
						{/* Outer border glow/gradient */}
						<span className="absolute inset-0 bg-linear-to-r from-blue-300 via-blue-500 to-blue-300 opacity-60 transition-opacity duration-300 group-hover:opacity-100" />

						{/* Button Interior */}
						<div className="relative inline-flex h-full w-full items-center justify-center rounded-full bg-linear-to-b from-[#1a2845] to-[#0941a4] px-8 py-3">
							{/* Soft inner top highlight for 3D glass effect */}
							<div className="absolute inset-0 rounded-full border border-white/10" />
							<div className="absolute inset-0 rounded-full border-t border-white/30 mix-blend-overlay" />
							<span className="relative z-10 text-white drop-shadow-md">
								Explore Our Brands
							</span>
						</div>
					</button>

					{/* RIGHT BUTTON */}
					<button
						type="button"
						className="group relative inline-flex items-center justify-center overflow-hidden rounded-full p-[2px] transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_8px_25px_rgba(9,65,164,0.15)]"
					>
						{/* Animated Gradient Border */}
						<span className="absolute inset-0 bg-linear-to-r from-[#1a2845] via-blue-400 to-[#1a2845] opacity-50 transition-opacity duration-300 group-hover:opacity-100" />

						{/* Button Interior */}
						<div className="relative flex h-full w-full items-center justify-center rounded-full bg-white px-8 py-3 dark:bg-slate-950">
							<span className="bg-linear-to-r from-[#1a2845] to-[#0941a4] bg-clip-text text-base font-semibold tracking-[-0.02em] text-transparent transition-all duration-300 group-hover:from-blue-600 group-hover:to-blue-400 dark:from-blue-400 dark:to-blue-300">
								Our Impact Story
							</span>
						</div>
					</button>
				</div>
			</div>
		</section>
	);
}
