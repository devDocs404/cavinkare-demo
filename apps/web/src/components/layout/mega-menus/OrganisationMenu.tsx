import { ChevronRight, Play } from "lucide-react";
import type { ReactElement } from "react";
import { Link } from "react-router-dom";
import brandLogo from "../../../assets/brandLogo.svg";

function MenuLink({
  title,
  desc,
  href = "#/",
}: {
  title: string;
  desc?: string;
  href?: string;
}): ReactElement {
  return (
    <Link
      to={href}
      className="group flex items-center justify-between rounded-xl p-3 transition-colors hover:bg-gray-50 dark:hover:bg-slate-800/50"
    >
      <div className="flex flex-col gap-1">
        <span className="text-sm font-semibold text-gray-900 dark:text-gray-100 group-hover:text-brand-blue-dark dark:group-hover:text-blue-400">
          {title}
        </span>
        {desc && (
          <span className="text-xs text-gray-500 dark:text-gray-400">
            {desc}
          </span>
        )}
      </div>
      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-gray-200 bg-white transition-colors group-hover:border-brand-blue-dark group-hover:bg-brand-blue-dark/5 dark:border-slate-700 dark:bg-slate-900 dark:group-hover:border-blue-500">
        <ChevronRight className="h-4 w-4 text-gray-400 group-hover:text-brand-blue-dark dark:group-hover:text-blue-400" />
      </div>
    </Link>
  );
}

export function OrganisationMenu(): ReactElement {
  return (
    <div className="grid w-full grid-cols-4 gap-6 p-8">
      {/* Column 1: About CavinKare */}
      <div className="flex flex-col gap-6 border-r border-gray-100 pr-6 dark:border-slate-800">
        <div>
          <h3 className="mb-1 text-lg font-bold text-gray-900 dark:text-white">
            About CavinKare
          </h3>
          <p className="mb-4 text-xs text-gray-500 dark:text-gray-400">
            Learn what drives CavinKare's purpose and growth journey.
          </p>
          <div className="flex flex-col gap-2">
            <MenuLink
              title="Vision Mission & Values"
              desc="Learn what drives CavinKare's purpose and growth journey."
            />
            <MenuLink
              title="Leadership"
              desc="Learn what drives CavinKare's purpose and growth journey."
            />
          </div>
        </div>
        {/* Video Placeholder */}
        <div className="relative mt-auto aspect-video w-full overflow-hidden rounded-xl bg-linear-to-br from-slate-200 to-slate-400 dark:from-slate-700 dark:to-slate-800">
          <div className="absolute inset-0 flex items-center justify-center bg-black/20">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/30 backdrop-blur-sm">
              <Play className="ml-1 h-6 w-6 text-white" />
            </div>
          </div>
        </div>
      </div>

      {/* Column 2: Operations */}
      <div className="flex flex-col gap-6 border-r border-gray-100 pr-6 dark:border-slate-800">
        <div>
          <h3 className="mb-1 text-lg font-bold text-gray-900 dark:text-white">
            Operations
          </h3>
          <p className="mb-4 text-xs text-gray-500 dark:text-gray-400">
            Learn what drives CavinKare's purpose and growth journey.
          </p>
        </div>
        <div className="mt-auto flex flex-col gap-2">
          <MenuLink
            title="Manufacturing Facilities"
            desc="Learn what drives CavinKare's purpose and growth journey."
          />
          <MenuLink
            title="International Business"
            desc="Learn what drives CavinKare's purpose and growth journey."
          />
        </div>
      </div>

      {/* Column 3: Media & Recognition */}
      <div className="flex flex-col gap-6 border-r border-gray-100 pr-6 dark:border-slate-800">
        <div>
          <h3 className="mb-1 text-lg font-bold text-gray-900 dark:text-white">
            Media & Recognition
          </h3>
          <p className="mb-4 text-xs text-gray-500 dark:text-gray-400">
            Learn what drives CavinKare's purpose and growth journey.
          </p>
          <div className="flex flex-col gap-2">
            <MenuLink
              title="Media"
              desc="Learn what drives CavinKare's purpose and growth journey."
              href="/organisation/media"
            />
            <MenuLink
              title="Awards & Recognitions"
              desc="Learn what drives CavinKare's purpose and growth journey."
            />
          </div>
        </div>
        {/* Image Placeholder */}
        <div className="mt-auto flex items-center justify-center p-4">
          <img
            src={brandLogo}
            alt="CavinKare Logo"
            className="h-24 w-auto object-contain opacity-50 grayscale dark:invert"
          />
        </div>
      </div>

      {/* Column 4: Innovation */}
      <div className="flex flex-col gap-6">
        <div>
          <h3 className="mb-1 text-lg font-bold text-gray-900 dark:text-white">
            Innovation
          </h3>
          <p className="mb-4 text-xs text-gray-500 dark:text-gray-400">
            Learn what drives CavinKare's purpose and growth journey.
          </p>
        </div>
        <div className="mt-auto flex flex-col gap-2">
          <MenuLink
            title="Research & Development"
            desc="Learn what drives CavinKare's purpose and growth journey."
          />
          <MenuLink
            title="Blogs"
            desc="Learn what drives CavinKare's purpose and growth journey."
          />
        </div>
      </div>
    </div>
  );
}
