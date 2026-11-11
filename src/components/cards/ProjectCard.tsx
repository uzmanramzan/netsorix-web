import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/types";
import { cn } from "@/lib/utils";

export function ProjectCard({ project, priority, className }: { project: Project; priority?: boolean; className?: string }) {
  return (
    <article className={cn("card-gradient-border group relative flex h-full flex-col overflow-hidden rounded-3xl bg-ink-900/60 shadow-card", className)}>
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={project.cover}
          alt={project.coverAlt}
          fill
          priority={priority}
          sizes="(min-width: 1024px) 50vw, 100vw"
          className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.05]"
        />
        <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-ink-950/70 via-transparent to-transparent" />
        <span className="glass absolute left-5 top-5 rounded-full px-3 py-1 text-xs font-medium text-fg">{project.category}</span>
      </div>
      <div className="flex flex-1 flex-col p-6 sm:p-7">
        <h3 className="text-xl font-semibold text-fg">{project.name}</h3>
        <p className="mt-2.5 leading-relaxed text-fg-muted">{project.summary}</p>
        <div className="mt-auto pt-6">
          <Link
            href={`/portfolio/${project.slug}`}
            className="inline-flex items-center gap-2 text-sm font-medium text-fg after:absolute after:inset-0 after:content-['']"
          >
            View Project
            <span className="sr-only">: {project.name}</span>
            <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </article>
  );
}
