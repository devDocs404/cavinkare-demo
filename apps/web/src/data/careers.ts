export type JobCard = {
	readonly id: number;
	readonly title: string;
	readonly description: string;
	readonly location: string;
	readonly type: string;
	readonly theme: "dark" | "light";
};

export type PersonStory = {
	readonly id: number;
	readonly name: string;
	readonly role: string;
	readonly quote: string;
	readonly image: string;
};

export const JOB_CARDS = [
	{
		id: 1,
		title: "R&D Executive – Personal Care",
		description:
			"Join our innovation team to develop future-ready products across haircare and skincare. Work with advanced labs and formulation systems.",
		location: "Chennai",
		type: "Full-Time",
		theme: "dark",
	},
	{
		id: 2,
		title: "HR Business Corporate",
		description:
			"Support teams with people development, and employment. Join our growing workplace culture.",
		location: "Chennai",
		type: "Full-Time",
		theme: "light",
	},
	{
		id: 3,
		title: "Senior Brand Manager",
		description:
			"Lead our flagship personal care brands, drive marketing campaigns, and shape the strategic vision for the category.",
		location: "Mumbai",
		type: "Full-Time",
		theme: "light",
	},
] as const satisfies readonly JobCard[];

export const PEOPLE = [
	{
		id: 1,
		name: "Usha Guru",
		role: "Director & Business Head",
		quote:
			"CavinKare gave me more than a job — it gave me a stage to grow. I joined as a trainee and now lead a product team. The trust, mentorship, and innovation-first mindset here is unmatched.",
		image:
			"https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80",
	},
	{
		id: 2,
		name: "Pranavesh",
		role: "Data Analyst",
		quote:
			"Joining CavinKare was a turning point in my career. I've been able to leverage data storytelling to drive decisions and contribute to impactful strategies that shape our company's future.",
		image:
			"https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&w=800&q=80",
	},
	{
		id: 3,
		name: "Anup Nandan HM",
		role: "Senior UX Designer",
		quote:
			"At CavinKare, I've transformed user experiences by leading design sprints and collaborating closely with developers. The focus on user-centric design has allowed me to push creative boundaries.",
		image:
			"https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80",
	},
	{
		id: 4,
		name: "Leila Khan",
		role: "Marketing Manager",
		quote:
			"In my role at CavinKare, I orchestrate campaigns that resonate with audiences. The culture of creativity and support here has empowered me to innovate and exceed our marketing goals.",
		image:
			"https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=800&q=80",
	},
] as const satisfies readonly PersonStory[];
