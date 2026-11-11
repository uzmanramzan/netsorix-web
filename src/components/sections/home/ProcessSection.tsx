import { Container, Section } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProcessTimeline } from "@/components/sections/shared/ProcessTimeline";
import { agencyProcess } from "@/data/process";

export function ProcessSection() {
  return (
    <Section className="border-y border-line bg-ink-900/30">
      <Container>
        <SectionHeading
          eyebrow="How we work"
          title={
            <>
              A Clear Process, <span className="text-gradient">Predictable Results</span>
            </>
          }
          description="Four focused stages that keep projects on track, on budget, and aligned with what your business actually needs."
        />
        <div className="mt-16">
          <ProcessTimeline steps={agencyProcess} />
        </div>
      </Container>
    </Section>
  );
}
