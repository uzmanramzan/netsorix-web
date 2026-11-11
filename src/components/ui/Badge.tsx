import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Eyebrow({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <span
      className={cn(
        "glass inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-xs font-medium uppercase tracking-[0.18em] text-fg-muted",
        className,
      )}
    >
      <span className="size-1.5 rounded-full bg-gradient-to-r from-brand-cyan to-brand-violet shadow-[0_0_10px_2px_rgb(34_211_238/0.6)]" />
      {children}
    </span>
  );
}

export function Tag({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border border-line bg-white/[0.03] px-3 py-1 text-xs font-medium text-fg-muted",
        className,
      )}
    >
      {children}
    </span>
  );
}

/** Small label to make sample/placeholder content obvious to editors and visitors. */
export function SampleBadge({ children = "Sample content", className }: { children?: ReactNode; className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border border-amber-400/30 bg-amber-400/10 px-2.5 py-0.5 text-[0.7rem] font-medium uppercase tracking-wider text-amber-300",
        className,
      )}
    >
      {children}
    </span>
  );
}
