import type { ReactElement } from "react";
import { BRAND_IMAGES } from "../../data/brands";
import { ImageSlider3D } from "../ui/ImageSlider3D";

export function OurBrand(): ReactElement {
	return (
		<section
			id="our-brands"
			className="relative overflow-hidden bg-white py-24 dark:bg-slate-950"
		>
			<div className="mx-auto flex max-w-7xl flex-col items-center justify-center px-4">
				<div className="mx-auto max-w-7xl">
					<div className="relative z-10 mx-auto max-w-4xl text-center">
						<h2 className="text-4xl leading-[0.95] font-bold tracking-[-0.05em] text-brand-dark sm:text-5xl md:text-5xl lg:text-6xl xl:text-7xl dark:text-white">
							Our <span className="text-gradient-brand">Brands</span>
						</h2>
					</div>
				</div>
				<ImageSlider3D
					images={[...BRAND_IMAGES]}
					duration={120}
					cardWidth="18em"
					perspective="150em"
					rotationDirection="left"
					withMask={true}
					imageClassName="bg-slate-900"
				/>
				<div className="mx-auto max-w-7xl">
					<div className="relative z-10 mx-auto max-w-4xl text-center">
						<p className="mx-auto mt-10 max-w-full px-4 text-center text-xs leading-relaxed font-semibold text-gray-500 sm:text-sm sm:whitespace-nowrap md:text-base lg:text-lg dark:text-slate-400">
							From haircare to snacks, salon care to pet hygiene — our brands
							are built <br />
							<span>to enrich lives with trust, quality, and innovation.</span>
						</p>
					</div>
				</div>
			</div>
		</section>
	);
}
