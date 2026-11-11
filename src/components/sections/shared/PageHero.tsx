import Link from "next/link";
import type { ReactNode } from "react";
import { ChevronRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Badge";
import { Reveal } from "@/components/ui/Reveal";
import { JsonLd } from "@/components/ui/JsonLd";
import { absoluteUrl } from "@/lib/utils";

interface Crumb {
  label: string;
  href: string;
}

interface PageHeroProps {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  breadcrumbs?: Crumb[];
  children?: ReactNode;
}

/** Hero used at the top of every inner page, with optional breadcrumb trail + BreadcrumbList JSON-LD. */
export function PageHero({ eyebrow, title, description, breadcrumbs, children }: PageHeroProps) {
  const crumbs = breadcrumbs ? [{ label: "Home", href: "/" }, ...breadcrumbs] : undefined;

  return (
    <section className="relative isolate overflow-hidden pb-16 pt-36 sm:pb-24 sm:pt-44">
      <div aria-hidden="true" className="bg-grid absolute inset-0 -z-10" />
      <div aria-hidden="true" className="absolute left-1/2 top-0 -z-10 h-[480px] w-[900px] -translate-x-1/2 rounded-full bg-gradient-to-r from-brand-blue/25 via-indigo-500/15 to-brand-violet/25 blur-[120px]" />
      <Container>
        {crumbs && (
          <>
            <JsonLd
              data={{
                "@context": "https://schema.org",
                "@type": "BreadcrumbList",
                itemListElement: crumbs.map((c, i) => ({
                  "@type": "ListItem",
                  position: i + 1,
                  name: c.label,
                  item: absoluteUrl(c.href),
                })),
              }}
            />
            <nav aria-label="Breadcrumb" className="mb-8">
              <ol className="flex flex-wrap items-center gap-1.5 text-sm text-fg-subtle">
                {crumbs.map((c, i) => (
                  <li key={c.href} className="flex items-center gap-1.5">
                    {i > 0 && <ChevronRight className="size-3.5" aria-hidden="true" />}
                    {i === crumbs.length - 1 ? (
                      <span aria-current="page" className="text-fg-muted">
                        {c.label}
                      </span>
                    ) : (
                      <Link href={c.href} className="transition-colors hover:text-fg">
                        {c.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ol>
            </nav>
          </>
        )}
        <Reveal className="max-w-4xl">
          {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
          <h1 className="mt-6 text-5xl font-semibold leading-[1.04] text-fg sm:text-6xl lg:text-7xl">{title}</h1>
          {description && <p className="mt-6 max-w-2xl text-lg leading-relaxed text-fg-muted sm:text-xl">{description}</p>}
          {children}
        </Reveal>
      </Container>
    </section>
  );
}
