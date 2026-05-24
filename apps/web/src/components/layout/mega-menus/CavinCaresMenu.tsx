import { ChevronRight } from "lucide-react";
import type { ReactElement } from "react";

function MenuLink({
	title,
	desc,
}: {
	title: string;
	desc?: string;
}): ReactElement {
	return (
		<a
			href="#/"
			className="group flex items-center justify-between rounded-xl p-3 transition-colors hover:bg-gray-50 dark:hover:bg-slate-800/50"
		>
			<div className="flex flex-col gap-1">
				<span className="text-sm font-semibold text-gray-900 dark:text-gray-100 group-hover:text-brand-blue-dark dark:group-hover:text-blue-400">
					{title}
				</span>
				{desc && (
					<span className="text-xs text-gray-500 dark:text-gray-400">
						{desc}
					</span>
				)}
			</div>
			<div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-gray-200 bg-white transition-colors group-hover:border-brand-blue-dark group-hover:bg-brand-blue-dark/5 dark:border-slate-700 dark:bg-slate-900 dark:group-hover:border-blue-500">
				<ChevronRight className="h-4 w-4 text-gray-400 group-hover:text-brand-blue-dark dark:group-hover:text-blue-400" />
			</div>
		</a>
	);
}

function CategoryHeader({
	title,
	desc,
}: {
	title: string;
	desc?: string;
}): ReactElement {
	return (
		<div className="mb-4 px-3">
			<h3 className="mb-1 text-lg font-bold text-gray-900 dark:text-white">
				{title}
			</h3>
			{desc && (
				<p className="text-xs text-gray-500 dark:text-gray-400">{desc}</p>
			)}
		</div>
	);
}

export function CavinCaresMenu(): ReactElement {
	return (
		<div className="grid w-full grid-cols-12 gap-6 p-8">
			{/* Column 1: Awards & Recognition (Wide) */}
			<div className="col-span-5 flex flex-col justify-between border-r border-gray-100 pr-6 dark:border-slate-800">
				<CategoryHeader
					title="Awards & Recognition"
					desc="Learn what drives CavinKare's purpose and growth journey."
				/>
				<div className="flex flex-col gap-2">
					<MenuLink
						title="Chinnikrishnan Innovation Awards"
						desc="Learn what drives CavinKare's purpose and growth journey."
					/>
					<MenuLink
						title="CavinKare Ability Awards"
						desc="Learn what drives CavinKare's purpose and growth journey."
					/>
				</div>
			</div>

			{/* Column 2: CK Unavagam, Education & Empowerment */}
			<div className="col-span-4 flex flex-col gap-6 border-r border-gray-100 pr-6 dark:border-slate-800">
				<div>
					<MenuLink
						title="CK Unavagam"
						desc="Learn what drives CavinKare's purpose and growth journey."
					/>
				</div>
				<div className="mt-auto">
					<CategoryHeader
						title="Education & Empowerment"
						desc="Learn what drives CavinKare's purpose and growth journey."
					/>
					<MenuLink
						title="CavinKare Educational Institutions"
						desc="Learn what drives CavinKare's purpose and growth journey."
					/>
				</div>
			</div>

			{/* Column 3: Community Campaigns */}
			<div className="col-span-3 flex flex-col">
				<CategoryHeader
					title="Community Campaigns"
					desc="Learn what drives CavinKare's purpose and growth journey."
				/>
				<div className="mt-auto flex flex-col gap-2">
					<MenuLink
						title="CavinKare Walk India Campaign"
						desc="Learn what drives CavinKare's purpose and growth journey."
					/>
					<MenuLink
						title="CSR"
						desc="Learn what drives CavinKare's purpose and growth journey."
					/>
				</div>
			</div>
		</div>
	);
}
