import { ChevronDown, Globe } from "lucide-react";
import type { ReactElement } from "react";

export function TopBanner(): ReactElement {
	return (
		<div
			id="top-banner"
			className="relative flex h-10 w-full gap-10 items-center justify-center overflow-hidden bg-banner-bg px-4 text-white dark:bg-slate-900"
		>
			{/* Left */}
			<button
				type="button"
				aria-label="Select Language"
				className="z-10 flex items-center gap-1 text-xs font-medium opacity-90 transition-opacity hover:opacity-100"
			>
				<Globe className="h-3.5 w-3.5 text-red-400" />

				<span>English</span>

				<ChevronDown className="h-3.5 w-3.5" />
			</button>

			{/* Marquee */}
			<div className=" text-xs font-medium whitespace-nowrap text-white/80">
				Apply for Chinni Krishnan Innovation Awards • ESG transparency •
				Sustainable growth • Explore reports and certifications
			</div>

			{/* Right */}
			<button
				type="button"
				aria-label="Select Region"
				className="z-10 flex items-center gap-1 text-xs font-medium opacity-90 transition-opacity hover:opacity-100"
			>
				<Globe className="h-3.5 w-3.5" />

				<span>India</span>

				<ChevronDown className="h-3.5 w-3.5" />
			</button>
		</div>
	);
}
