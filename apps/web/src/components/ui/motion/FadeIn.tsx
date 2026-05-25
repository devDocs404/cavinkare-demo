import { motion } from "motion/react";
import type { ReactNode } from "react";

interface FadeInProps {
	children: ReactNode;
	className?: string;
	delay?: number;
	direction?: "up" | "down" | "left" | "right" | "none";
	duration?: number;
	once?: boolean;
	amount?: "some" | "all" | number;
}

export function FadeIn({
	children,
	className,
	delay = 0,
	direction = "up",
	duration = 0.8,
	once = true,
	amount = "some",
}: FadeInProps) {
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
			initial={{
				opacity: 0,
				...directions[direction],
			}}
			whileInView={{
				opacity: 1,
				x: 0,
				y: 0,
			}}
			viewport={{ once, amount }}
			transition={{
				duration,
				delay,
				ease: [0.21, 0.47, 0.32, 0.98], // smooth premium easing
			}}
		>
			{children}
		</motion.div>
	);
}
