import { motion } from "motion/react";
import type { ReactNode } from "react";

interface FadeInStaggerContainerProps {
	children: ReactNode;
	className?: string;
	staggerDelay?: number;
	delayChildren?: number;
	once?: boolean;
	amount?: "some" | "all" | number;
}

export function FadeInStaggerContainer({
	children,
	className,
	staggerDelay = 0.1,
	delayChildren = 0,
	once = true,
	amount = "some",
}: FadeInStaggerContainerProps) {
	return (
		<motion.div
			className={className}
			initial="hidden"
			whileInView="visible"
			viewport={{ once, amount }}
			variants={{
				hidden: {},
				visible: {
					transition: {
						staggerChildren: staggerDelay,
						delayChildren,
					},
				},
			}}
		>
			{children}
		</motion.div>
	);
}

interface FadeInStaggerItemProps {
	children: ReactNode;
	className?: string;
	direction?: "up" | "down" | "left" | "right" | "none";
	duration?: number;
}

export function FadeInStaggerItem({
	children,
	className,
	direction = "up",
	duration = 0.8,
}: FadeInStaggerItemProps) {
	const directions = {
		up: { y: 30, x: 0 },
		down: { y: -30, x: 0 },
		left: { x: 30, y: 0 },
		right: { x: -30, y: 0 },
		none: { x: 0, y: 0 },
	};

	return (
		<motion.div
			className={className}
			variants={{
				hidden: {
					opacity: 0,
					...directions[direction],
				},
				visible: {
					opacity: 1,
					x: 0,
					y: 0,
					transition: {
						duration,
						ease: [0.21, 0.47, 0.32, 0.98], // smooth premium easing
					},
				},
			}}
		>
			{children}
		</motion.div>
	);
}
