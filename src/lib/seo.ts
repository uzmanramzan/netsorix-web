import type { Metadata } from "next";
import { siteConfig } from "@/data/site";

interface PageMetaInput {
  title: string;
  description: string;
  path: string;
  /** Override the default OG image (absolute path or URL). */
  image?: string;
}

/** Builds consistent page metadata including canonical URL, Open Graph and Twitter cards. */
export function buildMetadata({ title, description, path, image }: PageMetaInput): Metadata {
  // Page-level `openGraph` replaces the inherited object, so re-attach the default share image.
  const images = [
    image
      ? { url: image }
      : { url: "/opengraph-image", width: 1200, height: 630, alt: `${siteConfig.name} — Digital agency for web, marketing & design` },
  ];
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title: `${title} | ${siteConfig.name}`,
      description,
      url: path,
      siteName: siteConfig.name,
      type: "website",
      images,
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${siteConfig.name}`,
      description,
      images,
    },
  };
}
