import type { ReactElement, ReactNode } from "react";
import { FadeInStaggerItem } from "../../ui/motion/FadeInStagger";

interface StatCardProps {
	children: ReactNode;
	className?: string;
}

export function StatCard({
	children,
	className = "",
}: StatCardProps): ReactElement {
	return (
		<FadeInStaggerItem
			className={`group relative flex flex-col overflow-hidden rounded-3xl bg-surface-card p-8 shadow-sm transition-all duration-300 hover:shadow-md dark:bg-slate-800 ${className}`}
		>
			{children}
		</FadeInStaggerItem>
	);
}
