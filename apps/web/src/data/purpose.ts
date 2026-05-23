export type PurposeSlide = {
	readonly id: number;
	readonly title: string;
	readonly description: string;
	readonly image: string;
};

export const PURPOSE_SLIDES = [
	{
		id: 1,
		title: "ChinniKrishnan Innovation Awards",
		description:
			"ChinniKrishnan Innovation Awards are awarded for Innovations...",
		image:
			"https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
	},
	{
		id: 2,
		title: "CavinKare Ability Awards",
		description:
			"CavinKare Ability Awards For The Deserving Ones! To recognize and reward the achievements of differently-abled people",
		image:
			"https://images.unsplash.com/photo-1511632765486-a01980e01a18?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
	},
	{
		id: 3,
		title: "CK Educational Institutions",
		description:
			"CavinKare, has established educational institutions with a difference",
		image:
			"https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
	},
	{
		id: 4,
		title: "CK College of Engineering & Technology",
		description:
			"CavinKare, has established educational institutions with a difference",
		image:
			"https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
	},
	{
		id: 5,
		title: "Community Outreach",
		description:
			"Empowering communities through sustainable initiatives and outreach",
		image:
			"https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
	},
] as const satisfies readonly PurposeSlide[];
