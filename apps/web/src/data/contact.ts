export type ContactCardIcon = "mail" | "headphones" | "map-pin" | "phone";

export type ContactCard = {
	readonly title: string;
	readonly description: string;
	readonly link: string;
	readonly href: string;
	readonly icon: ContactCardIcon;
};

export const CONTACT_CARDS = [
	{
		title: "Email",
		description: "Our friendly team is here to help.",
		link: "corpcomm@cavinkare.com",
		href: "mailto:corpcomm@cavinkare.com",
		icon: "mail",
	},
	{
		title: "Live Chat",
		description: "Our friendly team is here to help.",
		link: "Start new chat",
		href: "#",
		icon: "headphones",
	},
	{
		title: "Office",
		description: "Come say hello at our office HQ.",
		link: "CavinKare Pvt Ltd, No. 12, Cenotaph Road, Teynampet, Chennai.",
		href: "#",
		icon: "map-pin",
	},
	{
		title: "Phone",
		description: "Mon-Fri from 9am to 6pm.",
		link: "044 22251011 / 12 / 13",
		href: "tel:+914422251011",
		icon: "phone",
	},
] as const satisfies readonly ContactCard[];
