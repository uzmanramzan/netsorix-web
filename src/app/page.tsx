import type { Metadata } from "next";
import { Hero } from "@/components/sections/home/Hero";
import { TrustedBy } from "@/components/sections/home/TrustedBy";
import { ServicesSection } from "@/components/sections/home/ServicesSection";
import { WhyChooseUs } from "@/components/sections/home/WhyChooseUs";
import { ProcessSection } from "@/components/sections/home/ProcessSection";
import { FeaturedWork } from "@/components/sections/home/FeaturedWork";
import { Testimonials } from "@/components/sections/home/Testimonials";
import { CTASection } from "@/components/sections/shared/CTASection";
import { JsonLd } from "@/components/ui/JsonLd";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: siteConfig.name,
          url: siteConfig.url,
          description: siteConfig.description,
        }}
      />
      <Hero />
      <TrustedBy />
      <ServicesSection />
      <WhyChooseUs />
      <ProcessSection />
      <FeaturedWork />
      <Testimonials />
      <CTASection />
    </>
  );
}
