import { Headphones, Mail, MapPin, Phone, CheckCircle2 } from "lucide-react";
import { useState, type ReactElement, type ReactNode } from "react";
import type { ContactCardIcon } from "../../data/contact";
import { CONTACT_CARDS } from "../../data/contact";
import { FadeIn } from "../ui/motion/FadeIn";
import {
	FadeInStaggerContainer,
	FadeInStaggerItem,
} from "../ui/motion/FadeInStagger";
import { AnimatePresence, motion } from "motion/react";

const ICON_MAP: Record<ContactCardIcon, ReactNode> = {
	mail: <Mail size={18} />,
	headphones: <Headphones size={18} />,
	"map-pin": <MapPin size={18} />,
	phone: <Phone size={18} />,
};

export function Contact(): ReactElement {
	const [formData, setFormData] = useState({
		firstName: "",
		lastName: "",
		email: "",
		message: "",
		privacyPolicy: false,
	});
	const [errors, setErrors] = useState<Record<string, string>>({});
	const [showToast, setShowToast] = useState(false);

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
	) => {
		const { name, value, type } = e.target;
		const val =
			type === "checkbox" ? (e.target as HTMLInputElement).checked : value;
		setFormData((prev) => ({ ...prev, [name]: val }));
		if (errors[name]) {
			setErrors((prev) => ({ ...prev, [name]: "" }));
		}
	};

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		const newErrors: Record<string, string> = {};

		if (!formData.firstName.trim())
			newErrors.firstName = "First name is required";
		if (!formData.lastName.trim()) newErrors.lastName = "Last name is required";
		if (!formData.email.trim()) {
			newErrors.email = "Email is required";
		} else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
			newErrors.email = "Invalid email format";
		}
		if (!formData.message.trim()) newErrors.message = "Message is required";
		if (!formData.privacyPolicy)
			newErrors.privacyPolicy = "You must agree to the privacy policy";

		if (Object.keys(newErrors).length > 0) {
			setErrors(newErrors);
			return;
		}

		setShowToast(true);
		setFormData({
			firstName: "",
			lastName: "",
			email: "",
			message: "",
			privacyPolicy: false,
		});
		setTimeout(() => setShowToast(false), 3000);
	};

	return (
		<section
			id="contact"
			aria-labelledby="contact-heading"
			className="relative overflow-hidden bg-white py-24 dark:bg-slate-950"
		>
			<AnimatePresence>
				{showToast && (
					<motion.div
						initial={{ opacity: 0, y: 50 }}
						animate={{ opacity: 1, y: 0 }}
						exit={{ opacity: 0, y: 50 }}
						className="fixed bottom-6 right-6 z-50 flex items-center gap-3 rounded-xl bg-white px-6 py-4 shadow-[0_10px_40px_rgba(0,0,0,0.1)] dark:bg-slate-800"
					>
						<CheckCircle2 className="h-6 w-6 text-green-500" />
						<div className="flex flex-col">
							<span className="text-sm font-semibold text-slate-900 dark:text-white">
								Success!
							</span>
							<span className="text-sm text-slate-500 dark:text-slate-400">
								Message sent successfully.
							</span>
						</div>
					</motion.div>
				)}
			</AnimatePresence>

			<div className="mx-auto grid max-w-6xl gap-14 px-6 lg:grid-cols-1 lg:items-start">
				{/* HEADING */}
				<FadeIn>
					<h2
						id="contact-heading"
						className="text-5xl font-bold tracking-[-0.04em] text-brand-dark dark:text-white"
					>
						Chat to our friendly team
					</h2>

					<p className="mt-4 text-base leading-relaxed text-[#535862] dark:text-slate-400">
						We&apos;d love to hear from you. Please fill out this form or shoot
						us an email.
					</p>
				</FadeIn>
				<div className="flex flex-col justify-between xl:flex-row gap-2">
					{/* LEFT SIDE */}
					<div className="w-full md:w-1/2">
						{/* CONTACT CARDS */}
						<FadeInStaggerContainer className="grid gap-5 sm:grid-cols-2">
							{CONTACT_CARDS.map((item) => (
								<FadeInStaggerItem
									key={item.title}
									className="rounded-[24px] border border-neutral-100 bg-white p-7 shadow-[0_10px_40px_rgba(0,0,0,0.03)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_15px_50px_rgba(0,0,0,0.06)] dark:border-slate-800 dark:bg-slate-900 dark:hover:shadow-[0_15px_50px_rgba(0,0,0,0.3)]"
								>
									{/* ICON */}
									<div className="flex h-11 w-11 items-center justify-center rounded-lg bg-[#eef1f6] text-brand-blue dark:bg-slate-800 dark:text-blue-400">
										{ICON_MAP[item.icon]}
									</div>

									{/* TITLE */}
									<h3 className="mt-2 text-2xl font-semibold tracking-[-0.03em] text-brand-dark dark:text-white">
										{item.title}
									</h3>

									{/* DESCRIPTION */}
									<p className="mt-2 text-sm leading-relaxed text-[#819298] dark:text-slate-400">
										{item.description}
									</p>

									{/* LINK */}
									<a
										href={item.href}
										className="mt-8 inline-block text-sm font-semibold text-blue-700 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
									>
										<span className="text-gradient-brand">{item.link}</span>
									</a>
								</FadeInStaggerItem>
							))}
						</FadeInStaggerContainer>
					</div>

					{/* RIGHT SIDE */}
					<FadeIn
						delay={0.4}
						className="rounded-xl border border-neutral-100 bg-[#f6f8fb] p-7 shadow-[0_20px_60px_rgba(0,0,0,0.04)] dark:border-slate-800 dark:bg-slate-900/50"
					>
						<form
							aria-label="Contact form"
							onSubmit={handleSubmit}
							className="space-y-5"
						>
							{/* NAME */}
							<div className="grid gap-4 sm:grid-cols-2">
								<div className="space-y-1.5">
									<label
										htmlFor="first-name"
										className="text-sm font-medium text-brand-dark dark:text-slate-300"
									>
										First Name
									</label>
									<input
										id="first-name"
										name="firstName"
										type="text"
										value={formData.firstName}
										onChange={handleChange}
										placeholder="First Name"
										className={`h-12 w-full rounded-xl border ${errors.firstName ? "border-red-500 focus:border-red-500" : "border-neutral-200 focus:border-brand-blue"} bg-[#fafafa] px-4 text-sm transition-all outline-none placeholder:text-neutral-400 focus:bg-white dark:border-slate-700 dark:bg-slate-800 dark:text-white dark:focus:bg-slate-900`}
									/>
									{errors.firstName && (
										<p className="text-xs text-red-500">{errors.firstName}</p>
									)}
								</div>

								<div className="space-y-1.5">
									<label
										htmlFor="last-name"
										className="text-sm font-medium text-brand-dark dark:text-slate-300"
									>
										Last Name
									</label>
									<input
										id="last-name"
										name="lastName"
										type="text"
										value={formData.lastName}
										onChange={handleChange}
										placeholder="Last Name"
										className={`h-12 w-full rounded-xl border ${errors.lastName ? "border-red-500 focus:border-red-500" : "border-neutral-200 focus:border-brand-blue"} bg-[#fafafa] px-4 text-sm transition-all outline-none placeholder:text-neutral-400 focus:bg-white dark:border-slate-700 dark:bg-slate-800 dark:text-white dark:focus:bg-slate-900`}
									/>
									{errors.lastName && (
										<p className="text-xs text-red-500">{errors.lastName}</p>
									)}
								</div>
							</div>

							{/* EMAIL */}
							<div className="space-y-1.5">
								<label
									htmlFor="email"
									className="text-sm font-medium text-brand-dark dark:text-slate-300"
								>
									Email
								</label>
								<input
									id="email"
									name="email"
									type="email"
									value={formData.email}
									onChange={handleChange}
									placeholder="Email"
									className={`h-12 w-full rounded-xl border ${errors.email ? "border-red-500 focus:border-red-500" : "border-neutral-200 focus:border-brand-blue"} bg-[#fafafa] px-4 text-sm transition-all outline-none placeholder:text-neutral-400 focus:bg-white dark:border-slate-700 dark:bg-slate-800 dark:text-white dark:focus:bg-slate-900`}
								/>
								{errors.email && (
									<p className="text-xs text-red-500">{errors.email}</p>
								)}
							</div>

							{/* MESSAGE */}
							<div className="space-y-1.5">
								<label
									htmlFor="message"
									className="text-sm font-medium text-brand-dark dark:text-slate-300"
								>
									Message
								</label>
								<textarea
									id="message"
									name="message"
									rows={7}
									value={formData.message}
									onChange={handleChange}
									placeholder="Leave us a Message"
									className={`w-full resize-none rounded-xl border ${errors.message ? "border-red-500 focus:border-red-500" : "border-neutral-200 focus:border-brand-blue"} bg-[#fafafa] p-4 text-sm transition-all outline-none placeholder:text-neutral-400 focus:bg-white dark:border-slate-700 dark:bg-slate-800 dark:text-white dark:focus:bg-slate-900`}
								/>
								{errors.message && (
									<p className="text-xs text-red-500">{errors.message}</p>
								)}
							</div>

							{/* CHECKBOX */}
							<div className="flex flex-col gap-1">
								<div className="flex items-start gap-3">
									<div className="flex h-5 items-center">
										<input
											id="privacy-policy"
											name="privacyPolicy"
											type="checkbox"
											checked={formData.privacyPolicy}
											onChange={handleChange}
											className="h-4 w-4 rounded border-neutral-300 text-brand-blue focus:ring-brand-blue dark:border-slate-600 dark:bg-slate-800"
										/>
									</div>
									<label
										htmlFor="privacy-policy"
										className="text-sm text-neutral-500 dark:text-slate-400"
									>
										You agree to our friendly{" "}
										<a
											href="#/"
											className="text-brand-blue hover:underline dark:text-blue-400"
										>
											privacy policy
										</a>
										.
									</label>
								</div>
								{errors.privacyPolicy && (
									<p className="text-xs text-red-500">{errors.privacyPolicy}</p>
								)}
							</div>

							{/* BUTTON */}
							<button
								type="submit"
								className="mb-0 h-11 w-full rounded-full bg-linear-to-r from-[#0b1f3a] to-[#0d4fd7] text-sm font-semibold text-white transition-all duration-300 hover:scale-[1.01] hover:shadow-[0_15px_40px_rgba(13,79,215,0.25)]"
							>
								Send Message
							</button>
						</form>
					</FadeIn>
				</div>
			</div>
		</section>
	);
}
