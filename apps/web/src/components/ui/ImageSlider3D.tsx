import { motion, useReducedMotion } from "motion/react";
import { type ReactElement, useMemo } from "react";

import { BRAND_IMAGES } from "../../data/brands";

interface Slider3DProps {
	/** Array of image URLs to display */
	images?: string[];
	/** Duration of one full 360-degree rotation (in seconds) */
	duration?: number;
	/** Width of each card. Can be px, rem, em, etc. */
	cardWidth?: string;
	/** CSS aspect ratio of the cards */
	cardAspectRatio?: string;
	/** CSS perspective value for the 3D container */
	perspective?: string;
	/** Additional classes for the outermost container */
	containerClassName?: string;
	/** Additional classes for the individual image elements */
	imageClassName?: string;
	/** Direction of the rotation */
	rotationDirection?: "left" | "right";
	/** Whether to apply a gradient fade mask on the edges */
	withMask?: boolean;
}

export function ImageSlider3D({
	images = [...BRAND_IMAGES],
	duration = 32,
	cardWidth = "17.5em",
	cardAspectRatio = "7/10",
	perspective = "35em",
	containerClassName = "",
	imageClassName = "",
	rotationDirection = "left",
	withMask = true,
}: Slider3DProps): ReactElement {
	const n = images.length;
	const prefersReducedMotion = useReducedMotion();
	const animationDuration = prefersReducedMotion ? duration * 4 : duration;

	// rotation angles based on direction
	const rotationValues = rotationDirection === "left" ? [0, 360] : [360, 0];

	const maskStyles = withMask
		? {
				WebkitMask:
					"linear-gradient(90deg, transparent, #000 20% 80%, transparent)",
				mask: "linear-gradient(90deg, transparent, #000 20% 80%, transparent)",
			}
		: {};

	const items = useMemo(
		() => images.map((src, idx) => ({ id: `slider-img-${idx}`, src })),
		[images],
	);

	return (
		<div
			className={`grid h-full min-h-[500px] w-full place-items-center overflow-hidden ${containerClassName}`}
			style={{
				perspective: perspective,
				...maskStyles,
			}}
		>
			<motion.div
				className="pointer-events-auto grid place-self-center"
				style={{
					transformStyle: "preserve-3d",
				}}
				animate={{
					rotateY: rotationValues,
				}}
				transition={{
					duration: animationDuration,
					ease: "linear",
					repeat: Infinity,
				}}
			>
				{items.map((item, i) => (
					<img
						key={item.id}
						src={item.src}
						alt="Brand showcase"
						className={`col-start-1 row-start-1 rounded-[1.5em] object-cover ${imageClassName}`}
						style={{
							width: cardWidth,
							aspectRatio: cardAspectRatio,
							backfaceVisibility: "hidden",
							WebkitBackfaceVisibility: "hidden",
							transform: `rotateY(calc(${i} * (1turn / ${n}))) translateZ(calc(-1 * (0.5 * ${cardWidth} + 0.5em) / tan(0.5 * (1turn / ${n}))))`,
						}}
					/>
				))}
			</motion.div>
		</div>
	);
}
