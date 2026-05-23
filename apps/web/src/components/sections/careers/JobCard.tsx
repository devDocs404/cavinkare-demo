import type { ReactElement } from "react";
import type { JobCard as JobCardType } from "../../../data/careers";

interface JobCardProps {
	card: JobCardType;
	isActive: boolean;
}

export function JobCard({ card, isActive }: JobCardProps): ReactElement {
	return (
		<div
			className={`relative z-0 h-full w-full rounded-[34px] p-[10px] transition-shadow duration-700 ${isActive ? "shadow-[0_20px_80px_rgba(0,71,255,0.15)]" : "shadow-none"}`}
		>
			{/* Border Background - Active */}
			<div
				className={`absolute inset-0 rounded-[34px] bg-linear-to-br from-white/95 via-white/70 to-[#0047ff] transition-opacity duration-700 ${
					isActive ? "opacity-100" : "opacity-0"
				}`}
			/>
			{/* Border Background - Inactive */}
			<div
				className={`absolute inset-0 rounded-[34px] border-2 border-slate-200 bg-white transition-opacity duration-700 ${
					isActive ? "opacity-0" : "opacity-100"
				}`}
			/>

			{/* INNER CARD */}
			<div className="relative z-10 flex h-full flex-col overflow-hidden rounded-[26px] px-6 py-8 sm:px-10 sm:py-12">
				{/* Inner Card Background - Active */}
				<div
					className={`absolute inset-0 bg-linear-to-br from-[#0f1d39] via-[#0b2f7d] to-[#0047d9] transition-opacity duration-700 ${
						isActive ? "opacity-100" : "opacity-0"
					}`}
				/>
				{/* Inner Card Background - Inactive */}
				<div
					className={`absolute inset-0 bg-slate-50 transition-opacity duration-700 ${
						isActive ? "opacity-0" : "opacity-100"
					}`}
				/>

				{/* INNER STROKE (Only when active) */}
				<div
					className={`pointer-events-none absolute inset-[10px] rounded-[22px] border border-white/6 transition-opacity duration-700 ${
						isActive ? "opacity-100" : "opacity-0"
					}`}
				/>

				{/* SOFT GLOW (Only when active) */}
				<div
					className={`absolute top-[-120px] left-[-120px] h-[320px] w-[320px] rounded-full bg-white/10 blur-3xl transition-opacity duration-700 ${
						isActive ? "opacity-100" : "opacity-0"
					}`}
				/>

				{/* BOTTOM SHAPE */}
				<div
					className={`absolute bottom-[-120px] left-[18%] h-[320px] w-[320px] rounded-full border-26 transition-colors duration-700 ${
						isActive ? "border-white/6" : "border-slate-200"
					}`}
				/>

				<div className="relative z-10 flex h-full flex-col justify-between gap-10">
					{/* TOP CONTENT */}
					<div className="max-w-3xl">
						{/* BADGE */}
						<div
							className={`inline-flex items-center rounded-full border px-4 py-1 text-sm font-medium backdrop-blur-md transition-colors duration-700 ${
								isActive
									? "border-white/50 bg-white/5 text-white"
									: "border-slate-300 bg-white text-slate-700 shadow-sm dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200"
							}`}
						>
							New
						</div>

						{/* TITLE */}
						<h3
							className={`mt-6 max-w-4xl text-3xl leading-[1.1] font-semibold tracking-[-0.02em] transition-colors duration-700 sm:text-4xl lg:text-[44px] ${
								isActive ? "text-white" : "text-brand-dark dark:text-white"
							}`}
						>
							{card.title}
						</h3>

						{/* DESCRIPTION */}
						<p
							className={`mt-6 max-w-3xl text-base leading-relaxed font-medium transition-colors duration-700 sm:text-lg lg:text-[22px] lg:leading-normal ${
								isActive
									? "text-white/90"
									: "text-slate-600 dark:text-slate-400"
							}`}
						>
							{card.description}
						</p>

						{/* META */}
						<p
							className={`mt-8 text-base font-medium transition-colors duration-700 sm:text-lg ${
								isActive ? "text-white" : "text-slate-500 dark:text-slate-500"
							}`}
						>
							Location: {card.location} | Type: {card.type}
						</p>
					</div>

					{/* BUTTON */}
					<div className="flex justify-start sm:justify-end">
						<button
							type="button"
							className={`group relative overflow-hidden rounded-full border px-8 py-3.5 text-base font-medium backdrop-blur-md transition-colors duration-700 ${
								isActive
									? "border-white/40 bg-white/5 text-white hover:bg-white hover:text-[#0a2d82]"
									: "border-slate-300 bg-white text-[#0a2d82] shadow-sm hover:border-[#0a2d82] hover:bg-[#0a2d82] hover:text-white dark:border-slate-700 dark:bg-slate-800 dark:text-blue-400 dark:hover:bg-blue-900"
							}`}
						>
							<span className="relative z-10">Apply Now</span>
							<div
								className={`absolute inset-0 translate-y-full transition-transform duration-300 group-hover:translate-y-0 ${
									isActive ? "bg-white" : "bg-[#0a2d82] dark:bg-blue-900"
								}`}
							/>
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}
