import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { mainNav, siteConfig } from "@/data/site";
import { services } from "@/data/services";
import { Container } from "@/components/ui/Container";
import { SocialLinks } from "@/components/ui/SocialIcons";
import { Logo } from "./Logo";

async function getCopyrightYear() {
  "use cache";
  return new Date().getFullYear();
}

export async function Footer() {
  const year = await getCopyrightYear();

  return (
    <footer className="relative overflow-hidden border-t border-line bg-ink-950">
      <div aria-hidden="true" className="pointer-events-none absolute -top-40 left-1/2 h-80 w-[900px] -translate-x-1/2 rounded-full bg-brand-blue/10 blur-[120px]" />
      <Container className="relative">
        <div className="grid gap-12 py-16 sm:py-20 md:grid-cols-2 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Logo />
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-fg-muted">{siteConfig.description}</p>
            <SocialLinks className="mt-6" />
          </div>

          <nav aria-label="Footer navigation" className="lg:col-span-2">
            <h2 className="text-sm font-semibold text-fg">Company</h2>
            <ul className="mt-4 space-y-3 text-sm">
              {mainNav.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-fg-muted transition-colors hover:text-fg">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Services" className="lg:col-span-3">
            <h2 className="text-sm font-semibold text-fg">Services</h2>
            <ul className="mt-4 space-y-3 text-sm">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link href={`/services/${s.slug}`} className="text-fg-muted transition-colors hover:text-fg">
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="lg:col-span-3">
            <h2 className="text-sm font-semibold text-fg">Get in touch</h2>
            <address className="mt-4 space-y-3.5 text-sm not-italic">
              <a href={`mailto:${siteConfig.contact.email}`} className="flex items-start gap-3 text-fg-muted transition-colors hover:text-fg">
                <Mail className="mt-0.5 size-4 shrink-0 text-brand-sky" aria-hidden="true" />
                {siteConfig.contact.email}
              </a>
              <a href={`tel:${siteConfig.contact.phone.replace(/\s/g, "")}`} className="flex items-start gap-3 text-fg-muted transition-colors hover:text-fg">
                <Phone className="mt-0.5 size-4 shrink-0 text-brand-sky" aria-hidden="true" />
                {siteConfig.contact.phone}
              </a>
              <p className="flex items-start gap-3 text-fg-muted">
                <MapPin className="mt-0.5 size-4 shrink-0 text-brand-sky" aria-hidden="true" />
                {siteConfig.contact.address}
              </p>
            </address>
          </div>
        </div>

        <div className="flex flex-col items-start justify-between gap-4 border-t border-line py-8 text-sm text-fg-subtle sm:flex-row sm:items-center">
          <p>
            © {year} {siteConfig.legalName}. All rights reserved.
          </p>
          <ul className="flex gap-6">
            <li>
              <Link href="/privacy" className="transition-colors hover:text-fg">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="/terms" className="transition-colors hover:text-fg">
                Terms &amp; Conditions
              </Link>
            </li>
          </ul>
        </div>
      </Container>
    </footer>
  );
}
