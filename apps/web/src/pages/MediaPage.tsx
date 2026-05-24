import { ChevronDown, Search } from "lucide-react";
import type { ReactElement } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { MEDIA_ARTICLES } from "../data/media";

export function MediaPage(): ReactElement {
	const [activeTab, setActiveTab] = useState("CavinKare in News");

	return (
		<div className="min-h-screen bg-white dark:bg-slate-950">
			{/* Hero Section */}
			<section className="relative overflow-hidden bg-[#F4F8FB] pt-16 pb-20 dark:bg-slate-900">
				{/* Background Grid Pattern (Optional touch for exactness) */}
				<div className="absolute inset-0 pointer-events-none grid-bg opacity-50 dark:opacity-20" aria-hidden="true" />

				<div className="relative mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
					<div className="grid items-center gap-12 lg:grid-cols-2">
						{/* Left Text */}
						<div className="max-w-xl">
							<h1 className="text-4xl font-bold tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
								<span className="block">Driven by Purpose.</span>
								<span className="block text-[#003876] dark:text-blue-400">
									Covered with Pride.
								</span>
							</h1>
							<p className="mt-6 text-lg leading-relaxed text-gray-600 dark:text-gray-400">
								Explore how CavinKare is making headlines from breakthrough
								innovations to community impact.
							</p>
						</div>

						{/* Right Image Container - Newspaper Stack Placeholder */}
						<div className="flex justify-center lg:justify-end">
							<div className="relative w-full max-w-md aspect-square lg:aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl transition-transform duration-500 hover:scale-[1.02]">
								<img
									src="https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=80&w=1000&auto=format&fit=crop"
									alt="Stack of newspapers"
									className="w-full h-full object-cover"
								/>
								<div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Main Content Area */}
			<section className="mx-auto max-w-7xl px-4 py-12 md:px-6 lg:px-8 lg:py-16">
				{/* Tabs */}
				<div
					role="tablist"
					aria-label="Media categories"
					className="mb-10 flex flex-wrap justify-center gap-4 md:gap-8 border-b border-gray-200 dark:border-slate-800 pb-2"
				>
					{["CavinKare in News", "Press Library", "Press Release"].map(
						(tab) => (
							<button
								key={tab}
								role="tab"
								aria-selected={activeTab === tab}
								onClick={() => setActiveTab(tab)}
								className={`relative pb-4 text-sm md:text-base font-semibold transition-colors ${
									activeTab === tab
										? "text-[#003876] dark:text-blue-400"
										: "text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-200"
								}`}
								type="button"
							>
								{tab}
								{activeTab === tab && (
									<span className="absolute bottom-[-2px] left-0 h-0.5 w-full bg-[#003876] dark:bg-blue-400" />
								)}
							</button>
						),
					)}
				</div>

				{/* Filters Bar */}
				<div className="mb-12 flex flex-col gap-4 rounded-xl bg-gray-50 p-4 md:flex-row md:items-center md:justify-between dark:bg-slate-900/50">
					<div className="flex flex-wrap items-center gap-4">
						{/* Sort By Dropdown */}
						<div className="relative">
							<select
								className="appearance-none rounded-lg border border-gray-200 bg-white px-4 py-2.5 pr-10 text-sm font-medium text-gray-700 outline-none focus:border-[#003876] focus:ring-1 focus:ring-[#003876] dark:border-slate-700 dark:bg-slate-800 dark:text-gray-200"
								aria-label="Sort By"
							>
								<option>Sort By</option>
								<option>Latest</option>
								<option>Oldest</option>
							</select>
							<ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
						</div>

						{/* Category Dropdown */}
						<div className="relative">
							<select
								className="appearance-none rounded-lg border border-gray-200 bg-white px-4 py-2.5 pr-10 text-sm font-medium text-gray-700 outline-none focus:border-[#003876] focus:ring-1 focus:ring-[#003876] dark:border-slate-700 dark:bg-slate-800 dark:text-gray-200"
								aria-label="Select Category"
							>
								<option>Select Category</option>
								<option>Business</option>
								<option>Innovation</option>
								<option>Community</option>
							</select>
							<ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
						</div>

						{/* Year Dropdown */}
						<div className="relative">
							<select
								className="appearance-none rounded-lg border border-gray-200 bg-white px-4 py-2.5 pr-10 text-sm font-medium text-gray-700 outline-none focus:border-[#003876] focus:ring-1 focus:ring-[#003876] dark:border-slate-700 dark:bg-slate-800 dark:text-gray-200"
								aria-label="Select Year"
							>
								<option>Select Year</option>
								<option>2024</option>
								<option>2023</option>
								<option>2022</option>
							</select>
							<ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
						</div>
					</div>

					{/* Search */}
					<div className="relative w-full md:max-w-xs">
						<input
							type="text"
							placeholder="Search"
							aria-label="Search articles"
							className="w-full rounded-lg border border-gray-200 bg-white py-2.5 pl-10 pr-4 text-sm outline-none focus:border-[#003876] focus:ring-1 focus:ring-[#003876] dark:border-slate-700 dark:bg-slate-800 dark:text-gray-100 dark:placeholder-gray-400"
						/>
						<Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" aria-hidden="true" />
					</div>
				</div>

				{/* Article Grid */}
				<div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
					{MEDIA_ARTICLES.map((article) => (
						<Link
							to={`/organisation/media/${article.id}`}
							key={article.id}
							className="group flex h-full flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-slate-800 dark:bg-slate-900"
						>
							<div className="relative aspect-[4/3] overflow-hidden bg-gray-100 dark:bg-slate-800 p-4">
								<img
									src={article.imageUrl}
									alt={article.title}
									className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105 rounded-xl shadow-md"
								/>
							</div>
							<div className="flex flex-1 flex-col p-6">
								<h3 className="mb-2 text-lg font-bold leading-snug text-gray-900 transition-colors group-hover:text-[#003876] dark:text-gray-100 dark:group-hover:text-blue-400 line-clamp-2">
									{article.title}
								</h3>
								<p className="mb-6 text-sm text-gray-600 dark:text-gray-400 line-clamp-3">
									{article.excerpt}
								</p>
								<div className="mt-auto">
									<span className="inline-flex items-center text-sm font-semibold text-[#003876] group-hover:underline dark:text-blue-400">
										Read the Full Article on {article.publication}
									</span>
								</div>
							</div>
						</Link>
					))}
				</div>

				{/* Load More */}
				<div className="mt-16 flex justify-center">
					<button
						type="button"
						className="rounded-full border border-gray-300 bg-white px-8 py-3 text-sm font-semibold text-gray-700 shadow-sm transition-all hover:bg-gray-50 hover:text-gray-900 dark:border-slate-700 dark:bg-slate-900 dark:text-gray-300 dark:hover:bg-slate-800 dark:hover:text-white"
					>
						Load More
					</button>
				</div>
			</section>
		</div>
	);
}
