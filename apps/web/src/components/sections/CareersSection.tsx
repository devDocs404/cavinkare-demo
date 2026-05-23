import type { ReactElement } from "react"
import { JobCarousel } from "./careers/JobCarousel"
import { PeopleStories } from "./careers/PeopleStories"

export function CareersSection(): ReactElement {
  return (
    <section
      id="careers-section"
      className="relative z-10 -mt-8 overflow-hidden rounded-t-[48px] bg-surface-section-alt py-24 pt-32 lg:rounded-t-[80px] dark:bg-slate-900"
    >
      {/* TOP SECTION: Title + Job Carousel */}
      <div className="mb-32 flex flex-col pl-4 md:pl-8 lg:flex-row lg:items-center lg:pl-12 xl:pl-[calc(50vw-640px+2rem)]">
        {/* Left Text Block */}
        <div className="w-full shrink-0 pr-4 md:pr-8 lg:w-[480px] lg:pr-12 xl:w-[500px]">
          <div className="max-w-5xl">
            <h2 className="text-3xl leading-[0.95] font-bold tracking-[-0.05em] text-brand-dark sm:text-5xl md:text-5xl lg:text-6xl xl:text-6xl dark:text-white">
              Grow With a<br /> Company{" "}
              <span className="text-gradient-brand">That</span>
              <br />
              <span>Grows With </span>
              <span className="text-gradient-brand">You</span>
            </h2>
          </div>

          <p className="mb-8 text-base leading-relaxed text-gray-600 md:text-lg dark:text-gray-400">
            Discover a culture where innovation is encouraged, ideas are heard,
            and careers are built for impact. From R&D labs to creative
            marketing floors — your journey starts here.
          </p>
          <button
            type="button"
            className="rounded-full bg-brand-blue px-8 py-3.5 text-sm font-semibold text-white transition-transform hover:scale-105 active:scale-95 dark:bg-[#3b7bed]"
          >
            Explore Careers
          </button>
        </div>

        {/* Right Carousel Block */}
        <JobCarousel />
      </div>

      {/* BOTTOM SECTION: People Stories */}
      <PeopleStories />
    </section>
  )
}
