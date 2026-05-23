import type { ReactElement } from "react";
import { FOOTER_LINKS, SOCIAL_LINKS } from "../../data/footer";

export function Footer(): ReactElement {
	return (
		<footer className="relative isolate overflow-hidden border-t border-white/10 bg-black text-white">
			{/* RED GLOW */}
			<div className="absolute bottom-[-320px] left-[-240px] h-[900px] w-[900px] rounded-full bg-[#EC174F]/50 blur-[220px]" />

			{/* SECONDARY SOFT LIGHT */}
			<div className="pointer-events-none absolute inset-x-0 top-[-120px] z-1 flex justify-center">
				<div
					className="h-[260px] w-[65%] rounded-full bg-white/10 blur-[120px]"
					style={{
						mixBlendMode: "screen",
					}}
				/>
			</div>

			{/* TOP RADIAL LIGHT */}
			<div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.12),transparent_50%)]" />

			{/* LEFT SHINING BORDER */}
			<div className="absolute top-0 left-0 h-full w-px bg-linear-to-b from-transparent via-white/40 to-transparent" />

			{/* CONTENT */}
			<div className="relative z-10 mx-auto max-w-7xl px-6 py-24">
				<div className="grid gap-20 lg:grid-cols-[0.2fr_1fr]">
					{/* LEFT SIDE */}
					<div className="relative">
						<div className="relative rounded-[32px] p-2">
							{/* LOGO */}
							<div className="flex h-24 w-40 items-center justify-center rounded-2xl bg-white shadow-[0_10px_50px_rgba(255,255,255,0.08)]">
								<img
									src="https://upload.wikimedia.org/wikipedia/en/7/70/CavinKare_logo.png"
									alt="CavinKare Logo"
									className="h-16 object-contain"
								/>
							</div>

							{/* COPYRIGHT */}
							<p className="mt-8 max-w-xs text-sm leading-relaxed text-white/50">
								© 2025 Cavinkare Group. All rights reserved.
							</p>

							{/* SOCIALS */}
							<div className="mt-10 flex items-center gap-5">
								{SOCIAL_LINKS.map((item) => (
									<a
										key={item.label}
										href={item.href}
										className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/3 text-sm font-medium tracking-wide text-white/65 transition-all duration-300 hover:border-white/20 hover:bg-white/6 hover:text-white"
									>
										{item.label}
									</a>
								))}
							</div>
						</div>
					</div>

					{/* RIGHT GRID */}
					<div className="grid gap-y-16 pl-10 sm:grid-cols-2 lg:grid-cols-4">
						{FOOTER_LINKS.map((section, index) => (
							<div
								key={section.title || `section-${index}`}
								className="relative mr-6"
							>
								{/* GRADIENT BORDER */}
								{section.hasDivider && (
									<div
										className="absolute right-0 h-full w-px"
										style={{
											background:
												"linear-gradient(180deg, rgba(44, 47, 48, 0.5) 0%, #8B9396 48.56%, rgba(44, 47, 48, 0.5) 100%)",
										}}
									/>
								)}

								{/* TITLE */}
								<h3 className="text-[11px] font-semibold tracking-[0.18em] text-[#8d9497] uppercase">
									{section.title ?? <>&nbsp;</>}
								</h3>

								{/* LINKS */}
								<ul className="mt-10 space-y-5">
									{section.links.map((link) => (
										<li key={link}>
											<a
												href="#/"
												className="text-[15px] text-white/75 transition-all duration-300 hover:translate-x-1 hover:text-white"
											>
												{link}
											</a>
										</li>
									))}
								</ul>
							</div>
						))}
					</div>
				</div>
			</div>
		</footer>
	);
}
