export type NavItem = {
	readonly label: string;
	readonly hasDropdown: boolean;
};

export const NAV_ITEMS = [
	{
		label: "Home",
		hasDropdown: false,
	},
	{
		label: "Organisation",
		hasDropdown: true,
	},
	{
		label: "Products",
		hasDropdown: true,
	},
	{
		label: "Cavin Cares",
		hasDropdown: true,
	},
	{
		label: "Careers",
		hasDropdown: true,
	},
	{
		label: "Contact Us",
		hasDropdown: false,
	},
] as const satisfies readonly NavItem[];
