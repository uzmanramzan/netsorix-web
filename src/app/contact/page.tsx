import { Suspense } from "react";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/data/site";
import { PageHero } from "@/components/sections/shared/PageHero";
import { ContactForm, ContactFormFallback } from "@/components/contact/ContactForm";
import { Container, Section } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { SocialLinks } from "@/components/ui/SocialIcons";
import { JsonLd } from "@/components/ui/JsonLd";
import { absoluteUrl } from "@/lib/utils";

export const metadata = buildMetadata({
  title: "Contact Us",
  description: "Tell us about your project. Get in touch with Netsorix for web development, digital marketing, SEO, design, and branding.",
  path: "/contact",
});

const contactItems = [
  { icon: Mail, label: "Email", value: siteConfig.contact.email, href: `mailto:${siteConfig.contact.email}` },
  { icon: Phone, label: "Phone", value: siteConfig.contact.phone, href: `tel:${siteConfig.contact.phone.replace(/\s/g, "")}` },
  { icon: MapPin, label: "Office", value: siteConfig.contact.address },
  { icon: Clock, label: "Hours", value: siteConfig.contact.hours },
];

export default function ContactPage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "ContactPage",
          name: `Contact ${siteConfig.name}`,
          url: absoluteUrl("/contact"),
        }}
      />
      <PageHero
        eyebrow="Contact"
        title={
          <>
            Let&apos;s build something <span className="text-gradient">great together.</span>
          </>
        }
        description="Tell us a little about your business and what you're looking to achieve. We'll review your details and follow up to plan next steps."
        breadcrumbs={[{ label: "Contact", href: "/contact" }]}
      />

      <Section className="pt-0 sm:pt-0">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr]">
            <Reveal className="space-y-6">
              <div className="card-gradient-border rounded-3xl bg-ink-900/60 p-8">
                <h2 className="text-xl font-semibold text-fg">Contact information</h2>
                <p className="mt-2 text-sm text-fg-subtle">Prefer email or a call? Reach us directly.</p>
                <ul className="mt-8 space-y-6">
                  {contactItems.map(({ icon: Icon, label, value, href }) => (
                    <li key={label} className="flex items-start gap-4">
                      <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-brand-blue/25 to-brand-violet/25 text-brand-sky">
                        <Icon className="size-5" aria-hidden="true" />
                      </span>
                      <span>
                        <span className="block text-xs uppercase tracking-[0.16em] text-fg-subtle">{label}</span>
                        {href ? (
                          <a href={href} className="mt-1 block text-fg transition-colors hover:text-brand-sky">
                            {value}
                          </a>
                        ) : (
                          <span className="mt-1 block text-fg">{value}</span>
                        )}
                      </span>
                    </li>
                  ))}
                </ul>
                <div className="mt-8 border-t border-line pt-6">
                  <p className="text-sm text-fg-subtle">Follow us</p>
                  <SocialLinks className="mt-3" />
                </div>
              </div>

              <div className="rounded-3xl border border-line bg-gradient-to-br from-brand-blue/10 to-brand-violet/10 p-8">
                <h2 className="text-lg font-semibold text-fg">What happens next?</h2>
                <ol className="mt-5 space-y-4 text-sm text-fg-muted">
                  {["We review your project details.", "We schedule a discovery call to understand your goals.", "You receive a tailored proposal with scope, timeline, and pricing."].map((s, i) => (
                    <li key={s} className="flex gap-3">
                      <span className="grid size-6 shrink-0 place-items-center rounded-full bg-white/10 text-xs font-semibold text-fg">{i + 1}</span>
                      {s}
                    </li>
                  ))}
                </ol>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="card-gradient-border relative rounded-3xl bg-ink-900/60 p-6 sm:p-10">
                <h2 className="text-2xl font-semibold text-fg">Tell us about your project</h2>
                <p className="mb-8 mt-2 text-sm text-fg-subtle">Fields marked * are required.</p>
                <Suspense fallback={<ContactFormFallback />}>
                  <ContactForm />
                </Suspense>
              </div>
            </Reveal>
          </div>
        </Container>
      </Section>
    </>
  );
}
