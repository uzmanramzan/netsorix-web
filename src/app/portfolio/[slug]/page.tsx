import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, CircleDot, Lightbulb, Wrench } from "lucide-react";
import { getProjectBySlug, projects } from "@/data/portfolio";
import { buildMetadata } from "@/lib/seo";
import { absoluteUrl } from "@/lib/utils";
import { siteConfig } from "@/data/site";
import { PageHero } from "@/components/sections/shared/PageHero";
import { CTASection } from "@/components/sections/shared/CTASection";
import { Container, Section } from "@/components/ui/Container";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { SampleBadge, Tag } from "@/components/ui/Badge";
import { JsonLd } from "@/components/ui/JsonLd";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps<"/portfolio/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return { title: "Project not found" };
  return buildMetadata({
    title: project.name,
    description: project.summary,
    path: `/portfolio/${project.slug}`,
  });
}

export default async function ProjectDetailPage({ params }: PageProps<"/portfolio/[slug]">) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const index = projects.findIndex((p) => p.slug === project.slug);
  const prev = projects[(index - 1 + projects.length) % projects.length];
  const next = projects[(index + 1) % projects.length];

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "CreativeWork",
          name: project.name,
          description: project.summary,
          genre: project.category,
          url: absoluteUrl(`/portfolio/${project.slug}`),
          image: absoluteUrl(project.cover),
          creator: { "@type": "Organization", name: siteConfig.name, url: siteConfig.url },
        }}
      />

      <PageHero
        eyebrow={project.category}
        title={project.name}
        description={project.summary}
        breadcrumbs={[
          { label: "Portfolio", href: "/portfolio" },
          { label: project.name, href: `/portfolio/${project.slug}` },
        ]}
      >
        <div className="mt-8">
          <SampleBadge>Sample case study</SampleBadge>
        </div>
      </PageHero>

      {/* Cover + meta */}
      <Section className="pt-0 sm:pt-0">
        <Container>
          <Reveal>
            <div className="card-gradient-border relative aspect-[16/9] overflow-hidden rounded-[2rem] bg-ink-900">
              <Image src={project.cover} alt={project.coverAlt} fill priority sizes="(min-width: 1280px) 1216px, 100vw" className="object-cover" />
            </div>
          </Reveal>

          <dl className="mt-10 grid gap-px overflow-hidden rounded-3xl border border-line bg-line sm:grid-cols-3">
            {[
              { label: "Industry", value: project.industry },
              { label: "Category", value: project.category },
              { label: "Services", value: project.services.join(", ") },
            ].map((m) => (
              <div key={m.label} className="bg-ink-900 p-6">
                <dt className="text-xs uppercase tracking-[0.18em] text-fg-subtle">{m.label}</dt>
                <dd className="mt-2 text-fg">{m.value}</dd>
              </div>
            ))}
          </dl>
        </Container>
      </Section>

      {/* Overview / Challenges / Solutions */}
      <Section className="pt-0 sm:pt-0">
        <Container className="max-w-5xl">
          <Reveal>
            <h2 className="text-3xl font-semibold text-fg sm:text-4xl">Project overview</h2>
            <p className="mt-5 text-lg leading-relaxed text-fg-muted">{project.overview}</p>
          </Reveal>

          <div className="mt-16 grid gap-6 md:grid-cols-2">
            {[
              { icon: Lightbulb, title: "Challenges", items: project.challenges },
              { icon: Wrench, title: "Solutions", items: project.solutions },
            ].map(({ icon: Icon, title, items }) => (
              <Reveal key={title}>
                <article className="card-gradient-border h-full rounded-3xl bg-ink-900/60 p-8">
                  <span className="grid size-12 place-items-center rounded-2xl bg-gradient-to-br from-brand-blue/25 to-brand-violet/25 text-brand-sky">
                    <Icon className="size-5" aria-hidden="true" />
                  </span>
                  <h2 className="mt-6 text-2xl font-semibold text-fg">{title}</h2>
                  <ul className="mt-5 space-y-3.5">
                    {items.map((it) => (
                      <li key={it} className="flex gap-3 leading-relaxed text-fg-muted">
                        <CircleDot className="mt-1 size-4 shrink-0 text-brand-cyan" aria-hidden="true" />
                        {it}
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-16">
            <h2 className="text-2xl font-semibold text-fg">Technologies &amp; strategies used</h2>
            <ul className="mt-5 flex flex-wrap gap-2.5">
              {project.stack.map((s) => (
                <li key={s}>
                  <Tag className="px-4 py-1.5 text-sm">{s}</Tag>
                </li>
              ))}
            </ul>
          </Reveal>
        </Container>
      </Section>

      {/* Screenshots */}
      <Section className="pt-0 sm:pt-0">
        <Container>
          <h2 className="text-3xl font-semibold text-fg sm:text-4xl">Project screenshots</h2>
          <RevealGroup className="mt-10 grid gap-6 md:grid-cols-2">
            {project.screenshots.map((shot) => (
              <RevealItem key={shot.src}>
                <figure className="card-gradient-border overflow-hidden rounded-3xl bg-ink-900">
                  <div className="relative aspect-[4/3]">
                    <Image src={shot.src} alt={shot.alt} fill sizes="(min-width: 768px) 50vw, 100vw" className="object-cover" />
                  </div>
                  <figcaption className="border-t border-line px-6 py-4 text-sm text-fg-subtle">{shot.alt}</figcaption>
                </figure>
              </RevealItem>
            ))}
          </RevealGroup>
        </Container>
      </Section>

      {/* Results */}
      <Section className="pt-0 sm:pt-0">
        <Container>
          <div className="card-gradient-border rounded-[2rem] bg-ink-900/60 p-8 sm:p-12">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <h2 className="text-3xl font-semibold text-fg">Results</h2>
              <SampleBadge>Editable — add verified results only</SampleBadge>
            </div>
            <dl className="mt-8 grid gap-5 sm:grid-cols-3">
              {project.results.map((r) => (
                <div key={r.label} className="rounded-2xl border border-dashed border-line-strong p-6">
                  <dt className="text-sm text-fg-subtle">{r.label}</dt>
                  <dd className="mt-2 font-display text-2xl font-semibold text-fg-muted">{r.value}</dd>
                </div>
              ))}
            </dl>
          </div>

          <nav aria-label="More projects" className="mt-16 grid gap-4 sm:grid-cols-2">
            <Link href={`/portfolio/${prev.slug}`} className="group rounded-2xl border border-line bg-ink-900/40 p-6 transition-colors hover:border-line-strong">
              <span className="flex items-center gap-2 text-sm text-fg-subtle">
                <ArrowLeft className="size-4 transition-transform group-hover:-translate-x-1" aria-hidden="true" />
                Previous project
              </span>
              <span className="mt-2 block text-lg font-medium text-fg">{prev.name}</span>
            </Link>
            <Link href={`/portfolio/${next.slug}`} className="group rounded-2xl border border-line bg-ink-900/40 p-6 text-right transition-colors hover:border-line-strong">
              <span className="flex items-center justify-end gap-2 text-sm text-fg-subtle">
                Next project
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
              </span>
              <span className="mt-2 block text-lg font-medium text-fg">{next.name}</span>
            </Link>
          </nav>
        </Container>
      </Section>

      <CTASection />
    </>
  );
}
