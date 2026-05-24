export type NavItem = {
	readonly label: string;
	readonly hasDropdown: boolean;
	readonly href?: string;
};

export const NAV_ITEMS = [
	{
		label: "Home",
		hasDropdown: false,
		href: "/",
	},
	{
		label: "Organisation",
		hasDropdown: true,
		href: "/organisation",
	},
	{
		label: "Products",
		hasDropdown: true,
		href: "/products",
	},
	{
		label: "Cavin Cares",
		hasDropdown: true,
		href: "/cavin-cares",
	},
	{
		label: "Careers",
		hasDropdown: true,
		href: "/careers",
	},
	{
		label: "Contact Us",
		hasDropdown: false,
		href: "/contact-us",
	},
] as const satisfies readonly NavItem[];
