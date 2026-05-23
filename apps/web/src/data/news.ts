export type NewsItem = {
	readonly title: string;
	readonly subtitle: string;
	readonly imageUrl: string;
	readonly containerClass: string;
	readonly isLarge?: boolean;
	readonly isOverlap?: boolean;
};

export const NEWS_ITEMS = [
	{
		title: "CavinKare Ability Awards",
		subtitle:
			"Engaging in initiatives that would make world a better place to live in.",
		imageUrl:
			"https://images.unsplash.com/photo-1562322140-8baeececf3df?q=80&w=2000&auto=format&fit=crop",
		containerClass:
			"md:col-start-1 md:col-end-6 md:row-start-1 md:row-end-3 min-h-[350px]",
		isLarge: true,
	},
	{
		title: "Franchisee - GreenTrends Unisex Hair & Style Salon",
		subtitle:
			"Trends Division of CavinKare came into being in July 2002 with a clear-cut focus on providing styling and beauty solutions.",
		imageUrl:
			"https://images.unsplash.com/photo-1562322140-8baeececf3df?q=80&w=2000&auto=format&fit=crop",
		containerClass:
			"md:col-start-6 md:col-end-13 md:row-start-1 md:row-end-2 min-h-[300px] md:min-h-[320px]",
	},
	{
		title: "Where work is fun & fun is work!",
		subtitle: "Here's the place where you can enjoy freedom",
		imageUrl:
			"https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2000&auto=format&fit=crop",
		containerClass:
			"md:col-start-4 md:col-end-8 md:row-start-2 md:row-end-3 min-h-[300px] md:min-h-[320px]",
		isOverlap: true,
	},
	{
		title:
			"Hair colour brand Indica ropes in Akshay Kumar and Ileana D'Cruz as brand ambassadors",
		subtitle:
			"Indica has been growing rapidly over the years and is in the verge of accelerating its growth further.",
		imageUrl:
			"https://images.unsplash.com/photo-1522337660859-02fbefca4702?q=80&w=2000&auto=format&fit=crop",
		containerClass:
			"md:col-start-8 md:col-end-13 md:row-start-2 md:row-end-3 min-h-[300px] md:min-h-[320px]",
	},
] as const satisfies readonly NewsItem[];
