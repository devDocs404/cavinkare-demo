import type { ReactElement } from "react";
import { BRAND_IMAGES } from "../../data/brands";
import { FadeIn } from "../ui/motion/FadeIn";
import { ImageSlider3D } from "../ui/ImageSlider3D";

export function OurBrand(): ReactElement {
	return (
		<section
			id="our-brands"
			aria-labelledby="our-brands-heading"
			className="relative overflow-hidden bg-white py-24 dark:bg-slate-950"
		>
			<div className="mx-auto flex max-w-7xl flex-col items-center justify-center px-4">
				<div className="mx-auto max-w-7xl">
					<FadeIn className="relative z-10 mx-auto max-w-4xl text-center">
						<h2 id="our-brands-heading" className="text-4xl leading-[0.95] font-bold tracking-[-0.05em] text-brand-dark sm:text-5xl md:text-5xl lg:text-6xl xl:text-7xl dark:text-white">
							Our <span className="text-gradient-brand">Brands</span>
						</h2>
					</FadeIn>
				</div>
				<FadeIn delay={0.2} className="w-full">
					<ImageSlider3D
						images={[...BRAND_IMAGES]}
						duration={120}
						cardWidth="18em"
						perspective="150em"
						rotationDirection="left"
						withMask={true}
						imageClassName="bg-slate-900"
					/>
				</FadeIn>
				<div className="mx-auto max-w-7xl">
					<div className="relative z-10 mx-auto max-w-4xl text-center flex flex-col items-center">
						<FadeIn delay={0.4}>
							<p className="mx-auto mt-10 max-w-full px-4 text-center text-sm leading-relaxed font-semibold sm:text-sm md:text-base lg:text-xl tracking-[-0.03em] text-transparent bg-clip-text bg-[linear-gradient(93.47deg,#6A7B81_54.89%,#B3BDC1_99.52%)] dark:from-slate-300 dark:to-slate-500">
								From haircare to snacks, salon care to pet hygiene — our brands
								are built to
								<br />
								enrich lives with trust, quality, and innovation.
							</p>
						</FadeIn>
						{/* LEFT BUTTON */}
						<FadeIn delay={0.5}>
							<button
								type="button"
								className="mt-4 group relative inline-flex items-center justify-center overflow-hidden rounded-full p-px font-semibold text-white shadow-lg transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_8px_30px_rgba(9,65,164,0.3)]"
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
						</FadeIn>
					</div>
				</div>
			</div>
		</section>
	);
}
