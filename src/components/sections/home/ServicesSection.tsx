import { services } from "@/data/services";
import { ServiceCard } from "@/components/cards/ServiceCard";
import { Container, Section } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { ButtonLink } from "@/components/ui/Button";

export function ServicesSection() {
  return (
    <Section id="services">
      <Container>
        <SectionHeading
          eyebrow="What we do"
          title={
            <>
              Everything You Need to <span className="text-gradient">Grow Digitally</span>
            </>
          }
          description="From the first line of code to the last campaign report, our specialists cover every part of your digital presence — working as one team toward your goals."
        />
        <RevealGroup className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <RevealItem key={s.slug}>
              <ServiceCard service={s} index={i} />
            </RevealItem>
          ))}
        </RevealGroup>
        <div className="mt-14 flex justify-center">
          <ButtonLink href="/services" variant="secondary" arrow>
            View all services
          </ButtonLink>
        </div>
      </Container>
    </Section>
  );
}
