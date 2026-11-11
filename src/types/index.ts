import type { LucideIcon } from "lucide-react";

export interface NavLink {
  label: string;
  href: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface ProcessStep {
  title: string;
  description: string;
}

export interface Feature {
  title: string;
  description: string;
}

export interface Service {
  slug: string;
  title: string;
  shortTitle: string;
  icon: LucideIcon;
  /** One-line value proposition shown on cards. */
  tagline: string;
  /** Short card description. */
  description: string;
  /** Long-form intro used on the detail page. */
  overview: string;
  /** Sub-services listed on cards and detail page. */
  capabilities: string[];
  problems: Feature[];
  offerings: Feature[];
  process: ProcessStep[];
  benefits: Feature[];
  faqs: FAQ[];
  /** Tailwind gradient classes for the icon/visual accent. */
  accent: string;
}

export type ProjectCategory = "Web Development" | "E-commerce" | "Digital Marketing" | "Branding";

export interface ProjectResult {
  /** Metric label, e.g. "Conversion rate". */
  label: string;
  /** Leave as a placeholder until real, verified data is available. */
  value: string;
}

export interface Project {
  slug: string;
  /** Placeholder name — replace with the real project/client name once approved. */
  name: string;
  category: ProjectCategory;
  summary: string;
  cover: string;
  coverAlt: string;
  screenshots: { src: string; alt: string }[];
  /** Industry / sector placeholder. */
  industry: string;
  services: string[];
  overview: string;
  challenges: string[];
  solutions: string[];
  stack: string[];
  results: ProjectResult[];
  featured?: boolean;
}

export interface Testimonial {
  name: string;
  position: string;
  company: string;
  feedback: string;
}

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  initials: string;
}

export interface Stat {
  value: string;
  label: string;
}
