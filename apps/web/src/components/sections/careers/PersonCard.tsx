import type { ReactElement } from "react"
import type { PersonStory } from "../../../data/careers"

interface PersonCardProps {
  person: PersonStory
}

export function PersonCard({ person }: PersonCardProps): ReactElement {
  return (
    <div className="group relative h-[420px] w-full cursor-pointer lg:h-[460px]">
      {/* Background Image (Revealed on hover) */}
      <div className="absolute inset-0 z-0 overflow-hidden rounded-[40px] bg-gray-200 dark:bg-slate-800">
        <img
          src={person.image}
          alt={`Portrait of ${person.name}, ${person.role}`}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/40 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      </div>

      {/* Foreground White Card (Tilts and slides down on hover) */}
      <div className="absolute inset-0 z-10 flex flex-col justify-between rounded-[40px] bg-white p-8 transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:-translate-x-3 group-hover:translate-y-[45%] group-hover:scale-95 group-hover:-rotate-3 group-hover:shadow-[0_20px_40px_rgb(0,0,0,0.12)] md:group-hover:-translate-x-5 md:group-hover:translate-y-[50%] md:group-hover:-rotate-6 dark:bg-slate-900">
        {/* Quote Icon Top Right */}
        <div className="absolute top-6 right-6 text-6xl text-gray-100 opacity-50 dark:text-slate-800">
          &quot;
        </div>

        <div className="relative z-10">
          <h3 className="mb-1 text-2xl font-bold text-brand-dark dark:text-white">
            {person.name}
          </h3>
          <p className="mb-6 text-sm font-medium text-gray-500 dark:text-gray-400">
            {person.role}
          </p>
          <p className="text-[14px] leading-relaxed text-gray-600 dark:text-gray-300">
            {person.quote}
          </p>
        </div>

        <div className="relative z-10 mt-6 h-1 w-12 rounded-full bg-gray-200 transition-colors group-hover:bg-brand-blue dark:bg-slate-700 dark:group-hover:bg-[#3b7bed]" />
      </div>
    </div>
  )
}
