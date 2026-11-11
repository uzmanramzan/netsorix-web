import Link from "next/link";
import { ArrowUpRight, Check } from "lucide-react";
import type { Service } from "@/types";
import { cn } from "@/lib/utils";

export function ServiceCard({ service, index }: { service: Service; index?: number }) {
  const Icon = service.icon;
  return (
    <article className="card-gradient-border group relative flex h-full flex-col overflow-hidden rounded-3xl bg-ink-900/60 p-7 shadow-card transition-all duration-500 hover:-translate-y-1.5 hover:bg-ink-800/70 sm:p-8">
      {/* hover glow */}
      <div
        aria-hidden="true"
        className={cn(
          "pointer-events-none absolute -right-20 -top-20 size-56 rounded-full bg-gradient-to-br opacity-0 blur-3xl transition-opacity duration-700 group-hover:opacity-25",
          service.accent,
        )}
      />
      <div className="flex items-start justify-between">
        <span className={cn("grid size-13 place-items-center rounded-2xl bg-gradient-to-br text-white shadow-lg", service.accent)}>
          <Icon className="size-6" aria-hidden="true" />
        </span>
        {typeof index === "number" && (
          <span className="font-display text-sm text-fg-subtle">{String(index + 1).padStart(2, "0")}</span>
        )}
      </div>

      <h3 className="mt-7 text-2xl font-semibold text-fg">{service.title}</h3>
      <p className="mt-3 leading-relaxed text-fg-muted">{service.description}</p>

      <ul className="mt-6 space-y-2.5">
        {service.capabilities.map((c) => (
          <li key={c} className="flex items-center gap-2.5 text-sm text-fg-muted">
            <Check className="size-4 shrink-0 text-brand-cyan" aria-hidden="true" />
            {c}
          </li>
        ))}
      </ul>

      <div className="mt-auto pt-8">
        <Link
          href={`/services/${service.slug}`}
          className="inline-flex items-center gap-2 text-sm font-medium text-fg after:absolute after:inset-0 after:content-['']"
        >
          Explore Service
          <span className="sr-only">: {service.title}</span>
          <span className="grid size-8 place-items-center rounded-full border border-line transition-all duration-300 group-hover:border-transparent group-hover:bg-white group-hover:text-ink-950">
            <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:rotate-45" aria-hidden="true" />
          </span>
        </Link>
      </div>
    </article>
  );
}
