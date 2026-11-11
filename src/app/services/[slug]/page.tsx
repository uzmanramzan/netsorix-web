import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { AlertTriangle, ArrowUpRight, CheckCircle2, Sparkles } from "lucide-react";
import { getServiceBySlug, services } from "@/data/services";
import { buildMetadata } from "@/lib/seo";
import { absoluteUrl, cn } from "@/lib/utils";
import { siteConfig } from "@/data/site";
import { PageHero } from "@/components/sections/shared/PageHero";
import { CTASection } from "@/components/sections/shared/CTASection";
import { ProcessTimeline } from "@/components/sections/shared/ProcessTimeline";
import { Container, Section } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { ButtonLink } from "@/components/ui/Button";
import { Accordion } from "@/components/ui/Accordion";
import { JsonLd } from "@/components/ui/JsonLd";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: PageProps<"/services/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return { title: "Service not found" };
  return buildMetadata({
    title: service.title,
    description: service.description,
    path: `/services/${service.slug}`,
  });
}

export default async function ServiceDetailPage({ params }: PageProps<"/services/[slug]">) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  const Icon = service.icon;
  const others = services.filter((s) => s.slug !== service.slug).slice(0, 3);

  return (
    <>
      <JsonLd
        data={[
          {
            "@context": "https://schema.org",
            "@type": "Service",
            name: service.title,
            description: service.overview,
            serviceType: service.title,
            url: absoluteUrl(`/services/${service.slug}`),
            provider: { "@type": "Organization", name: siteConfig.name, url: siteConfig.url },
            hasOfferCatalog: {
              "@type": "OfferCatalog",
              name: service.title,
              itemListElement: service.offerings.map((o) => ({
                "@type": "Offer",
                itemOffered: { "@type": "Service", name: o.title, description: o.description },
              })),
            },
          },
          {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: service.faqs.map((f) => ({
              "@type": "Question",
              name: f.question,
              acceptedAnswer: { "@type": "Answer", text: f.answer },
            })),
          },
        ]}
      />

      <PageHero
        eyebrow={service.shortTitle}
        title={service.title}
        description={service.tagline + " " + service.description}
        breadcrumbs={[
          { label: "Services", href: "/services" },
          { label: service.shortTitle, href: `/services/${service.slug}` },
        ]}
      >
        <div className="mt-10 flex flex-wrap gap-4">
          <ButtonLink href={`/contact?service=${service.slug}`} size="lg" arrow>
            Discuss Your Project
          </ButtonLink>
          <ButtonLink href="#offerings" size="lg" variant="secondary">
            What&apos;s Included
          </ButtonLink>
        </div>
      </PageHero>

      {/* Overview */}
      <Section className="pt-4 sm:pt-8">
        <Container>
          <div className="card-gradient-border grid items-center gap-10 rounded-[2.5rem] bg-ink-900/60 p-8 sm:p-14 lg:grid-cols-[1.2fr_0.8fr]">
            <Reveal>
              <h2 className="text-sm font-medium uppercase tracking-[0.2em] text-fg-subtle">Service overview</h2>
              <p className="mt-5 text-2xl font-medium leading-snug text-fg sm:text-3xl">{service.overview}</p>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="relative isolate overflow-hidden rounded-3xl border border-line bg-ink-950/60 p-7">
                <div aria-hidden="true" className={cn("absolute -right-12 -top-12 -z-10 size-48 rounded-full bg-gradient-to-br opacity-30 blur-3xl", service.accent)} />
                <span className={cn("grid size-14 place-items-center rounded-2xl bg-gradient-to-br text-white", service.accent)}>
                  <Icon className="size-7" aria-hidden="true" />
                </span>
                <h3 className="mt-6 text-sm font-medium text-fg-subtle">Core capabilities</h3>
                <ul className="mt-4 space-y-3">
                  {service.capabilities.map((c) => (
                    <li key={c} className="flex items-center gap-3 text-fg">
                      <CheckCircle2 className="size-4.5 shrink-0 text-brand-cyan" aria-hidden="true" />
                      {c}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* Problems */}
      <Section className="pt-0 sm:pt-0">
        <Container>
          <SectionHeading align="left" eyebrow="Problems we solve" title="Challenges we help you overcome" />
          <RevealGroup className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {service.problems.map((p) => (
              <RevealItem key={p.title}>
                <article className="h-full rounded-3xl border border-line bg-ink-900/40 p-7">
                  <AlertTriangle className="size-6 text-warning/80" aria-hidden="true" />
                  <h3 className="mt-5 text-lg font-semibold text-fg">{p.title}</h3>
                  <p className="mt-2 leading-relaxed text-fg-muted">{p.description}</p>
                </article>
              </RevealItem>
            ))}
          </RevealGroup>
        </Container>
      </Section>

      {/* Offerings */}
      <Section id="offerings" className="scroll-mt-20 border-y border-line bg-ink-900/30">
        <Container>
          <SectionHeading eyebrow="What we offer" title={<>Everything included in <span className="text-gradient">{service.shortTitle}</span></>} />
          <RevealGroup className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {service.offerings.map((o, i) => (
              <RevealItem key={o.title}>
                <article className="card-gradient-border group h-full rounded-3xl bg-ink-900/60 p-7 transition-all duration-500 hover:-translate-y-1 hover:bg-ink-800/70">
                  <span className="font-display text-sm text-fg-subtle">{String(i + 1).padStart(2, "0")}</span>
                  <h3 className="mt-4 text-xl font-semibold text-fg">{o.title}</h3>
                  <p className="mt-2.5 leading-relaxed text-fg-muted">{o.description}</p>
                </article>
              </RevealItem>
            ))}
          </RevealGroup>
        </Container>
      </Section>

      {/* Process */}
      <Section>
        <Container>
          <SectionHeading eyebrow="Our working process" title="How we deliver" description={`A proven, four-stage approach tailored to ${service.shortTitle.toLowerCase()} projects.`} />
          <div className="mt-16">
            <ProcessTimeline steps={service.process} />
          </div>
        </Container>
      </Section>

      {/* Benefits */}
      <Section className="pt-0 sm:pt-0">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
            <SectionHeading align="left" eyebrow="Benefits" title={<>Why it <span className="text-gradient">pays off</span></>} description="What your business gains when you work with us." className="lg:sticky lg:top-32 lg:self-start" />
            <RevealGroup className="grid gap-5 sm:grid-cols-2">
              {service.benefits.map((b) => (
                <RevealItem key={b.title}>
                  <article className="h-full rounded-3xl border border-line bg-gradient-to-b from-white/[0.04] to-transparent p-7">
                    <Sparkles className="size-6 text-brand-violet" aria-hidden="true" />
                    <h3 className="mt-5 text-lg font-semibold text-fg">{b.title}</h3>
                    <p className="mt-2 leading-relaxed text-fg-muted">{b.description}</p>
                  </article>
                </RevealItem>
              ))}
            </RevealGroup>
          </div>
        </Container>
      </Section>

      {/* FAQs */}
      <Section className="border-t border-line">
        <Container className="max-w-4xl">
          <SectionHeading eyebrow="FAQs" title="Frequently asked questions" />
          <Reveal className="mt-12">
            <Accordion items={service.faqs} />
          </Reveal>
        </Container>
      </Section>

      {/* Other services */}
      <Section className="pt-0 sm:pt-0">
        <Container>
          <h2 className="text-2xl font-semibold text-fg">Explore other services</h2>
          <ul className="mt-8 grid gap-4 md:grid-cols-3">
            {others.map((s) => (
              <li key={s.slug}>
                <Link href={`/services/${s.slug}`} className="group flex items-center justify-between gap-4 rounded-2xl border border-line bg-ink-900/40 p-5 transition-colors hover:border-line-strong hover:bg-ink-800/60">
                  <span className="flex items-center gap-3.5">
                    <span className={cn("grid size-10 place-items-center rounded-xl bg-gradient-to-br text-white", s.accent)}>
                      <s.icon className="size-5" aria-hidden="true" />
                    </span>
                    <span className="font-medium text-fg">{s.shortTitle}</span>
                  </span>
                  <ArrowUpRight className="size-5 text-fg-subtle transition-transform group-hover:rotate-45 group-hover:text-fg" aria-hidden="true" />
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      <CTASection
        title={`Let's talk about your ${service.shortTitle.toLowerCase()} goals`}
        description="Share a few details about your project and we'll get back to you with next steps and a tailored proposal."
        cta="Start Your Project"
        href={`/contact?service=${service.slug}`}
      />
    </>
  );
}
