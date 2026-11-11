import type { Stat, TeamMember, Testimonial } from "@/types";

/**
 * SAMPLE TESTIMONIALS — placeholders only.
 * Replace with genuine, client-approved testimonials before publishing.
 * Set `testimonialsAreSamples` to false once real testimonials are in place.
 */
export const testimonialsAreSamples = true;

export const testimonials: Testimonial[] = [
  {
    name: "Client Name",
    position: "Position / Title",
    company: "Company Name",
    feedback:
      "Sample testimonial: replace this with a genuine quote describing the client's experience working with the team — the problem they had, how the project went, and the outcome they saw.",
  },
  {
    name: "Client Name",
    position: "Position / Title",
    company: "Company Name",
    feedback:
      "Sample testimonial: a real quote here should mention specifics, such as communication, quality of work, or how the new website or campaign helped the business.",
  },
  {
    name: "Client Name",
    position: "Position / Title",
    company: "Company Name",
    feedback:
      "Sample testimonial: use the client's own words, with their written permission, and include their name, role, and company for credibility.",
  },
];

/** TEAM — placeholders. Replace with real team members and photos. */
export const team: TeamMember[] = [
  { name: "Team Member Name", role: "Founder & Creative Director", bio: "Add a short bio describing experience, focus areas, and what they bring to client projects.", initials: "TM" },
  { name: "Team Member Name", role: "Head of Engineering", bio: "Add a short bio describing technical expertise and the kinds of products they've built.", initials: "TM" },
  { name: "Team Member Name", role: "Lead Product Designer", bio: "Add a short bio describing design philosophy and areas of specialism.", initials: "TM" },
  { name: "Team Member Name", role: "Growth Marketing Lead", bio: "Add a short bio describing marketing channels and strategic strengths.", initials: "TM" },
];

/**
 * COMPANY STATS — editable placeholders.
 * Replace "—" with real, verifiable figures (e.g. "120+"). Do not publish invented numbers.
 */
export const companyStats: Stat[] = [
  { value: "—", label: "Projects delivered" },
  { value: "—", label: "Years of experience" },
  { value: "—", label: "Industries served" },
  { value: "—", label: "Client retention" },
];
