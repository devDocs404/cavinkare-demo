import type { ReactElement } from "react";
import type { NewsItem } from "../../data/news";
import { NEWS_ITEMS } from "../../data/news";

function NewsCard({ item }: { item: NewsItem }): ReactElement {
	const innerContent = (
		<>
			<img
				src={item.imageUrl}
				alt={item.title}
				className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
			/>

			<div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/20 to-transparent opacity-80 transition-opacity duration-300 group-hover:opacity-100" />

			<div className="absolute right-0 bottom-0 left-0 translate-y-2 transform p-6 transition-transform duration-500 ease-out group-hover:translate-y-0 md:p-8">
				<h3
					className={`mb-2 leading-tight font-bold text-white md:mb-3 ${
						item.isLarge ? "text-2xl md:text-3xl" : "text-xl md:text-2xl"
					}`}
				>
					{item.title}
				</h3>

				<p className="line-clamp-2 text-sm leading-relaxed text-gray-200 opacity-90 transition-opacity duration-500 group-hover:opacity-100 md:line-clamp-3 md:text-base">
					{item.subtitle}
				</p>
			</div>
		</>
	);

	if (item.isOverlap) {
		return (
			<div className={`relative z-10 ${item.containerClass}`}>
				<div className="absolute top-0 right-0 bottom-0 left-0 -z-10 rounded-tl-[2rem] bg-surface-section md:-top-3 md:-left-4 md:rounded-tl-[3rem] dark:bg-slate-900" />

				<div className="group relative h-full w-full overflow-hidden rounded-[2rem] shadow-lg">
					{innerContent}
				</div>
			</div>
		);
	}

	return (
		<div
			className={`group relative overflow-hidden rounded-[2rem] shadow-lg ${item.containerClass}`}
		>
			{innerContent}
		</div>
	);
}

function WaveTop(): ReactElement {
	return (
		<div
			className="absolute top-0 left-0 z-10 h-[24px] w-full -translate-y-[23px] bg-surface-section dark:bg-slate-900"
			style={{
				WebkitMaskImage: `url("data:image/svg+xml,%3Csvg width='48' height='24' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 24 L24 0 L48 24 Z' fill='black' /%3E%3C/svg%3E")`,
				WebkitMaskRepeat: "repeat-x",
				WebkitMaskPosition: "bottom",
				maskImage: `url("data:image/svg+xml,%3Csvg width='48' height='24' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 24 L24 0 L48 24 Z' fill='black' /%3E%3C/svg%3E")`,
				maskRepeat: "repeat-x",
				maskPosition: "bottom",
			}}
		/>
	);
}

function WaveBottom(): ReactElement {
	return (
		<div
			className="absolute bottom-0 left-0 z-10 h-[24px] w-full translate-y-[23px] bg-surface-section dark:bg-slate-900"
			style={{
				WebkitMaskImage: `url("data:image/svg+xml,%3Csvg width='48' height='24' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0 L24 24 L48 0 Z' fill='black' /%3E%3C/svg%3E")`,
				WebkitMaskRepeat: "repeat-x",
				WebkitMaskPosition: "top",
				maskImage: `url("data:image/svg+xml,%3Csvg width='48' height='24' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0 L24 24 L48 0 Z' fill='black' /%3E%3C/svg%3E")`,
				maskRepeat: "repeat-x",
				maskPosition: "top",
			}}
		/>
	);
}

export function InsideCavinKare(): ReactElement {
	return (
		<div id="inside-cavinkare" className="relative w-full">
			<WaveTop />

			<section className="relative w-full bg-surface-section px-6 py-24 md:px-12 dark:bg-slate-900">
				<div className="relative z-10 mx-auto max-w-7xl">
					{/* HEADER */}
					<div className="mx-auto mb-8 max-w-4xl text-center md:mb-10">
						<h2 className="text-4xl leading-[0.95] font-bold tracking-[-0.05em] text-brand-dark sm:text-5xl md:text-6xl lg:text-7xl dark:text-white">
							Inside <span className="text-gradient-brand">CavinKare</span>
						</h2>

						<p className="mx-auto mt-4 max-w-full px-4 text-center text-sm leading-relaxed font-semibold text-gray-500  md:text-base lg:text-lg">
							Stay updated with our latest news, innovations, and stories that
							shape our journey
						</p>
					</div>

					{/* GRID */}
					<div className="grid w-full grid-cols-1 gap-4 md:grid-cols-12 md:gap-5">
						{NEWS_ITEMS.map((item) => (
							<NewsCard key={item.title} item={item} />
						))}
					</div>
				</div>
			</section>

			<WaveBottom />
		</div>
	);
}
