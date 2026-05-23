export type SocialLink = {
	readonly label: string;
	readonly href: string;
};

export type FooterSection = {
	readonly title?: string;
	readonly links: readonly string[];
	readonly hasDivider: boolean;
};

export const SOCIAL_LINKS = [
	{ label: "X", href: "#" },
	{ label: "IN", href: "#" },
	{ label: "FB", href: "#" },
] as const satisfies readonly SocialLink[];

export const FOOTER_LINKS = [
	{
		title: "Organisation",
		links: ["Cavinkare", "Operations", "Media & Recognitions", "Innovations"],
		hasDivider: true,
	},
	{
		title: "Products",
		links: [
			"Personal Care",
			"Professional Care",
			"Food & Snacks",
			"Beverages",
			"Dairy",
			"Aesthetic Clinic",
			"Salon",
			"Pet Care",
		],
		hasDivider: true,
	},
	{
		title: "Brands",
		links: ["Chik", "Nyle", "Meera", "Karthika", "Indica", "Hema's"],
		hasDivider: false,
	},
	{
		title: undefined,
		links: ["Fairever", "Raaga", "Cavin's", "Ruchi", "Garden"],
		hasDivider: false,
	},
	{
		title: "Careers",
		links: [
			"Gallery",
			"Open Positions",
			"Life at CavinKare",
			"Happy Employees",
		],
		hasDivider: true,
	},
	{
		title: "Cavin Cares",
		links: [
			"Awards & Recognition",
			"CK Unavagam",
			"Education & Empowerment",
			"Community Campaigns",
		],
		hasDivider: true,
	},
	{
		title: "Legal",
		links: ["Privacy Policy", "Disclaimer", "Terms & Conditions"],
		hasDivider: false,
	},
] as const satisfies readonly FooterSection[];
