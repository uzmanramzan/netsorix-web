import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

interface CTASectionProps {
  title?: string;
  description?: string;
  cta?: string;
  href?: string;
}

export function CTASection({
  title = "Ready to Take Your Business to the Next Level?",
  description = "Let's discuss your goals and create a digital solution that helps your business stand out.",
  cta = "Start Your Project",
  href = "/contact",
}: CTASectionProps) {
  return (
    <section className="relative py-24 sm:py-32">
      <Container>
        <Reveal>
          <div className="relative isolate overflow-hidden rounded-[2.5rem] border border-line bg-ink-900 px-6 py-20 text-center sm:px-16 sm:py-24">
            <div aria-hidden="true" className="bg-grid absolute inset-0 -z-10 opacity-70" />
            <div aria-hidden="true" className="absolute -left-24 -top-32 -z-10 size-[420px] rounded-full bg-brand-blue/30 blur-[110px]" />
            <div aria-hidden="true" className="absolute -bottom-40 -right-20 -z-10 size-[460px] rounded-full bg-brand-violet/30 blur-[120px]" />
            <div aria-hidden="true" className="absolute inset-x-0 top-0 -z-10 h-px bg-gradient-to-r from-transparent via-brand-cyan/60 to-transparent" />
            <h2 className="mx-auto max-w-3xl text-4xl font-semibold leading-[1.08] text-fg sm:text-5xl lg:text-6xl">{title}</h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-fg-muted">{description}</p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <ButtonLink href={href} size="lg" arrow>
                {cta}
              </ButtonLink>
              <ButtonLink href="/portfolio" size="lg" variant="secondary">
                See Our Work
              </ButtonLink>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
