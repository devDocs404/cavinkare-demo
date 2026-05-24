import { ChevronDown, Menu, Moon, Search, Sun, X } from "lucide-react";
import type { ReactElement } from "react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

import brandLogo from "../../assets/brandLogo.svg";
import { NAV_ITEMS } from "../../data/navigation";
import { useTheme } from "../ui/theme-provider";
import { CareersMenu } from "./mega-menus/CareersMenu";
import { CavinCaresMenu } from "./mega-menus/CavinCaresMenu";
import { OrganisationMenu } from "./mega-menus/OrganisationMenu";
import { ProductsMenu } from "./mega-menus/ProductsMenu";

export function Navbar(): ReactElement {
	const { theme, setTheme } = useTheme();

	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
	const [activeMegaMenu, setActiveMegaMenu] = useState<string | null>(null);
	const [expandedMobileMenu, setExpandedMobileMenu] = useState<string | null>(
		null,
	);

	const location = useLocation();

	const isActive = (item: (typeof NAV_ITEMS)[number]) => {
		if (item.href === "/") {
			return location.pathname === "/";
		}
		return item.href ? location.pathname.startsWith(item.href) : false;
	};

	return (
		// biome-ignore lint/a11y/noStaticElementInteractions: Mouse tracking wrapper for closing mega menu
		<div
			className="group/nav relative"
			onMouseLeave={() => setActiveMegaMenu(null)}
		>
			{/* Navbar */}
			<nav className="sticky top-0 z-50 w-full border-b border-gray-100 bg-white/80 backdrop-blur-xl dark:border-slate-800 dark:bg-slate-950/80">
				<div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-4 md:px-6 lg:px-8">
					{/* Logo */}
					<a
						href="/"
						className="flex shrink-0 items-center transition-transform duration-300 hover:scale-[1.02]"
					>
						<img
							src={brandLogo}
							alt="CavinKare Logo"
							className="h-10 w-auto object-contain md:h-11 dark:invert"
						/>
					</a>

					{/* Desktop Navigation */}
					<div className="hidden h-full items-center gap-8 lg:flex">
						{NAV_ITEMS.map((item) => (
							<div key={item.label} className="flex h-full items-center">
								{item.hasDropdown ? (
									<button
										type="button"
										className="group flex items-center gap-1 text-sm font-medium text-gray-700 transition-colors duration-300 hover:text-brand-blue-dark dark:text-gray-200 dark:hover:text-blue-400"
										onMouseEnter={() => setActiveMegaMenu(item.label)}
										onFocus={() => setActiveMegaMenu(item.label)}
									>
										<span
											className={`text-[15px] font-bold transition-colors duration-300 ${
												isActive(item) || activeMegaMenu === item.label
													? "text-[#0033a0] dark:text-blue-400"
													: "text-[#9198a1] group-hover:text-black dark:group-hover:text-white"
											}`}
										>
											{item.label}
										</span>

										<ChevronDown
											className={`h-4 w-4 transition-all duration-300 ${
												activeMegaMenu === item.label
													? "rotate-180 text-[#0033a0] dark:text-blue-400"
													: "text-gray-400 group-hover:text-black dark:group-hover:text-white"
											}`}
										/>
									</button>
								) : (
									<Link
										to={item.href || "#"}
										className="group flex items-center gap-1 text-sm font-medium text-gray-700 transition-colors duration-300 hover:text-brand-blue-dark dark:text-gray-200 dark:hover:text-blue-400"
										onMouseEnter={() => setActiveMegaMenu(null)}
										onFocus={() => setActiveMegaMenu(null)}
									>
										<span
											className={`text-[15px] font-bold transition-colors duration-300 ${
												isActive(item)
													? "text-[#0033a0] dark:text-blue-400"
													: "text-[#9198a1] group-hover:text-black dark:group-hover:text-white"
											}`}
										>
											{item.label}
										</span>
									</Link>
								)}
							</div>
						))}
					</div>

					{/* Right Actions */}
					<div className="flex items-center gap-3">
						{/* Search */}
						<button
							type="button"
							aria-label="Search"
							className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-white/70 text-gray-700 transition-all duration-300 hover:scale-105 hover:border-brand-blue-dark hover:text-brand-blue-dark dark:border-slate-700 dark:bg-slate-900/60 dark:text-gray-200 dark:hover:border-blue-500 dark:hover:text-blue-400"
						>
							<Search className="h-4 w-4" />
						</button>

						{/* Theme Toggle */}
						<div className="hidden items-center rounded-full border border-gray-200 bg-gray-50/70 p-1 sm:flex dark:border-slate-700 dark:bg-slate-900/60">
							<button
								type="button"
								aria-label="Light mode"
								onClick={() => setTheme("light")}
								className={`flex h-8 w-8 items-center justify-center rounded-full transition-all duration-300 ${
									theme !== "dark"
										? "bg-white text-gray-700 shadow-sm dark:bg-slate-800 dark:text-white"
										: "text-gray-400 hover:text-gray-700 dark:hover:text-gray-200"
								} `}
							>
								<Sun className="h-4 w-4" />
							</button>

							<button
								type="button"
								aria-label="Dark mode"
								onClick={() => setTheme("dark")}
								className={`flex h-8 w-8 items-center justify-center rounded-full transition-all duration-300 ${
									theme === "dark"
										? "bg-white text-gray-700 shadow-sm dark:bg-slate-800 dark:text-white"
										: "text-gray-400 hover:text-gray-700 dark:hover:text-gray-200"
								} `}
							>
								<Moon className="h-4 w-4" />
							</button>
						</div>

						{/* Mobile Menu */}
						<button
							type="button"
							aria-label="Open menu"
							onClick={() => setIsMobileMenuOpen(true)}
							className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 text-gray-700 transition-all duration-300 hover:scale-105 hover:border-brand-blue-dark hover:text-brand-blue-dark lg:hidden dark:border-slate-700 dark:text-gray-200 dark:hover:border-blue-500 dark:hover:text-blue-400"
						>
							<Menu className="h-5 w-5" />
						</button>
					</div>
				</div>
			</nav>

			{/* Mega Menu Overlay */}
			<div
				className={`absolute left-0 right-0 top-full z-40 border-b border-gray-100 bg-white/95 shadow-xl backdrop-blur-xl transition-all duration-300 dark:border-slate-800 dark:bg-slate-950/95 ${
					activeMegaMenu
						? "visible translate-y-0 opacity-100"
						: "invisible -translate-y-2 opacity-0"
				}`}
			>
				<div className="mx-auto max-w-7xl">
					{activeMegaMenu === "Organisation" && <OrganisationMenu />}
					{activeMegaMenu === "Products" && <ProductsMenu />}
					{activeMegaMenu === "Cavin Cares" && <CavinCaresMenu />}
					{activeMegaMenu === "Careers" && <CareersMenu />}
				</div>
			</div>

			{/* Overlay */}
			<div
				onClick={() => setIsMobileMenuOpen(false)}
				aria-hidden="true"
				className={`fixed inset-0 z-90 bg-black/50 backdrop-blur-sm transition-all duration-300 lg:hidden ${
					isMobileMenuOpen
						? "pointer-events-auto opacity-100"
						: "pointer-events-none opacity-0"
				} `}
			/>

			{/* Mobile Sidebar */}
			<aside
				className={`fixed top-0 right-0 z-100 flex h-full w-[320px] flex-col border-l border-gray-100 bg-white shadow-2xl transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] lg:hidden dark:border-slate-800 dark:bg-slate-950 ${
					isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
				} `}
			>
				{/* Top */}
				<div className="flex items-center justify-between border-b border-gray-100 px-6 py-5 dark:border-slate-800">
					<img
						src={brandLogo}
						alt="CavinKare Logo"
						className="h-9 w-auto dark:invert"
					/>

					<button
						type="button"
						aria-label="Close menu"
						onClick={() => setIsMobileMenuOpen(false)}
						className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 text-gray-700 transition-all duration-300 hover:rotate-90 hover:border-red-500 hover:text-red-500 dark:border-slate-700 dark:text-gray-200"
					>
						<X className="h-5 w-5" />
					</button>
				</div>

				{/* Links */}
				<div className="flex flex-1 flex-col overflow-y-auto px-6 py-8">
					<div className="flex flex-col gap-2">
						{NAV_ITEMS.map((item) => (
							<div key={item.label} className="flex flex-col">
								{item.hasDropdown ? (
									<button
										type="button"
										onClick={() =>
											setExpandedMobileMenu(
												expandedMobileMenu === item.label ? null : item.label,
											)
										}
										className="group flex items-center justify-between border-b border-gray-100 py-3 text-left dark:border-slate-800"
									>
										<span
											className={`text-lg font-medium transition-colors duration-300 group-hover:text-brand-blue-dark dark:group-hover:text-blue-400 ${
												isActive(item)
													? "text-[#0033a0] dark:text-blue-400"
													: "text-gray-800 dark:text-gray-100"
											}`}
										>
											{item.label}
										</span>

										<ChevronDown
											className={`h-5 w-5 text-gray-400 transition-transform duration-300 group-hover:text-brand-blue-dark dark:group-hover:text-blue-400 ${
												expandedMobileMenu === item.label ? "rotate-180" : ""
											}`}
										/>
									</button>
								) : (
									<Link
										to={item.href || "#"}
										onClick={() => setIsMobileMenuOpen(false)}
										className="group flex items-center justify-between border-b border-gray-100 py-3 text-left dark:border-slate-800"
									>
										<span
											className={`text-lg font-medium transition-colors duration-300 group-hover:text-brand-blue-dark dark:group-hover:text-blue-400 ${
												isActive(item)
													? "text-[#0033a0] dark:text-blue-400"
													: "text-gray-800 dark:text-gray-100"
											}`}
										>
											{item.label}
										</span>
									</Link>
								)}
								{/* Expanded mobile sub-menu container */}
								{item.hasDropdown && expandedMobileMenu === item.label && (
									<div className="mt-2 flex flex-col gap-2 rounded-xl bg-gray-50 p-4 dark:bg-slate-900">
										<p className="text-sm text-gray-500 dark:text-gray-400">
											Detailed menu available on desktop version.
										</p>
									</div>
								)}
							</div>
						))}
					</div>

					{/* Theme */}
					<div className="mt-auto flex items-center justify-between border-t border-gray-100 pt-8 dark:border-slate-800">
						<span className="text-sm font-medium text-gray-500 dark:text-gray-300">
							Appearance
						</span>

						<div className="flex items-center rounded-full border border-gray-200 bg-gray-50/70 p-1 dark:border-slate-700 dark:bg-slate-900/60">
							<button
								type="button"
								aria-label="Light mode"
								onClick={() => setTheme("light")}
								className={`flex h-8 w-8 items-center justify-center rounded-full transition-all duration-300 ${
									theme !== "dark"
										? "bg-white text-gray-700 shadow-sm dark:bg-slate-800 dark:text-white"
										: "text-gray-400"
								} `}
							>
								<Sun className="h-4 w-4" />
							</button>

							<button
								type="button"
								aria-label="Dark mode"
								onClick={() => setTheme("dark")}
								className={`flex h-8 w-8 items-center justify-center rounded-full transition-all duration-300 ${
									theme === "dark"
										? "bg-white text-gray-700 shadow-sm dark:bg-slate-800 dark:text-white"
										: "text-gray-400"
								} `}
							>
								<Moon className="h-4 w-4" />
							</button>
						</div>
					</div>
				</div>
			</aside>
		</div>
	);
}
