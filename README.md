# Netsorix — Digital Agency Website

Next.js 16 (App Router, Cache Components) · React 19 · TypeScript · Tailwind CSS v4 · Framer Motion · Lucide.

```bash
npm install
npm run dev        # http://localhost:3000
npm run build && npm start
```

## Pages

| Route | Notes |
| --- | --- |
| `/` | Hero, trusted-by, services, why us, process, featured work, testimonials, CTA |
| `/about` | Intro, mission & vision, values, team, why work with us |
| `/services` · `/services/[slug]` | 6 statically generated service pages with FAQs |
| `/portfolio` · `/portfolio/[slug]` | Filterable gallery (`?category=`) + case study pages |
| `/contact` | Validated form (server action), `?service=<slug>` preselects a service |
| `/privacy` · `/terms` | Legal templates — have them reviewed |
| `not-found` | Custom 404 |
| `sitemap.xml` · `robots.txt` · `opengraph-image` | Generated SEO assets |

## Structure

```
src/
  app/                 routes, metadata, sitemap, robots, OG image, contact server action
  components/
    layout/            Navbar (dropdown + mobile menu), Footer, Logo, MotionProvider
    ui/                Button, Container/Section, Badge, Reveal, SectionHeading, Accordion, SocialIcons, JsonLd
    cards/             ServiceCard, ProjectCard
    sections/home/     one file per homepage section
    sections/shared/   PageHero, CTASection, ProcessTimeline, LegalPage
    portfolio/         PortfolioGallery (client filter)
    contact/           ContactForm
  data/                site config, services, portfolio, process, people (team/testimonials/stats)
  lib/                 utils, seo (buildMetadata), contact validation
  types/               shared interfaces
scripts/generate-placeholders.mjs   regenerates portfolio placeholder SVGs
```

Design tokens (colors, fonts, shadows, animations) live in the `@theme` block of `src/app/globals.css`.

## Before launch — replace placeholders

All placeholder content is clearly labelled in the UI and in code comments:

- **`src/data/site.ts`** — company name, domain, email, phone, address, social URLs (`#` links).
- **`src/data/people.ts`** — team members, testimonials (set `testimonialsAreSamples = false`), company stats (`—`).
- **`src/data/portfolio.ts`** — real case studies, images in `public/images/portfolio/`, and *verified* results.
- **`src/components/sections/home/TrustedBy.tsx`** — real client logos (with permission).
- **Legal pages** — review with a legal professional.

## Contact form

Copy `.env.example` to `.env.local` and set `RESEND_API_KEY`, `CONTACT_TO_EMAIL`, `CONTACT_FROM_EMAIL`.
Without them the form still validates, but tells the visitor honestly that the message was **not** sent and shows the email address instead.

## Accessibility & motion

Skip link, semantic landmarks, one `h1` per page, labelled controls, `aria-expanded` menus, keyboard-operable dropdown/accordion,
visible focus rings. Framer Motion respects `prefers-reduced-motion` via `MotionConfig reducedMotion="user"`, and CSS animations are disabled under the same preference.
