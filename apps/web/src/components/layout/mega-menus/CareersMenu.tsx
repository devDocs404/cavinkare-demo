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

export function CareersMenu(): ReactElement {
	return (
		<div className="grid w-full grid-cols-2 gap-6 p-8">
			{/* Column 1: Gallery */}
			<div className="border-r border-gray-100 pr-6 dark:border-slate-800">
				<MenuLink
					title="Gallery"
					desc="Learn what drives CavinKare's purpose and growth journey."
				/>
			</div>

			{/* Column 2: Open Positions */}
			<div>
				<MenuLink
					title="Open Positions"
					desc="Learn what drives CavinKare's purpose and growth journey."
				/>
			</div>
		</div>
	);
}
