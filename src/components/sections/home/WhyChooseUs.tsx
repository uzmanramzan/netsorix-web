import { Award, Cpu, Handshake, MessageCircle, ShieldCheck, Target } from "lucide-react";
import { companyStats } from "@/data/people";
import { Container, Section } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { cn } from "@/lib/utils";

const reasons = [
  { icon: Award, title: "Experienced professionals", description: "Senior designers, engineers, and marketers who have shipped real products and campaigns." },
  { icon: Target, title: "Customized digital strategies", description: "No templates. Every plan is built around your market, audience, and objectives." },
  { icon: Cpu, title: "Modern technologies", description: "Next.js, React, headless platforms, and analytics tooling chosen for speed and scale." },
  { icon: MessageCircle, title: "Transparent communication", description: "Clear timelines, shared project boards, and regular check-ins — no surprises." },
  { icon: ShieldCheck, title: "Quality-focused development", description: "Code reviews, accessibility checks, and performance testing before anything ships." },
  { icon: Handshake, title: "Long-term partnerships", description: "We stay after launch to optimise, iterate, and grow alongside your business." },
];

export function WhyChooseUs() {
  return (
    <Section className="overflow-hidden">
      <div aria-hidden="true" className="absolute left-1/2 top-1/3 -z-10 h-[600px] w-[1000px] -translate-x-1/2 rounded-full bg-indigo-600/10 blur-[140px]" />
      <Container>
        <div className="grid gap-16 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <div className="lg:sticky lg:top-32 lg:self-start">
            <SectionHeading
              align="left"
              eyebrow="Why choose us"
              title={
                <>
                  Your Growth Is <span className="text-gradient">Our Priority</span>
                </>
              }
              description="We combine strategic thinking with hands-on execution, so you get a partner that understands both the big picture and the details that make it work."
            />

            <Reveal delay={0.1} className="mt-10">
              <div className="card-gradient-border rounded-3xl bg-ink-900/60 p-6">
                <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl bg-line">
                  {companyStats.map((s) => (
                    <div key={s.label} className="bg-ink-900 p-5">
                      <dt className="text-xs text-fg-subtle">{s.label}</dt>
                      <dd className="mt-2 font-display text-3xl font-semibold text-gradient">{s.value}</dd>
                    </div>
                  ))}
                </dl>
                <p className="mt-4 text-xs text-fg-subtle">
                  Editable placeholders — update in <code className="rounded bg-white/5 px-1.5 py-0.5 text-fg-muted">src/data/people.ts</code> with verified figures.
                </p>
              </div>
            </Reveal>
          </div>

          <RevealGroup className="grid gap-5 sm:grid-cols-2">
            {reasons.map(({ icon: Icon, title, description }, i) => (
              <RevealItem key={title} className={cn(i % 2 === 1 && "sm:translate-y-10")}>
                <article className="card-gradient-border group h-full rounded-3xl bg-ink-900/60 p-7 transition-all duration-500 hover:-translate-y-1 hover:bg-ink-800/70">
                  <span className="grid size-12 place-items-center rounded-2xl border border-line bg-gradient-to-br from-brand-blue/20 to-brand-violet/20 text-brand-sky transition-colors duration-500 group-hover:text-white">
                    <Icon className="size-5" aria-hidden="true" />
                  </span>
                  <h3 className="mt-6 text-xl font-semibold text-fg">{title}</h3>
                  <p className="mt-2.5 leading-relaxed text-fg-muted">{description}</p>
                </article>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </Container>
    </Section>
  );
}
