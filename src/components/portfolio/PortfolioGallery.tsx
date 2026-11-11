"use client";

import { useRouter, useSearchParams, usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import type { Project, ProjectCategory } from "@/types";
import { ProjectCard } from "@/components/cards/ProjectCard";
import { cn } from "@/lib/utils";

type Filter = "All" | ProjectCategory;

interface Props {
  projects: Project[];
  categories: ProjectCategory[];
}

/** Filterable project grid. The active filter is mirrored to `?category=` so it is shareable. */
export function PortfolioGallery({ projects, categories }: Props) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const param = searchParams.get("category");
  const active: Filter = categories.includes(param as ProjectCategory) ? (param as ProjectCategory) : "All";

  const setFilter = (f: Filter) => {
    const qs = f === "All" ? "" : `?category=${encodeURIComponent(f)}`;
    router.replace(`${pathname}${qs}`, { scroll: false });
  };

  const filters: Filter[] = ["All", ...categories];
  const visible = active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <div>
      <div role="group" aria-label="Filter projects by category" className="flex flex-wrap gap-2.5">
        {filters.map((f) => {
          const count = f === "All" ? projects.length : projects.filter((p) => p.category === f).length;
          const isActive = f === active;
          return (
            <button
              key={f}
              type="button"
              aria-pressed={isActive}
              onClick={() => setFilter(f)}
              className={cn(
                "relative inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition-colors",
                isActive ? "text-white" : "glass text-fg-muted hover:text-fg",
              )}
            >
              {isActive && (
                <motion.span
                  layoutId="portfolio-filter"
                  className="absolute inset-0 -z-0 rounded-full bg-gradient-to-r from-brand-blue to-brand-violet"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.5 }}
                />
              )}
              <span className="relative">{f}</span>
              <span className={cn("relative rounded-full px-1.5 text-xs", isActive ? "bg-white/20" : "bg-white/5")}>{count}</span>
            </button>
          );
        })}
      </div>

      <p className="sr-only" aria-live="polite">
        Showing {visible.length} {visible.length === 1 ? "project" : "projects"}
        {active !== "All" ? ` in ${active}` : ""}
      </p>

      <motion.ul layout className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {visible.map((p, i) => (
            <motion.li
              key={p.slug}
              layout
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.35 }}
            >
              <ProjectCard project={p} priority={i < 3} />
            </motion.li>
          ))}
        </AnimatePresence>
      </motion.ul>
    </div>
  );
}

/** Static fallback rendered while search params resolve. */
export function PortfolioGalleryFallback({ projects }: { projects: Project[] }) {
  return (
    <ul className="mt-[4.25rem] grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {projects.map((p) => (
        <li key={p.slug}>
          <ProjectCard project={p} />
        </li>
      ))}
    </ul>
  );
}
