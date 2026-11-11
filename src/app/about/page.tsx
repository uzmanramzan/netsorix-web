import { Compass, Eye, Gem, HeartHandshake, Lightbulb, Rocket, ShieldCheck, Users } from "lucide-react";
import { buildMetadata } from "@/lib/seo";
import { team } from "@/data/people";
import { PageHero } from "@/components/sections/shared/PageHero";
import { CTASection } from "@/components/sections/shared/CTASection";
import { Container, Section } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { SampleBadge } from "@/components/ui/Badge";
import { ButtonLink } from "@/components/ui/Button";

export const metadata = buildMetadata({
  title: "About Us",
  description:
    "Meet Netsorix — a team of strategists, designers, engineers, and marketers helping businesses build and grow their digital presence.",
  path: "/about",
});

const values = [
  { icon: Lightbulb, title: "Curiosity", description: "We ask why before how, and dig into your business until the right solution is obvious." },
  { icon: Gem, title: "Craft", description: "Details matter. We sweat typography, performance, and copy because users notice." },
  { icon: ShieldCheck, title: "Integrity", description: "Honest advice, realistic timelines, and no promises we can't keep." },
  { icon: HeartHandshake, title: "Partnership", description: "We work as an extension of your team and celebrate your wins as our own." },
];

const reasons = [
  { icon: Users, title: "One cross-functional team", description: "Strategy, design, development, and marketing working together — no hand-off gaps between agencies." },
  { icon: Compass, title: "Strategy before execution", description: "Every deliverable ties back to a business goal you can measure." },
  { icon: Rocket, title: "Built for what's next", description: "Scalable foundations that support new features, markets, and campaigns." },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About us"
        title={
          <>
            We help ambitious brands <span className="text-gradient">grow digitally.</span>
          </>
        }
        description="Netsorix is a digital agency bringing together strategy, design, technology, and marketing — so businesses of every size can compete and win online."
        breadcrumbs={[{ label: "About", href: "/about" }]}
      />

      {/* Introduction */}
      <Section className="pt-8 sm:pt-12">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
            <Reveal>
              <h2 className="text-3xl font-semibold leading-tight text-fg sm:text-4xl">
                A digital partner built for the way modern businesses grow.
              </h2>
            </Reveal>
            <Reveal delay={0.1} className="space-y-5 text-lg leading-relaxed text-fg-muted">
              <p>
                We started Netsorix with a simple belief: great digital work comes from understanding the business behind it.
                Too many companies juggle separate vendors for websites, marketing, and design — and end up with disconnected
                results.
              </p>
              <p>
                We bring those disciplines together under one roof. Whether you&apos;re a startup launching your first product or an
                established brand modernising your platform, we plan, build, and grow with you — with clear communication at
                every step.
              </p>
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* Mission & Vision */}
      <Section className="pt-0 sm:pt-0">
        <Container>
          <RevealGroup className="grid gap-6 md:grid-cols-2">
            {[
              { icon: Rocket, label: "Our mission", text: "To help businesses turn ideas into digital products and campaigns that create measurable value — through thoughtful strategy, exceptional design, and reliable engineering." },
              { icon: Eye, label: "Our vision", text: "A world where every business, regardless of size, has access to the kind of digital expertise that used to be reserved for the largest brands." },
            ].map(({ icon: Icon, label, text }) => (
              <RevealItem key={label}>
                <article className="card-gradient-border relative h-full overflow-hidden rounded-[2rem] bg-ink-900/60 p-9 sm:p-12">
                  <div aria-hidden="true" className="absolute -right-16 -top-16 size-56 rounded-full bg-brand-blue/15 blur-3xl" />
                  <span className="grid size-13 place-items-center rounded-2xl bg-gradient-to-br from-brand-blue to-brand-violet text-white">
                    <Icon className="size-6" aria-hidden="true" />
                  </span>
                  <h3 className="mt-8 text-sm font-medium uppercase tracking-[0.2em] text-fg-subtle">{label}</h3>
                  <p className="mt-4 text-2xl font-medium leading-snug text-fg">{text}</p>
                </article>
              </RevealItem>
            ))}
          </RevealGroup>
        </Container>
      </Section>

      {/* Values */}
      <Section className="border-y border-line bg-ink-900/30">
        <Container>
          <SectionHeading eyebrow="Our values" title="What guides our work" description="The principles behind every project, conversation, and decision." />
          <RevealGroup className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map(({ icon: Icon, title, description }) => (
              <RevealItem key={title}>
                <article className="card-gradient-border group h-full rounded-3xl bg-ink-900/60 p-7 transition-all duration-500 hover:-translate-y-1">
                  <Icon className="size-7 text-brand-sky" aria-hidden="true" />
                  <h3 className="mt-6 text-xl font-semibold text-fg">{title}</h3>
                  <p className="mt-2.5 leading-relaxed text-fg-muted">{description}</p>
                </article>
              </RevealItem>
            ))}
          </RevealGroup>
        </Container>
      </Section>

      {/* Team */}
      <Section>
        <Container>
          <SectionHeading eyebrow="Our team" title="The people behind the work" description="A multidisciplinary team of specialists who care about your success." />
          <div className="mt-6 flex justify-center">
            <SampleBadge>Placeholder profiles — add real team members</SampleBadge>
          </div>
          <RevealGroup className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {team.map((m, i) => (
              <RevealItem key={`${m.role}-${i}`}>
                <article className="card-gradient-border group h-full overflow-hidden rounded-3xl bg-ink-900/60">
                  <div className="relative grid aspect-[4/4.2] place-items-center overflow-hidden bg-gradient-to-br from-ink-700 via-ink-800 to-ink-900">
                    <div aria-hidden="true" className="absolute inset-0 bg-grid opacity-60" />
                    <div aria-hidden="true" className="absolute bottom-[-30%] left-1/2 size-[70%] -translate-x-1/2 rounded-full bg-gradient-to-br from-brand-blue/40 to-brand-violet/40 blur-2xl transition-transform duration-700 group-hover:scale-110" />
                    <span className="relative grid size-24 place-items-center rounded-full border border-line-strong bg-ink-950/60 font-display text-2xl font-semibold text-fg-muted">
                      {m.initials}
                    </span>
                    <span className="sr-only">Photo placeholder for {m.role}</span>
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-semibold text-fg">{m.name}</h3>
                    <p className="mt-0.5 text-sm text-brand-sky">{m.role}</p>
                    <p className="mt-3 text-sm leading-relaxed text-fg-muted">{m.bio}</p>
                  </div>
                </article>
              </RevealItem>
            ))}
          </RevealGroup>
        </Container>
      </Section>

      {/* Why work with us */}
      <Section className="pt-0 sm:pt-0">
        <Container>
          <div className="card-gradient-border grid gap-12 rounded-[2.5rem] bg-ink-900/60 p-8 sm:p-14 lg:grid-cols-[0.9fr_1.1fr]">
            <Reveal>
              <h2 className="text-4xl font-semibold leading-tight text-fg sm:text-5xl">
                Why businesses <span className="text-gradient">work with us</span>
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-fg-muted">
                We focus on outcomes, not output. Here&apos;s what you can expect when you partner with Netsorix.
              </p>
              <ButtonLink href="/services" variant="secondary" arrow className="mt-8">
                Explore our services
              </ButtonLink>
            </Reveal>
            <RevealGroup className="space-y-4">
              {reasons.map(({ icon: Icon, title, description }) => (
                <RevealItem key={title}>
                  <div className="flex gap-5 rounded-2xl border border-line bg-ink-950/40 p-6">
                    <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-brand-blue/25 to-brand-violet/25 text-brand-sky">
                      <Icon className="size-5" aria-hidden="true" />
                    </span>
                    <div>
                      <h3 className="text-lg font-semibold text-fg">{title}</h3>
                      <p className="mt-1.5 leading-relaxed text-fg-muted">{description}</p>
                    </div>
                  </div>
                </RevealItem>
              ))}
            </RevealGroup>
          </div>
        </Container>
      </Section>

      <CTASection />
    </>
  );
}
