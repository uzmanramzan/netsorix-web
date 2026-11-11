import { Container } from "@/components/ui/Container";

/**
 * Client logo strip. These are labelled placeholders — swap each <LogoPlaceholder />
 * for a real, approved client logo (e.g. next/image with an SVG in /public/logos).
 */
const placeholders = Array.from({ length: 8 }, (_, i) => `Client Logo ${String(i + 1).padStart(2, "0")}`);

function LogoPlaceholder({ label }: { label: string }) {
  return (
    <div className="flex h-14 w-44 shrink-0 items-center justify-center gap-2.5 rounded-2xl border border-dashed border-line-strong px-5 text-fg-subtle transition-colors hover:border-brand-blue/40 hover:text-fg-muted">
      <span aria-hidden="true" className="size-5 rounded-md bg-gradient-to-br from-white/20 to-white/5" />
      <span className="text-sm font-medium tracking-wide">{label}</span>
    </div>
  );
}

export function TrustedBy() {
  return (
    <section aria-labelledby="trusted-heading" className="relative border-y border-line bg-ink-900/40 py-14">
      <Container>
        <div className="flex flex-col items-center gap-2 text-center">
          <h2 id="trusted-heading" className="font-sans text-sm font-medium uppercase tracking-[0.2em] text-fg-subtle">
            Trusted by growing businesses
          </h2>
          <p className="text-xs text-fg-subtle/80">Placeholder logos — replace with approved client brands</p>
        </div>
      </Container>
      <div className="relative mt-9 overflow-hidden [mask-image:linear-gradient(to_right,transparent,#000_12%,#000_88%,transparent)]">
        <ul className="flex w-max animate-marquee gap-5 hover:[animation-play-state:paused]">
          {[...placeholders, ...placeholders].map((label, i) => (
            <li key={`${label}-${i}`} aria-hidden={i >= placeholders.length ? true : undefined}>
              <LogoPlaceholder label={label} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
