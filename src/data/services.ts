import { Code2, Megaphone, Share2, Search, PenTool, Palette } from "lucide-react";
import type { Service } from "@/types";

export const services: Service[] = [
  {
    slug: "website-development",
    title: "Website Development",
    shortTitle: "Web Development",
    icon: Code2,
    tagline: "Fast, scalable websites engineered to convert.",
    description:
      "High-performance websites and web applications built with modern frameworks — designed to load fast, rank well, and turn visitors into customers.",
    overview:
      "Your website is often the first conversation a customer has with your business. We engineer sites and web applications that are fast, accessible, secure, and easy for your team to manage — using modern stacks like Next.js and React so your platform can grow with you instead of holding you back.",
    capabilities: [
      "Business websites",
      "Custom web applications",
      "E-commerce development",
      "Landing pages",
      "Next.js and React development",
    ],
    problems: [
      { title: "Slow, outdated websites", description: "Heavy pages and legacy code that frustrate visitors and hurt search rankings." },
      { title: "Low conversion rates", description: "Traffic arrives, but unclear structure and weak calls to action let it leave." },
      { title: "Hard-to-update content", description: "Every small change needs a developer, slowing your marketing team down." },
      { title: "Platforms that can't scale", description: "Templates and plugins that break as your product, traffic, or catalog grows." },
    ],
    offerings: [
      { title: "Business & corporate websites", description: "Multi-page marketing sites with clear messaging, strong structure, and CMS integration." },
      { title: "Custom web applications", description: "Dashboards, portals, and SaaS products with secure authentication and clean APIs." },
      { title: "E-commerce stores", description: "Headless or platform-based stores optimised for speed, discovery, and checkout." },
      { title: "High-converting landing pages", description: "Campaign pages built for a single goal, ready for A/B testing and analytics." },
      { title: "Next.js & React engineering", description: "Server-rendered, SEO-friendly front ends with modern performance best practices." },
      { title: "Maintenance & support", description: "Monitoring, updates, security patches, and continuous improvements after launch." },
    ],
    process: [
      { title: "Discovery & scoping", description: "We map goals, users, content, and technical requirements into a clear project plan." },
      { title: "Architecture & design", description: "Information architecture, wireframes, and UI design approved before a line of code." },
      { title: "Development & QA", description: "Iterative builds with staging previews, automated checks, and cross-device testing." },
      { title: "Launch & optimisation", description: "Smooth go-live, analytics setup, and ongoing performance tuning." },
    ],
    benefits: [
      { title: "Performance-first builds", description: "Optimised Core Web Vitals for better user experience and search visibility." },
      { title: "Built to scale", description: "Modular, documented code that your team or ours can extend confidently." },
      { title: "Easy content editing", description: "Headless CMS options so marketing can publish without waiting on developers." },
      { title: "Accessible by default", description: "Semantic HTML and WCAG-minded patterns that serve every visitor." },
    ],
    faqs: [
      { question: "How long does a website project take?", answer: "Timelines depend on scope. A focused landing page can take a couple of weeks, while a multi-page website or custom application typically runs several weeks to a few months. We confirm a timeline after discovery." },
      { question: "Which technologies do you use?", answer: "We primarily build with Next.js, React, and TypeScript, paired with a headless CMS or e-commerce platform that suits your needs. We'll recommend the right stack for your goals rather than forcing a one-size-fits-all solution." },
      { question: "Will I be able to update the website myself?", answer: "Yes. We set up a content management system and walk your team through it, so routine updates don't require a developer." },
      { question: "Do you offer support after launch?", answer: "Yes. We offer maintenance plans covering updates, monitoring, backups, and ongoing improvements." },
    ],
    accent: "from-blue-500 to-cyan-400",
  },
  {
    slug: "digital-marketing",
    title: "Digital Marketing",
    shortTitle: "Digital Marketing",
    icon: Megaphone,
    tagline: "Data-driven campaigns that bring in qualified leads.",
    description:
      "Full-funnel marketing strategies and paid campaigns that put your brand in front of the right audience — and measure what actually drives revenue.",
    overview:
      "Effective marketing isn't about being everywhere — it's about being in the right place with the right message. We build data-informed strategies across search, paid media, and automation, then optimise continuously so every budget decision is backed by evidence.",
    capabilities: [
      "Digital marketing strategy",
      "Paid advertising campaigns",
      "Google Ads",
      "Lead generation",
      "Marketing automation",
    ],
    problems: [
      { title: "Wasted ad spend", description: "Campaigns that generate clicks but not customers, with no clear view of ROI." },
      { title: "Inconsistent lead flow", description: "Unpredictable pipelines that make planning and hiring difficult." },
      { title: "Disconnected channels", description: "Search, social, and email running in silos without a shared strategy." },
      { title: "Unclear reporting", description: "Vanity metrics instead of insight into what's working and why." },
    ],
    offerings: [
      { title: "Marketing strategy", description: "Audience research, positioning, channel planning, and measurable objectives." },
      { title: "Google Ads management", description: "Search, Performance Max, and display campaigns with disciplined bid and budget control." },
      { title: "Paid media campaigns", description: "Multi-platform paid campaigns built around clear funnel stages." },
      { title: "Lead generation funnels", description: "Offers, landing pages, and forms designed to capture and qualify demand." },
      { title: "Marketing automation", description: "Email journeys, CRM workflows, and nurture sequences that work while you sleep." },
      { title: "Analytics & reporting", description: "Conversion tracking and dashboards that connect activity to outcomes." },
    ],
    process: [
      { title: "Audit & research", description: "We review your current channels, tracking, competitors, and audience." },
      { title: "Strategy & planning", description: "A prioritised channel plan with budgets, KPIs, and creative direction." },
      { title: "Launch & manage", description: "Campaigns go live with tight tracking and regular optimisation cycles." },
      { title: "Measure & scale", description: "Transparent reporting and scaling of what performs, cutting what doesn't." },
    ],
    benefits: [
      { title: "Budget accountability", description: "Every spend decision tied to tracked conversions and business goals." },
      { title: "Qualified pipeline", description: "Targeting and messaging focused on leads that fit your ideal customer." },
      { title: "Clear reporting", description: "Plain-language reports that show progress, insight, and next steps." },
      { title: "Continuous testing", description: "Structured experiments on audiences, creatives, and landing pages." },
    ],
    faqs: [
      { question: "What budget do I need for paid advertising?", answer: "It depends on your industry, goals, and competition. We'll recommend a starting budget during strategy and scale it based on performance data." },
      { question: "How soon will I see results?", answer: "Paid campaigns can start generating traffic quickly, but meaningful optimisation usually takes a few weeks of data. We set realistic expectations up front." },
      { question: "Do you work with my existing tools?", answer: "Yes. We integrate with common CRMs, analytics, and email platforms, and recommend changes only where they add value." },
      { question: "Will I own my ad accounts and data?", answer: "Always. Accounts are set up under your business ownership, and you retain full access to data and assets." },
    ],
    accent: "from-violet-500 to-fuchsia-500",
  },
  {
    slug: "social-media-marketing",
    title: "Social Media Marketing",
    shortTitle: "Social Media",
    icon: Share2,
    tagline: "Content and community that build real engagement.",
    description:
      "Strategic social media management, creative content, and paid social campaigns that grow an engaged community around your brand.",
    overview:
      "Social media is where audiences discover, evaluate, and talk about brands. We plan content that reflects your voice, design creatives that stop the scroll, and manage communities and paid social so your presence builds trust and drives action.",
    capabilities: [
      "Social media management",
      "Content strategy",
      "Social media creatives",
      "Audience engagement",
      "Paid social campaigns",
    ],
    problems: [
      { title: "Inconsistent posting", description: "Sporadic content that fails to build momentum or brand recognition." },
      { title: "Low engagement", description: "Posts that don't resonate with the audience you actually want to reach." },
      { title: "Off-brand creatives", description: "Visuals that look different on every channel and dilute your identity." },
      { title: "No link to business goals", description: "Followers grow, but website traffic, leads, and sales don't." },
    ],
    offerings: [
      { title: "Social media management", description: "Planning, scheduling, publishing, and day-to-day channel management." },
      { title: "Content strategy", description: "Content pillars, formats, and calendars mapped to your audience and goals." },
      { title: "Creative production", description: "On-brand graphics, carousels, short-form video concepts, and copy." },
      { title: "Community engagement", description: "Responding to comments and messages to nurture relationships." },
      { title: "Paid social campaigns", description: "Targeted campaigns on major platforms for awareness, traffic, and leads." },
      { title: "Performance insights", description: "Monthly reporting on reach, engagement, and conversions." },
    ],
    process: [
      { title: "Brand & audience review", description: "We study your audience, competitors, and current social presence." },
      { title: "Content planning", description: "Pillars, formats, and a calendar that balances value and promotion." },
      { title: "Create & publish", description: "Creatives produced, approved, and published on a consistent schedule." },
      { title: "Engage & refine", description: "Community management and data-led refinements every cycle." },
    ],
    benefits: [
      { title: "Consistent brand voice", description: "A recognisable look and tone across every platform." },
      { title: "Meaningful engagement", description: "Content designed to start conversations, not just collect likes." },
      { title: "Time back for your team", description: "We handle planning and production so you can focus on the business." },
      { title: "Measurable impact", description: "Tracking that connects social activity to traffic and leads." },
    ],
    faqs: [
      { question: "Which platforms should my business be on?", answer: "That depends on where your audience spends time. We'll recommend a focused set of platforms rather than spreading your efforts too thin." },
      { question: "Do you create the content or do we?", answer: "We can handle everything end-to-end, or collaborate with your in-house team — whichever works best for you." },
      { question: "How do approvals work?", answer: "We share a content calendar in advance so you can review, comment, and approve posts before they go live." },
      { question: "Can you run paid social as well?", answer: "Yes. Organic and paid social work best together, and we can manage both under one strategy." },
    ],
    accent: "from-fuchsia-500 to-rose-400",
  },
  {
    slug: "seo",
    title: "Search Engine Optimization (SEO)",
    shortTitle: "SEO",
    icon: Search,
    tagline: "Sustainable visibility in the search results that matter.",
    description:
      "Technical, on-page, and off-page SEO that improves rankings for the searches your customers make — building long-term organic growth.",
    overview:
      "Search is where intent lives. Our SEO work combines technical foundations, keyword strategy, and high-quality content to help your site earn visibility for the queries that matter to your business — and keep it as search evolves.",
    capabilities: [
      "Technical SEO",
      "On-page SEO",
      "Off-page SEO",
      "Keyword research",
      "Content optimization",
    ],
    problems: [
      { title: "Invisible in search", description: "Your competitors appear for key searches while your site doesn't." },
      { title: "Technical issues", description: "Crawl errors, slow pages, and indexing problems holding rankings back." },
      { title: "Content without strategy", description: "Blog posts and pages that don't target real search demand." },
      { title: "Unclear progress", description: "No visibility into rankings, traffic quality, or what to fix next." },
    ],
    offerings: [
      { title: "Technical SEO audits", description: "Crawlability, indexation, site speed, structured data, and Core Web Vitals." },
      { title: "Keyword research", description: "Search demand and intent mapped to the pages that should rank." },
      { title: "On-page optimisation", description: "Titles, headings, internal links, and content improvements across key pages." },
      { title: "Content optimisation", description: "Briefs and updates that make content more helpful and more discoverable." },
      { title: "Off-page SEO", description: "Ethical digital PR and link-earning strategies that build authority." },
      { title: "Local SEO", description: "Business profile optimisation and local signals for location-based searches." },
    ],
    process: [
      { title: "Audit", description: "A full technical and content audit to establish a clear baseline." },
      { title: "Strategy", description: "Keyword mapping and a prioritised roadmap of fixes and opportunities." },
      { title: "Implement", description: "Technical fixes, on-page improvements, and content production." },
      { title: "Monitor & iterate", description: "Regular reporting and refinement as rankings and search trends shift." },
    ],
    benefits: [
      { title: "Compounding growth", description: "Organic visibility that keeps working without paying for every click." },
      { title: "Higher-intent traffic", description: "Visitors who are actively searching for what you offer." },
      { title: "Stronger foundations", description: "A technically healthy site that supports every other channel." },
      { title: "Ethical practices", description: "No shortcuts or tactics that put your domain at risk." },
    ],
    faqs: [
      { question: "How long does SEO take to work?", answer: "SEO is a long-term investment. Technical fixes can have an impact relatively quickly, but meaningful ranking improvements usually take several months depending on competition and starting point." },
      { question: "Can you guarantee first-page rankings?", answer: "No honest agency can guarantee specific rankings, because search engines control the results. We focus on proven best practices and transparent reporting on progress." },
      { question: "Do you write content?", answer: "Yes. We create SEO briefs and content, or optimise content your team produces." },
      { question: "Will SEO work for a new website?", answer: "Yes. Building SEO into a new site from the start is the most efficient approach, and we can advise during development." },
    ],
    accent: "from-cyan-400 to-emerald-400",
  },
  {
    slug: "ui-ux-design",
    title: "UI/UX Design",
    shortTitle: "UI/UX Design",
    icon: PenTool,
    tagline: "Intuitive interfaces people enjoy using.",
    description:
      "Research-led UI/UX design for websites and apps — from wireframes and prototypes to polished interfaces that make complex things feel simple.",
    overview:
      "Great design is invisible: users simply get what they came for. We combine user research, information architecture, and visual craft to design interfaces that are intuitive, accessible, and aligned with your business goals — and we validate them with real prototypes before development begins.",
    capabilities: [
      "Website design",
      "App interface design",
      "Wireframing",
      "Prototyping",
      "User experience optimization",
    ],
    problems: [
      { title: "Confusing user journeys", description: "Users can't find what they need, so they drop off before converting." },
      { title: "Inconsistent interfaces", description: "Screens that look and behave differently, eroding trust." },
      { title: "Costly rework", description: "Design issues discovered during development instead of before." },
      { title: "Accessibility gaps", description: "Interfaces that exclude users and create compliance risk." },
    ],
    offerings: [
      { title: "Website design", description: "Distinctive, conversion-focused page designs that reflect your brand." },
      { title: "App interface design", description: "Mobile and web app interfaces designed for clarity and efficiency." },
      { title: "Wireframing", description: "Low-fidelity layouts that define structure and hierarchy early." },
      { title: "Interactive prototyping", description: "Clickable prototypes to test flows with stakeholders and users." },
      { title: "UX audits & optimisation", description: "Heuristic reviews and data analysis to remove friction." },
      { title: "Design systems", description: "Reusable components and tokens that keep products consistent." },
    ],
    process: [
      { title: "Research", description: "Stakeholder interviews, user insights, and competitive review." },
      { title: "Structure", description: "User flows, information architecture, and wireframes." },
      { title: "Design", description: "High-fidelity UI with a reusable component library." },
      { title: "Validate & hand off", description: "Prototype testing, refinements, and developer-ready specs." },
    ],
    benefits: [
      { title: "Higher conversions", description: "Clear journeys that guide users to the actions that matter." },
      { title: "Faster development", description: "Developer-ready designs and systems reduce build time and rework." },
      { title: "Consistent experience", description: "A cohesive interface across every screen and device." },
      { title: "Inclusive design", description: "Accessibility considered from the first wireframe." },
    ],
    faqs: [
      { question: "What tools do you design in?", answer: "We primarily design in Figma, which makes collaboration and developer hand-off straightforward." },
      { question: "Can you redesign our existing product?", answer: "Yes. We often start with a UX audit to identify the biggest opportunities before redesigning." },
      { question: "Do you conduct user testing?", answer: "Yes. Depending on scope, we run usability tests on prototypes to validate key flows before development." },
      { question: "Can your designs be built by our developers?", answer: "Absolutely. We deliver organised files, specs, and design system documentation for any development team." },
    ],
    accent: "from-sky-400 to-indigo-500",
  },
  {
    slug: "branding-graphic-design",
    title: "Branding & Graphic Design",
    shortTitle: "Branding",
    icon: Palette,
    tagline: "Identities that make your brand unforgettable.",
    description:
      "Strategic brand identities and visual design — logos, systems, and marketing materials that communicate who you are with clarity and confidence.",
    overview:
      "A strong brand helps customers recognise, remember, and choose you. We develop identities grounded in strategy — from positioning and naming direction to logos, colour, typography, and the marketing materials that bring your brand to life everywhere it appears.",
    capabilities: [
      "Brand identity",
      "Logo design",
      "Marketing materials",
      "Visual content creation",
    ],
    problems: [
      { title: "Generic visual identity", description: "A brand that blends in with competitors instead of standing out." },
      { title: "Inconsistent materials", description: "Different colours, fonts, and styles across every touchpoint." },
      { title: "Outgrown branding", description: "An identity that no longer reflects the business you've become." },
      { title: "No brand guidelines", description: "Teams and partners guessing how the brand should look and sound." },
    ],
    offerings: [
      { title: "Brand strategy", description: "Positioning, personality, and messaging foundations." },
      { title: "Logo design", description: "Distinctive marks and logotypes built to work at every size." },
      { title: "Visual identity systems", description: "Colour, typography, iconography, and imagery direction." },
      { title: "Brand guidelines", description: "Clear documentation so your brand is applied consistently." },
      { title: "Marketing materials", description: "Brochures, presentations, signage, and print collateral." },
      { title: "Visual content creation", description: "Illustrations, social graphics, and campaign visuals." },
    ],
    process: [
      { title: "Discover", description: "Workshops to understand your business, audience, and ambitions." },
      { title: "Define", description: "Brand strategy and creative direction agreed before design." },
      { title: "Design", description: "Identity concepts, refinements, and full system development." },
      { title: "Deliver", description: "Final assets, guidelines, and rollout support." },
    ],
    benefits: [
      { title: "Instant recognition", description: "A memorable identity that sets you apart." },
      { title: "Consistency everywhere", description: "Guidelines that keep every touchpoint on-brand." },
      { title: "Premium perception", description: "Professional design that builds trust and supports pricing." },
      { title: "Ready-to-use assets", description: "Organised files for digital, print, and social use." },
    ],
    faqs: [
      { question: "How many logo concepts will I see?", answer: "We typically present a small number of distinct, strategically grounded concepts, then refine the chosen direction together. The exact number is agreed in the proposal." },
      { question: "Do I own the final brand assets?", answer: "Yes. On final payment, you receive full ownership of the delivered brand assets." },
      { question: "Can you refresh our existing brand rather than replace it?", answer: "Yes. A brand refresh can modernise your identity while keeping the equity you've already built." },
      { question: "What files will I receive?", answer: "You'll receive vector and raster formats for digital and print, plus brand guidelines documenting usage." },
    ],
    accent: "from-amber-400 to-pink-500",
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}
