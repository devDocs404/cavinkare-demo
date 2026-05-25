import type { ReactElement, ReactNode } from "react";
import { FadeInStaggerItem } from "../../ui/motion/FadeInStagger";

interface StatCardProps {
  children: ReactNode;
  className?: string;
}

export function StatCard({
  children,
  className = "",
}: StatCardProps): ReactElement {
  return (
    <FadeInStaggerItem
      className={`group relative flex flex-col overflow-hidden rounded-2xl shadow-sm transition-all duration-500 ease-out hover:-translate-y-1.5 hover:shadow-xl hover:shadow-black/10 dark:hover:shadow-white/5 ${className}`}
    >
      {children}
    </FadeInStaggerItem>
  );
}
