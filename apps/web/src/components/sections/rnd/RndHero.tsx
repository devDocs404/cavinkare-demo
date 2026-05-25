import { ChevronRight } from "lucide-react";
import type { ReactElement } from "react";
import { Link } from "react-router-dom";

export function RndHero(): ReactElement {
	return (
		<section className="relative w-full bg-white pt-24 pb-16 md:pt-32 dark:bg-slate-950">
			<div className="relative z-10 mx-auto w-full max-w-5xl px-4 md:px-6 lg:px-8">
				<div className="flex flex-col items-center text-center">
					{/* Heading */}
					<h1 className="mb-4 text-4xl font-extrabold tracking-tight text-[#1a2e3b] md:text-5xl lg:text-[4rem] dark:text-white">
						Research & Development
					</h1>

					{/* Subheading */}
					<p className="mb-8 mx-auto max-w-2xl text-[15px] font-medium leading-relaxed text-[#7a848f] dark:text-gray-400">
						Pioneering the Next Generation of Fast-Moving Consumer Goods.
					</p>

					{/* Breadcrumb */}
					<nav
						aria-label="Breadcrumb"
						className="mb-12 flex items-center justify-center gap-2 text-[11px] font-bold tracking-wide text-gray-400 uppercase dark:text-gray-500"
					>
						<Link
							to="/"
							className="hover:text-brand-blue-dark dark:hover:text-blue-400 transition-colors"
						>
							Home
						</Link>
						<ChevronRight className="h-3 w-3" aria-hidden="true" />
						<span className="hover:text-brand-blue-dark dark:hover:text-blue-400 transition-colors cursor-pointer">
							Organisation
						</span>
						<ChevronRight className="h-3 w-3" aria-hidden="true" />
						<span
							aria-current="page"
							className="text-[#0033a0] dark:text-blue-400"
						>
							Research & Development
						</span>
					</nav>
				</div>
			</div>

			{/* Large Featured Image */}
			<div className="mx-auto w-full max-w-6xl px-4 md:px-6 lg:px-8">
				<div className="relative aspect-[21/9] w-full overflow-hidden rounded-2xl shadow-2xl">
					<img
						src="https://images.unsplash.com/photo-1532012197267-da84d127e765?q=80&w=2574&auto=format&fit=crop"
						alt="Research and Development Team"
						className="h-full w-full object-cover"
					/>
				</div>
			</div>
		</section>
	);
}
