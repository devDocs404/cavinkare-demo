import type { ReactElement } from "react";

export function RndPartner(): ReactElement {
	return (
		<section className="w-full bg-[#f8fbff] py-24 dark:bg-slate-950">
			<div className="mx-auto flex max-w-3xl flex-col items-center px-4 text-center md:px-6 lg:px-8">
				<h2 className="mb-4 text-3xl font-extrabold text-[#1a2e3b] md:text-4xl lg:text-[2.5rem] tracking-tight dark:text-blue-500">
					Partner in Possibility
				</h2>
				<p className="mb-8 max-w-2xl text-[13px] font-medium leading-relaxed text-[#7a848f] dark:text-gray-400">
					Co-Create the Future with Us. Whether you are an academic institution,
					a researcher, or a tech startup, we are always looking for partners to
					push the boundaries of innovation.
				</p>

				<a
					href="/contact-us"
					className="inline-flex items-center justify-center rounded-full bg-[#0033a0] px-8 py-3.5 text-[13px] font-medium text-white transition-all hover:bg-blue-900 hover:shadow-lg dark:bg-blue-600 dark:hover:bg-blue-500"
				>
					Explore Partnership Opportunities
				</a>
			</div>
		</section>
	);
}
