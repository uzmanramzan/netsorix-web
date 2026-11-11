import Link from "next/link";
import { featuredProjects, projectCategories } from "@/data/portfolio";
import { ProjectCard } from "@/components/cards/ProjectCard";
import { Container, Section } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { ButtonLink } from "@/components/ui/Button";
import { SampleBadge } from "@/components/ui/Badge";

export function FeaturedWork() {
  return (
    <Section>
      <Container>
        <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-end">
          <SectionHeading
            align="left"
            eyebrow="Featured work"
            title={
              <>
                Projects Built to <span className="text-gradient">Make an Impact</span>
              </>
            }
            description="A look at the kind of work we do across web, commerce, marketing, and brand. Case studies shown are sample layouts until real projects are published."
          />
          <ul className="flex flex-wrap gap-2" aria-label="Portfolio categories">
            {projectCategories.map((c) => (
              <li key={c}>
                <Link
                  href={`/portfolio?category=${encodeURIComponent(c)}`}
                  className="glass inline-flex rounded-full px-4 py-2 text-sm text-fg-muted transition-colors hover:text-fg"
                >
                  {c}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-6">
          <SampleBadge>Sample projects</SampleBadge>
        </div>

        <RevealGroup className="mt-10 grid gap-6 md:grid-cols-2">
          {featuredProjects.map((p, i) => (
            <RevealItem key={p.slug} className={i % 2 === 1 ? "md:translate-y-16" : undefined}>
              <ProjectCard project={p} />
            </RevealItem>
          ))}
        </RevealGroup>

        <div className="mt-14 flex justify-center md:mt-28">
          <ButtonLink href="/portfolio" variant="secondary" arrow>
            View full portfolio
          </ButtonLink>
        </div>
      </Container>
    </Section>
  );
}
