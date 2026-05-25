import type { ReactElement } from "react";
import { PEOPLE } from "../../../data/careers";
import { PersonCard } from "./PersonCard";
import { FadeIn } from "../../ui/motion/FadeIn";
import {
	FadeInStaggerContainer,
	FadeInStaggerItem,
} from "../../ui/motion/FadeInStagger";

export function PeopleStories(): ReactElement {
	return (
		<div className="mx-auto max-w-7xl px-4 md:px-8 lg:px-12">
			<FadeIn className="mb-12 text-center">
				<h2 className="text-4xl font-bold tracking-tight text-brand-dark md:text-5xl dark:text-white">
					Our People, Their <span className="text-gradient-brand">Stories</span>
				</h2>
			</FadeIn>

			<FadeInStaggerContainer className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
				{PEOPLE.map((person) => (
					<FadeInStaggerItem key={person.id}>
						<PersonCard person={person} />
					</FadeInStaggerItem>
				))}
			</FadeInStaggerContainer>
		</div>
	);
}
