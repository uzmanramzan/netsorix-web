import type { ProcessStep } from "@/types";
import { RevealGroup, RevealItem } from "@/components/ui/Reveal";

/** Four connected step cards. Horizontal connector on desktop, vertical on mobile. */
export function ProcessTimeline({ steps }: { steps: ProcessStep[] }) {
  return (
    <RevealGroup className="relative grid gap-6 md:grid-cols-2 lg:grid-cols-4" stagger={0.12}>
      <div
        aria-hidden="true"
        className="absolute left-0 right-0 top-[2.75rem] hidden h-px bg-gradient-to-r from-brand-blue/0 via-brand-cyan/50 to-brand-violet/0 lg:block"
      />
      {steps.map((step, i) => (
        <RevealItem key={step.title} className="relative">
          <article className="card-gradient-border group relative h-full rounded-3xl bg-ink-900/60 p-7 transition-all duration-500 hover:-translate-y-1 hover:bg-ink-800/70">
            <div className="relative flex items-center gap-4">
              <span className="relative grid size-11 place-items-center rounded-full border border-line-strong bg-ink-950 font-display text-sm font-semibold text-fg">
                <span aria-hidden="true" className="absolute inset-0 rounded-full bg-gradient-to-br from-brand-blue to-brand-violet opacity-0 blur-md transition-opacity duration-500 group-hover:opacity-60" />
                <span className="relative">{String(i + 1).padStart(2, "0")}</span>
              </span>
              <span className="text-xs font-medium uppercase tracking-[0.18em] text-fg-subtle">Step {i + 1}</span>
            </div>
            <h3 className="mt-6 text-2xl font-semibold text-fg">{step.title}</h3>
            <p className="mt-3 leading-relaxed text-fg-muted">{step.description}</p>
          </article>
        </RevealItem>
      ))}
    </RevealGroup>
  );
}
