import { Headphones, Mail, MapPin, Phone } from "lucide-react";
import type { ReactElement, ReactNode } from "react";
import type { ContactCardIcon } from "../../data/contact";
import { CONTACT_CARDS } from "../../data/contact";

const ICON_MAP: Record<ContactCardIcon, ReactNode> = {
	mail: <Mail size={18} />,
	headphones: <Headphones size={18} />,
	"map-pin": <MapPin size={18} />,
	phone: <Phone size={18} />,
};

export function Contact(): ReactElement {
	return (
		<section
			id="contact"
			aria-labelledby="contact-heading"
			className="relative overflow-hidden bg-white py-24 dark:bg-slate-950"
		>
			<div className="mx-auto grid max-w-6xl gap-14 px-6 lg:grid-cols-1 lg:items-start">
				{/* HEADING */}
				<div>
					<h2 id="contact-heading" className="text-5xl font-bold tracking-[-0.04em] text-brand-dark dark:text-white">
						Chat to our friendly team
					</h2>

					<p className="mt-4 text-base leading-relaxed text-[#535862] dark:text-slate-400">
						We&apos;d love to hear from you. Please fill out this form or shoot
						us an email.
					</p>
				</div>
				<div className="flex flex-col justify-between xl:flex-row gap-2">
					{/* LEFT SIDE */}
					<div className="w-full md:w-1/2">
						{/* CONTACT CARDS */}
						<div className="grid gap-5 sm:grid-cols-2">
							{CONTACT_CARDS.map((item) => (
								<div
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
								</div>
							))}
						</div>
					</div>

					{/* RIGHT SIDE */}
					<div className="rounded-xl border border-neutral-100 bg-[#f6f8fb] p-7 shadow-[0_20px_60px_rgba(0,0,0,0.04)] dark:border-slate-800 dark:bg-slate-900/50">
						<form aria-label="Contact form" className="space-y-5">
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
										placeholder="First Name"
										className="h-12 w-full rounded-xl border border-neutral-200 bg-[#fafafa] px-4 text-sm transition-all outline-none placeholder:text-neutral-400 focus:border-brand-blue focus:bg-white dark:border-slate-700 dark:bg-slate-800 dark:text-white dark:focus:border-brand-blue dark:focus:bg-slate-900"
									/>
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
										placeholder="Last Name"
										className="h-12 w-full rounded-xl border border-neutral-200 bg-[#fafafa] px-4 text-sm transition-all outline-none placeholder:text-neutral-400 focus:border-brand-blue focus:bg-white dark:border-slate-700 dark:bg-slate-800 dark:text-white dark:focus:border-brand-blue dark:focus:bg-slate-900"
									/>
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
									placeholder="Email"
									className="h-12 w-full rounded-xl border border-neutral-200 bg-[#fafafa] px-4 text-sm transition-all outline-none placeholder:text-neutral-400 focus:border-brand-blue focus:bg-white dark:border-slate-700 dark:bg-slate-800 dark:text-white dark:focus:border-brand-blue dark:focus:bg-slate-900"
								/>
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
									placeholder="Leave us a Message"
									className="w-full resize-none rounded-xl border border-neutral-200 bg-[#fafafa] p-4 text-sm transition-all outline-none placeholder:text-neutral-400 focus:border-brand-blue focus:bg-white dark:border-slate-700 dark:bg-slate-800 dark:text-white dark:focus:border-brand-blue dark:focus:bg-slate-900"
								/>
							</div>

							{/* CHECKBOX */}
							<div className="flex items-start gap-3">
								<div className="flex h-5 items-center">
									<input
										id="privacy-policy"
										name="privacyPolicy"
										type="checkbox"
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

							{/* BUTTON */}
							<button
								type="submit"
								className="mb-0 h-11 w-full rounded-full bg-linear-to-r from-[#0b1f3a] to-[#0d4fd7] text-sm font-semibold text-white transition-all duration-300 hover:scale-[1.01] hover:shadow-[0_15px_40px_rgba(13,79,215,0.25)]"
							>
								Send Message
							</button>
						</form>
					</div>
				</div>
			</div>
		</section>
	);
}
