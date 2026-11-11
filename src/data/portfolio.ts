import type { Project, ProjectCategory } from "@/types";

/**
 * SAMPLE PORTFOLIO DATA
 * These are illustrative placeholder projects that show the layout.
 * Replace names, descriptions, images, and results with genuine, client-approved case studies.
 * Results are intentionally left as "To be added" — never publish unverified figures.
 */

export const projectCategories: ProjectCategory[] = [
  "Web Development",
  "E-commerce",
  "Digital Marketing",
  "Branding",
];

const pendingResults = [
  { label: "Primary KPI", value: "To be added" },
  { label: "Secondary KPI", value: "To be added" },
  { label: "Timeline", value: "To be added" },
];

export const projects: Project[] = [
  {
    slug: "saas-platform-website",
    name: "Project Name — SaaS Platform",
    category: "Web Development",
    summary: "A sample marketing site and onboarding flow for a B2B software product, built on Next.js.",
    cover: "/images/portfolio/saas-platform-website.svg",
    coverAlt: "Placeholder artwork for a SaaS platform website project with dashboard interface shapes",
    screenshots: [
      { src: "/images/portfolio/screens/saas-platform-website-1.svg", alt: "Placeholder screenshot of the SaaS homepage layout" },
      { src: "/images/portfolio/screens/saas-platform-website-2.svg", alt: "Placeholder screenshot of the SaaS pricing page layout" },
    ],
    industry: "Software / SaaS",
    services: ["UI/UX Design", "Website Development", "SEO"],
    overview: "This sample case study illustrates how a SaaS website project is presented. Replace it with the real project story: who the client is, what they needed, and why they chose to work with us.",
    challenges: [
      "Describe the client's starting point — for example, an outdated site that didn't explain the product clearly.",
      "Note technical constraints such as performance issues or a hard-to-edit CMS.",
      "Capture the business goal, such as increasing demo requests.",
    ],
    solutions: [
      "Summarise the strategy — for example, restructured messaging and clearer conversion paths.",
      "Describe the design approach and component system created.",
      "Explain the technical build: framework, CMS, integrations, and performance work.",
    ],
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Headless CMS", "Vercel"],
    results: pendingResults,
    featured: true,
  },
  {
    slug: "fashion-ecommerce-store",
    name: "Project Name — Fashion Store",
    category: "E-commerce",
    summary: "A sample headless storefront with fast product discovery and a streamlined checkout.",
    cover: "/images/portfolio/fashion-ecommerce-store.svg",
    coverAlt: "Placeholder artwork for an e-commerce store project with product grid shapes",
    screenshots: [
      { src: "/images/portfolio/screens/fashion-ecommerce-store-1.svg", alt: "Placeholder screenshot of the store collection page" },
      { src: "/images/portfolio/screens/fashion-ecommerce-store-2.svg", alt: "Placeholder screenshot of the product detail page" },
    ],
    industry: "Retail / Fashion",
    services: ["E-commerce Development", "UI/UX Design"],
    overview: "This sample case study shows how an e-commerce project is presented. Replace it with the client's real story, scope, and approved visuals.",
    challenges: [
      "Describe the store's original pain points — slow pages, weak mobile experience, or checkout drop-off.",
      "Note catalog or inventory complexity.",
      "Capture the commercial goal for the project.",
    ],
    solutions: [
      "Explain the platform choice and headless architecture.",
      "Describe product discovery improvements such as filtering and search.",
      "Summarise checkout and performance optimisations.",
    ],
    stack: ["Next.js", "Headless Commerce API", "Stripe", "Algolia"],
    results: pendingResults,
    featured: true,
  },
  {
    slug: "lead-generation-campaign",
    name: "Project Name — Lead Gen Campaign",
    category: "Digital Marketing",
    summary: "A sample full-funnel paid campaign with dedicated landing pages and automated nurturing.",
    cover: "/images/portfolio/lead-generation-campaign.svg",
    coverAlt: "Placeholder artwork for a digital marketing campaign with chart and funnel shapes",
    screenshots: [
      { src: "/images/portfolio/screens/lead-generation-campaign-1.svg", alt: "Placeholder screenshot of the campaign landing page" },
      { src: "/images/portfolio/screens/lead-generation-campaign-2.svg", alt: "Placeholder screenshot of the campaign reporting dashboard" },
    ],
    industry: "Professional Services",
    services: ["Digital Marketing", "Google Ads", "Marketing Automation"],
    overview: "This sample case study demonstrates how a marketing campaign is presented. Replace it with the real campaign details and verified outcomes.",
    challenges: [
      "Describe the lead flow before the campaign and why it fell short.",
      "Note any tracking or attribution gaps.",
      "Capture budget constraints and targets.",
    ],
    solutions: [
      "Outline the channel strategy and audience targeting.",
      "Describe landing page and offer development.",
      "Explain the automation and reporting set-up.",
    ],
    stack: ["Google Ads", "Analytics", "Landing Pages", "CRM Automation"],
    results: pendingResults,
    featured: true,
  },
  {
    slug: "fintech-brand-identity",
    name: "Project Name — Fintech Identity",
    category: "Branding",
    summary: "A sample brand identity system: logo, colour, typography, and launch materials.",
    cover: "/images/portfolio/fintech-brand-identity.svg",
    coverAlt: "Placeholder artwork for a brand identity project with logo mark and colour swatches",
    screenshots: [
      { src: "/images/portfolio/screens/fintech-brand-identity-1.svg", alt: "Placeholder of the brand logo and colour system" },
      { src: "/images/portfolio/screens/fintech-brand-identity-2.svg", alt: "Placeholder of brand applications on marketing materials" },
    ],
    industry: "Financial Services",
    services: ["Brand Strategy", "Logo Design", "Brand Guidelines"],
    overview: "This sample case study shows how a branding project is presented. Replace it with the real brand story and approved assets.",
    challenges: [
      "Describe how the previous identity limited the business.",
      "Note audience perception issues the rebrand had to address.",
      "Capture the launch timeline and rollout scope.",
    ],
    solutions: [
      "Summarise the brand strategy and positioning.",
      "Describe the logo and visual identity concept.",
      "Explain the guidelines and rollout materials delivered.",
    ],
    stack: ["Brand Strategy", "Figma", "Illustrator", "Brand Guidelines"],
    results: pendingResults,
    featured: true,
  },
  {
    slug: "healthcare-web-portal",
    name: "Project Name — Patient Portal",
    category: "Web Development",
    summary: "A sample accessible web portal for booking and managing appointments.",
    cover: "/images/portfolio/healthcare-web-portal.svg",
    coverAlt: "Placeholder artwork for a web portal project with calendar and form shapes",
    screenshots: [
      { src: "/images/portfolio/screens/healthcare-web-portal-1.svg", alt: "Placeholder screenshot of the portal dashboard" },
      { src: "/images/portfolio/screens/healthcare-web-portal-2.svg", alt: "Placeholder screenshot of the booking flow" },
    ],
    industry: "Healthcare",
    services: ["Web Application", "UI/UX Design", "Accessibility"],
    overview: "This sample case study illustrates a web application project. Replace it with the client's real scope and story.",
    challenges: [
      "Describe the manual processes the portal replaced.",
      "Note accessibility and security requirements.",
      "Capture integration needs with existing systems.",
    ],
    solutions: [
      "Explain the user flows designed for patients and staff.",
      "Describe accessibility measures implemented.",
      "Summarise the integrations and security approach.",
    ],
    stack: ["React", "Node.js", "PostgreSQL", "WCAG 2.2"],
    results: pendingResults,
  },
  {
    slug: "home-goods-shopify-store",
    name: "Project Name — Home Goods Store",
    category: "E-commerce",
    summary: "A sample storefront redesign focused on mobile shopping and product storytelling.",
    cover: "/images/portfolio/home-goods-shopify-store.svg",
    coverAlt: "Placeholder artwork for an online store redesign with product card shapes",
    screenshots: [
      { src: "/images/portfolio/screens/home-goods-shopify-store-1.svg", alt: "Placeholder screenshot of the store homepage" },
      { src: "/images/portfolio/screens/home-goods-shopify-store-2.svg", alt: "Placeholder screenshot of the mobile cart" },
    ],
    industry: "Retail / Home",
    services: ["E-commerce Development", "SEO", "Social Media"],
    overview: "This sample case study presents an e-commerce redesign. Replace it with the real project details.",
    challenges: [
      "Describe the mobile experience issues customers faced.",
      "Note product content and photography gaps.",
      "Capture the sales or engagement goals.",
    ],
    solutions: [
      "Describe the redesigned shopping journey.",
      "Explain content and SEO improvements.",
      "Summarise the launch and social promotion plan.",
    ],
    stack: ["Shopify", "Liquid", "Klaviyo", "Meta Ads"],
    results: pendingResults,
  },
  {
    slug: "social-growth-campaign",
    name: "Project Name — Social Campaign",
    category: "Digital Marketing",
    summary: "A sample social media programme with a content system and paid social amplification.",
    cover: "/images/portfolio/social-growth-campaign.svg",
    coverAlt: "Placeholder artwork for a social media campaign with post and engagement shapes",
    screenshots: [
      { src: "/images/portfolio/screens/social-growth-campaign-1.svg", alt: "Placeholder of the social content grid" },
      { src: "/images/portfolio/screens/social-growth-campaign-2.svg", alt: "Placeholder of the campaign creative set" },
    ],
    industry: "Hospitality",
    services: ["Social Media Marketing", "Content Strategy", "Paid Social"],
    overview: "This sample case study shows a social media project layout. Replace it with the real campaign story and approved creatives.",
    challenges: [
      "Describe the brand's social presence before the engagement.",
      "Note content production constraints.",
      "Capture audience and growth objectives.",
    ],
    solutions: [
      "Outline content pillars and creative direction.",
      "Describe the publishing and community process.",
      "Explain the paid amplification strategy.",
    ],
    stack: ["Content Strategy", "Figma", "Paid Social", "Analytics"],
    results: pendingResults,
  },
  {
    slug: "studio-rebrand",
    name: "Project Name — Studio Rebrand",
    category: "Branding",
    summary: "A sample rebrand for a creative studio, from strategy through to a refreshed website.",
    cover: "/images/portfolio/studio-rebrand.svg",
    coverAlt: "Placeholder artwork for a rebrand project with typography and shape studies",
    screenshots: [
      { src: "/images/portfolio/screens/studio-rebrand-1.svg", alt: "Placeholder of the new logo and typography" },
      { src: "/images/portfolio/screens/studio-rebrand-2.svg", alt: "Placeholder of the brand applied to stationery" },
    ],
    industry: "Creative Services",
    services: ["Brand Identity", "Graphic Design", "Website Design"],
    overview: "This sample case study presents a rebrand project. Replace it with the real brand story.",
    challenges: [
      "Describe why the studio needed a rebrand.",
      "Note audience or market shifts.",
      "Capture constraints around existing brand equity.",
    ],
    solutions: [
      "Summarise the new brand positioning.",
      "Describe the identity system and its rationale.",
      "Explain how the brand was rolled out across channels.",
    ],
    stack: ["Brand Strategy", "Illustrator", "Figma", "Next.js"],
    results: pendingResults,
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export const featuredProjects = projects.filter((p) => p.featured);
