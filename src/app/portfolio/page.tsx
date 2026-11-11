import { Suspense } from "react";
import { buildMetadata } from "@/lib/seo";
import { projectCategories, projects } from "@/data/portfolio";
import { PageHero } from "@/components/sections/shared/PageHero";
import { CTASection } from "@/components/sections/shared/CTASection";
import { PortfolioGallery, PortfolioGalleryFallback } from "@/components/portfolio/PortfolioGallery";
import { Container, Section } from "@/components/ui/Container";
import { SampleBadge } from "@/components/ui/Badge";

export const metadata = buildMetadata({
  title: "Portfolio",
  description:
    "Explore Netsorix work across web development, e-commerce, digital marketing, and branding.",
  path: "/portfolio",
});

export default function PortfolioPage() {
  return (
    <>
      <PageHero
        eyebrow="Our work"
        title={
          <>
            Work that speaks <span className="text-gradient">for itself.</span>
          </>
        }
        description="A selection of projects across web, commerce, marketing, and brand. Filter by category to explore."
        breadcrumbs={[{ label: "Portfolio", href: "/portfolio" }]}
      >
        <div className="mt-8">
          <SampleBadge>Sample case studies — replace with real, client-approved projects</SampleBadge>
        </div>
      </PageHero>

      <Section className="pt-0 sm:pt-0">
        <Container>
          <Suspense fallback={<PortfolioGalleryFallback projects={projects} />}>
            <PortfolioGallery projects={projects} categories={projectCategories} />
          </Suspense>
        </Container>
      </Section>

      <CTASection title="Want results like these for your business?" />
    </>
  );
}
