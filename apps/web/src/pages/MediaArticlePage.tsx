import { ChevronLeft } from "lucide-react";
import type { ReactElement } from "react";
import { Link, useParams } from "react-router-dom";
import { MEDIA_ARTICLES } from "../data/media";

export function MediaArticlePage(): ReactElement {
	const { id } = useParams<{ id: string }>();
	const article = MEDIA_ARTICLES.find((a) => a.id === id);

	// Fetch related articles (excluding the current one)
	const relatedArticles = MEDIA_ARTICLES.filter((a) => a.id !== id).slice(0, 3);

	if (!article) {
		return (
			<div className="flex min-h-screen items-center justify-center bg-white dark:bg-slate-950">
				<div className="text-center">
					<h1 className="text-2xl font-bold text-gray-900 dark:text-white">
						Article not found
					</h1>
					<Link
						to="/organisation/media"
						className="mt-4 inline-block text-[#003876] hover:underline dark:text-blue-400"
					>
						Back to Media
					</Link>
				</div>
			</div>
		);
	}

	return (
		<div className="min-h-screen bg-white pb-20 dark:bg-slate-950">
			<div className="mx-auto max-w-7xl px-4 py-8 md:px-6 lg:px-8">
				{/* Header / Back Button */}
				<div className="mb-8 border-b border-gray-200 pb-4 dark:border-slate-800 border-dashed border-b-2">
					<Link
						to="/organisation/media"
						className="inline-flex items-center gap-2 text-lg font-bold text-[#003876] hover:underline dark:text-blue-400"
					>
						<ChevronLeft className="h-5 w-5" />
						{article.title}
					</Link>
				</div>

				<div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
					{/* Main Article Content */}
					<div className="lg:col-span-8">
						<article>
							{/* Article Header */}
							<header className="mb-8">
								<h1 className="mb-4 text-3xl font-extrabold leading-tight text-gray-900 md:text-4xl lg:text-5xl dark:text-white">
									{article.title}
								</h1>
								<p className="mb-6 text-xl text-gray-600 dark:text-gray-300 font-medium">
									{/* The subtitle/excerpt is used here. In the design it's a sub-heading. */}
									Industry was hamstrung by twin challenges of subdued profit margins, weak rural demand in CY22
								</p>

								{/* Image */}
								<div className="mb-8 overflow-hidden bg-gray-100 dark:bg-slate-800">
									<img
										src={article.imageUrl}
										alt={article.title}
										className="w-full h-auto object-cover max-h-[500px]"
									/>
								</div>

								{/* Meta Info */}
								<div className="flex flex-wrap items-center justify-between gap-4 text-sm font-medium text-[#003876] dark:text-blue-400 mb-8 pb-4 border-b border-gray-200 dark:border-slate-800">
									<div className="flex items-center gap-2">
										<span className="text-gray-500 dark:text-gray-400 font-normal">
											{article.date} | {article.location}
										</span>
									</div>
									<a href={article.link} className="hover:underline">
										Read the Full Article at {article.publication}
									</a>
								</div>
							</header>

							{/* Article Body */}
							<div className="prose prose-lg max-w-none text-gray-800 dark:prose-invert dark:text-gray-300">
								{article.content ? (
									<div
										// biome-ignore lint/security/noDangerouslySetInnerHtml: Mock data from trusted source
										dangerouslySetInnerHTML={{
											__html: typeof article.content === 'string' ? article.content : '',
										}}
									/>
								) : (
									<p>No full content available for this article yet.</p>
								)}
							</div>

							{/* Comments Section */}
							<div className="mt-16 border-t border-gray-200 border-dashed border-t-2 pt-10 dark:border-slate-800">
								<h2 className="mb-6 text-2xl font-bold text-gray-900 dark:text-white">
									Leave your comment
								</h2>
								<form className="flex flex-col gap-4">
									<textarea
										rows={4}
										placeholder="Your comment"
										className="w-full rounded-lg border border-gray-200 bg-gray-50 p-4 outline-none focus:border-[#003876] focus:ring-1 focus:ring-[#003876] dark:border-slate-700 dark:bg-slate-900/50 dark:text-white"
									/>
									<div className="flex justify-end">
										<button
											type="button"
											className="rounded-full bg-[#0a1e3f] px-8 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#003876] dark:bg-blue-600 dark:hover:bg-blue-700"
										>
											Submit
										</button>
									</div>
								</form>
							</div>
						</article>
					</div>

					{/* Sidebar - Related Articles */}
					<aside className="lg:col-span-4 border-l border-gray-200 pl-0 lg:pl-8 dark:border-slate-800 border-dashed">
						<h3 className="mb-6 text-lg font-bold text-gray-900 dark:text-white">
							See Related
						</h3>
						<div className="flex flex-col gap-8">
							{relatedArticles.map((related) => (
								<Link
									to={`/organisation/media/${related.id}`}
									key={related.id}
									className="group flex flex-col gap-4"
								>
									<div className="overflow-hidden rounded-lg bg-gray-100 dark:bg-slate-800 p-2">
										<img
											src={related.imageUrl}
											alt={related.title}
											className="aspect-video w-full object-cover transition-transform duration-500 group-hover:scale-105"
										/>
									</div>
									<div>
										<h4 className="mb-2 font-bold text-[#003876] transition-colors group-hover:text-blue-600 dark:text-blue-400 dark:group-hover:text-blue-300">
											{related.title}
										</h4>
										<p className="mb-2 text-sm text-gray-600 dark:text-gray-400 line-clamp-3">
											Expectations for 2023<br/>
											{related.excerpt}
										</p>
										<p className="mb-2 text-xs text-red-600 dark:text-red-400">
											{related.date} | <span className="font-semibold">{related.location}</span>
										</p>
										<span className="text-xs text-[#003876] group-hover:underline dark:text-blue-400">
											Read the Full Article at {related.publication}
										</span>
									</div>
								</Link>
							))}
						</div>
					</aside>
				</div>
			</div>
		</div>
	);
}
