/**
 * Central site configuration.
 * Every value marked "PLACEHOLDER" must be replaced with real details before launch.
 */
export const siteConfig = {
  name: "Netsorix",
  legalName: "Netsorix Digital", // PLACEHOLDER: registered company name
  tagline: "Digital agency for ambitious brands",
  description:
    "Netsorix is a digital agency that designs, builds, and grows digital products — websites, marketing, SEO, UI/UX, and brand identity for startups and established businesses.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.netsorix.com", // PLACEHOLDER: production domain
  contact: {
    email: "hello@netsorix.com", // PLACEHOLDER
    phone: "+00 000 000 0000", // PLACEHOLDER
    address: "Your Street Address, City, Country", // PLACEHOLDER
    hours: "Mon – Fri, 9:00 – 18:00", // PLACEHOLDER
  },
  // PLACEHOLDER: replace "#" with real profile URLs. Links pointing to "#" are hidden from structured data.
  socials: [
    { label: "LinkedIn", href: "#", icon: "linkedin" },
    { label: "Instagram", href: "#", icon: "instagram" },
    { label: "X (Twitter)", href: "#", icon: "x" },
    { label: "Dribbble", href: "#", icon: "dribbble" },
    { label: "GitHub", href: "#", icon: "github" },
  ] as const,
} as const;

export type SocialIconName = (typeof siteConfig.socials)[number]["icon"];

export const mainNav = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Contact", href: "/contact" },
] as const;
