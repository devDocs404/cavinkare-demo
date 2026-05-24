import { ChevronRight } from "lucide-react";
import type { ReactElement } from "react";
import brandLogo from "../../../assets/brandLogo.svg";

function CategoryHeader({
	title,
	desc,
}: {
	title: string;
	desc?: string;
}): ReactElement {
	return (
		<div className="mb-4">
			<h3 className="mb-1 text-lg font-bold text-gray-900 dark:text-white">
				{title}
			</h3>
			{desc && (
				<p className="text-xs text-gray-500 dark:text-gray-400">{desc}</p>
			)}
		</div>
	);
}

function SubCategoryHeader({
	title,
	desc,
}: {
	title: string;
	desc?: string;
}): ReactElement {
	return (
		<div className="mb-2 mt-6 first:mt-0">
			<h4 className="mb-1 text-sm font-bold text-gray-800 dark:text-gray-200">
				{title}
			</h4>
			{desc && (
				<p className="text-xs text-gray-500 dark:text-gray-400">{desc}</p>
			)}
		</div>
	);
}

function ProductLink({ title }: { title: string }): ReactElement {
	return (
		<a
			href="#/"
			className="group flex items-center justify-between rounded-lg p-2 transition-colors hover:bg-gray-50 dark:hover:bg-slate-800/50"
		>
			<span className="text-xs font-semibold text-gray-700 dark:text-gray-300 group-hover:text-brand-blue-dark dark:group-hover:text-blue-400">
				{title}
			</span>
			<ChevronRight className="h-3 w-3 text-gray-400 transition-transform group-hover:translate-x-0.5 group-hover:text-brand-blue-dark dark:group-hover:text-blue-400" />
		</a>
	);
}

export function ProductsMenu(): ReactElement {
	return (
		<div className="grid w-full grid-cols-4 gap-6 p-8">
			{/* Column 1: Personal Care */}
			<div className="flex flex-col border-r border-gray-100 pr-6 dark:border-slate-800">
				<CategoryHeader
					title="Personal Care"
					desc="Learn what drives CavinKare's purpose and growth journey."
				/>

				<div className="flex flex-col">
					<SubCategoryHeader
						title="Hair Care"
						desc="Learn what drives CavinKare's purpose and growth journey."
					/>
					<div className="flex flex-col">
						<ProductLink title="Meera" />
						<ProductLink title="Karthika" />
						<ProductLink title="Chik" />
						<ProductLink title="Nyle" />
					</div>

					<SubCategoryHeader
						title="Hair Color"
						desc="Learn what drives CavinKare's purpose and growth journey."
					/>
					<div className="flex flex-col">
						<ProductLink title="Indica" />
					</div>

					<SubCategoryHeader
						title="Skin Care"
						desc="Learn what drives CavinKare's purpose and growth journey."
					/>
					<div className="flex flex-col">
						<ProductLink title="Spinz" />
						<ProductLink title="Fairever" />
					</div>
				</div>
			</div>

			{/* Column 2: Dairy, Beverages, Food & Snacks */}
			<div className="flex flex-col border-r border-gray-100 pr-6 dark:border-slate-800">
				<div className="flex flex-col">
					<SubCategoryHeader
						title="Dairy"
						desc="Learn what drives CavinKare's purpose and growth journey."
					/>
					<div className="flex flex-col">
						<ProductLink title="Cavin's" />
						<ProductLink title="H-for Milk" />
					</div>

					<SubCategoryHeader
						title="Beverages"
						desc="Learn what drives CavinKare's purpose and growth journey."
					/>
					<div className="flex flex-col">
						<ProductLink title="Maa" />
					</div>

					<SubCategoryHeader
						title="Food & Snacks"
						desc="Learn what drives CavinKare's purpose and growth journey."
					/>
					<div className="flex flex-col">
						<ProductLink title="Garden" />
						<ProductLink title="Ruchi" />
						<ProductLink title="Bhima" />
						<ProductLink title="Hema's" />
					</div>
				</div>
			</div>

			{/* Column 3: Saloon, Pet Care */}
			<div className="flex flex-col border-r border-gray-100 pr-6 dark:border-slate-800">
				<div className="flex flex-col">
					<SubCategoryHeader
						title="Saloon"
						desc="Learn what drives CavinKare's purpose and growth journey."
					/>
					<div className="flex flex-col">
						<ProductLink title="Green Trends" />
						<ProductLink title="Limelite" />
					</div>

					<SubCategoryHeader
						title="Pet Care"
						desc="Learn what drives CavinKare's purpose and growth journey."
					/>
					<div className="flex flex-col">
						<ProductLink title="Petterati" />
					</div>
				</div>
				{/* Image Placeholder */}
				<div className="mt-auto flex items-center justify-center p-4">
					<img
						src={brandLogo}
						alt="CavinKare Logo"
						className="h-24 w-auto object-contain opacity-50 grayscale dark:invert"
					/>
				</div>
			</div>

			{/* Column 4: Professional Care, Aesthetic Clinic */}
			<div className="flex flex-col">
				<div className="flex flex-col">
					<SubCategoryHeader
						title="Professional Care"
						desc="Learn what drives CavinKare's purpose and growth journey."
					/>
					<div className="flex flex-col">
						<ProductLink title="Raaga" />
						<ProductLink title="Kone" />
						<ProductLink title="Indica Professional" />
					</div>

					<SubCategoryHeader
						title="Aesthetic Clinic"
						desc="Learn what drives CavinKare's purpose and growth journey."
					/>
					<div className="flex flex-col">
						<ProductLink title="Elexify" />
					</div>
				</div>
			</div>
		</div>
	);
}
