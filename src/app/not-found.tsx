import type { Metadata } from "next";
import Link from "next/link";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { services } from "@/data/services";

export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false },
};

export default function NotFound() {
  return (
    <section className="relative isolate flex min-h-[85vh] items-center overflow-hidden pb-20 pt-36">
      <div aria-hidden="true" className="bg-grid absolute inset-0 -z-10" />
      <div aria-hidden="true" className="absolute left-1/2 top-1/3 -z-10 size-[600px] -translate-x-1/2 rounded-full bg-gradient-to-r from-brand-blue/25 to-brand-violet/25 blur-[130px]" />
      <Container className="text-center">
        <p className="font-display text-[8rem] font-semibold leading-none text-gradient sm:text-[12rem]" aria-hidden="true">
          404
        </p>
        <h1 className="mt-4 text-3xl font-semibold text-fg sm:text-5xl">This page drifted off the grid.</h1>
        <p className="mx-auto mt-5 max-w-lg text-lg text-fg-muted">
          The page you&apos;re looking for doesn&apos;t exist or may have moved. Let&apos;s get you back on track.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <ButtonLink href="/" size="lg" arrow>
            Back to Home
          </ButtonLink>
          <ButtonLink href="/contact" size="lg" variant="secondary">
            Contact Us
          </ButtonLink>
        </div>
        <nav aria-label="Popular pages" className="mt-14">
          <p className="text-sm text-fg-subtle">Popular services</p>
          <ul className="mt-4 flex flex-wrap justify-center gap-2">
            {services.map((s) => (
              <li key={s.slug}>
                <Link href={`/services/${s.slug}`} className="glass inline-flex rounded-full px-4 py-2 text-sm text-fg-muted transition-colors hover:text-fg">
                  {s.shortTitle}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </Container>
    </section>
  );
}
