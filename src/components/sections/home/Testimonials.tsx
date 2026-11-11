import { Quote } from "lucide-react";
import { testimonials, testimonialsAreSamples } from "@/data/people";
import { Container, Section } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { SampleBadge } from "@/components/ui/Badge";

export function Testimonials() {
  return (
    <Section className="overflow-hidden">
      <div aria-hidden="true" className="absolute right-[-10%] top-10 -z-10 size-[500px] rounded-full bg-brand-violet/10 blur-[130px]" />
      <Container>
        <SectionHeading
          eyebrow="Client voices"
          title={
            <>
              What Our Clients <span className="text-gradient">Say</span>
            </>
          }
          description="Feedback from the businesses we partner with."
        />
        {testimonialsAreSamples && (
          <div className="mt-6 flex justify-center">
            <SampleBadge>Sample testimonials — replace with genuine client feedback</SampleBadge>
          </div>
        )}

        <RevealGroup className="mt-14 grid gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <RevealItem key={i}>
              <figure className="card-gradient-border flex h-full flex-col rounded-3xl bg-ink-900/60 p-8 transition-transform duration-500 hover:-translate-y-1">
                <Quote className="size-8 text-brand-violet/70" aria-hidden="true" />
                <blockquote className="mt-6 flex-1 text-[1.02rem] leading-relaxed text-fg-muted">
                  <p>&ldquo;{t.feedback}&rdquo;</p>
                </blockquote>
                <figcaption className="mt-8 flex items-center gap-4 border-t border-line pt-6">
                  <span aria-hidden="true" className="grid size-11 place-items-center rounded-full bg-gradient-to-br from-brand-blue/40 to-brand-violet/40 text-sm font-semibold text-fg">
                    {t.name.split(" ").map((w) => w[0]).join("").slice(0, 2)}
                  </span>
                  <span>
                    <span className="block font-medium text-fg">{t.name}</span>
                    <span className="block text-sm text-fg-subtle">
                      {t.position}, {t.company}
                    </span>
                  </span>
                </figcaption>
              </figure>
            </RevealItem>
          ))}
        </RevealGroup>
      </Container>
    </Section>
  );
}
