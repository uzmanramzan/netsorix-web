import { buildMetadata } from "@/lib/seo";
import { services } from "@/data/services";
import { PageHero } from "@/components/sections/shared/PageHero";
import { CTASection } from "@/components/sections/shared/CTASection";
import { ProcessTimeline } from "@/components/sections/shared/ProcessTimeline";
import { agencyProcess } from "@/data/process";
import { ServiceCard } from "@/components/cards/ServiceCard";
import { Container, Section } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { JsonLd } from "@/components/ui/JsonLd";
import { absoluteUrl } from "@/lib/utils";

export const metadata = buildMetadata({
  title: "Services",
  description:
    "Website development, digital marketing, social media, SEO, UI/UX design, and branding — explore the full range of digital services from Netsorix.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "ItemList",
          itemListElement: services.map((s, i) => ({
            "@type": "ListItem",
            position: i + 1,
            url: absoluteUrl(`/services/${s.slug}`),
            name: s.title,
          })),
        }}
      />
      <PageHero
        eyebrow="Our services"
        title={
          <>
            Digital services that <span className="text-gradient">move the needle.</span>
          </>
        }
        description="Six core disciplines, one integrated team. Choose a single service or combine them into a complete growth programme."
        breadcrumbs={[{ label: "Services", href: "/services" }]}
      />

      <Section className="pt-4 sm:pt-8">
        <Container>
          <RevealGroup className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => (
              <RevealItem key={s.slug}>
                <ServiceCard service={s} index={i} />
              </RevealItem>
            ))}
          </RevealGroup>
        </Container>
      </Section>

      <Section className="border-y border-line bg-ink-900/30">
        <Container>
          <SectionHeading eyebrow="Our process" title="How every engagement runs" description="A consistent, collaborative approach — whatever service you choose." />
          <div className="mt-16">
            <ProcessTimeline steps={agencyProcess} />
          </div>
        </Container>
      </Section>

      <CTASection title="Not sure which service you need?" description="Tell us about your goals and we'll recommend the right mix of services for your business and budget." cta="Book a Free Consultation" />
    </>
  );
}
