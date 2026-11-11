import type { SVGProps } from "react";
import { siteConfig, type SocialIconName } from "@/data/site";
import { cn } from "@/lib/utils";

const paths: Record<SocialIconName, string> = {
  linkedin:
    "M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9.75h4v11H3v-11Zm6.5 0h3.83v1.5h.06c.53-1 1.84-2.06 3.79-2.06 4.05 0 4.8 2.67 4.8 6.13v5.43h-4v-4.81c0-1.15-.02-2.62-1.6-2.62-1.6 0-1.84 1.25-1.84 2.54v4.89h-4v-11Z",
  instagram:
    "M12 7.2a4.8 4.8 0 1 0 0 9.6 4.8 4.8 0 0 0 0-9.6Zm0 7.9a3.1 3.1 0 1 1 0-6.2 3.1 3.1 0 0 1 0 6.2Zm6.1-8.1a1.1 1.1 0 1 1-2.2 0 1.1 1.1 0 0 1 2.2 0ZM12 3.6c2.7 0 3 0 4.1.06 2.8.13 4.1 1.45 4.24 4.24.05 1.06.06 1.38.06 4.1s0 3.04-.06 4.1c-.13 2.78-1.43 4.11-4.24 4.24-1.06.05-1.38.06-4.1.06s-3.04 0-4.1-.06c-2.81-.13-4.11-1.46-4.24-4.24C3.6 15.04 3.6 14.72 3.6 12s0-3.04.06-4.1C3.79 5.11 5.1 3.79 7.9 3.66 8.96 3.61 9.28 3.6 12 3.6Z",
  x: "M17.53 3H20.6l-6.7 7.66L21.8 21h-6.18l-4.84-6.33L5.24 21H2.17l7.17-8.2L1.8 3h6.33l4.37 5.78L17.53 3Zm-1.08 16.17h1.7L7.18 4.73H5.36l11.09 14.44Z",
  dribbble:
    "M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm6.6 4.6a8.5 8.5 0 0 1 1.9 5.2c-2.5-.5-4.8-.5-6.9-.1-.2-.5-.4-1-.6-1.4 2.3-1 4.3-2.2 5.6-3.7Zm-1.1-1.2c-1.2 1.4-3 2.5-5.1 3.4a43 43 0 0 0-3.6-5.6 8.5 8.5 0 0 1 8.7 2.2ZM7.1 4.1a42 42 0 0 1 3.7 5.5 33 33 0 0 1-7.2 1A8.5 8.5 0 0 1 7.1 4.1ZM3.5 12.1c2.8 0 5.5-.4 8-1.1l.6 1.3c-3 1-5.5 3-7.1 5.6a8.5 8.5 0 0 1-1.5-5.8Zm2.7 6.8c1.4-2.4 3.7-4.2 6.5-5.1.8 2.1 1.4 4.4 1.8 6.9a8.5 8.5 0 0 1-8.3-1.8Zm9.8.9c-.4-2.3-1-4.4-1.7-6.4 1.9-.3 4-.2 6.1.2a8.5 8.5 0 0 1-4.4 6.2Z",
  github:
    "M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.45-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.08 2.91.83.09-.65.35-1.08.63-1.33-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.98 1.03-2.68-.1-.26-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02a9.5 9.5 0 0 1 5 0c1.91-1.3 2.75-1.02 2.75-1.02.55 1.37.2 2.38.1 2.64.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85v2.75c0 .27.18.58.69.48A10 10 0 0 0 12 2Z",
};

export function SocialIcon({ name, ...props }: { name: SocialIconName } & SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d={paths[name]} />
    </svg>
  );
}

export function SocialLinks({ className }: { className?: string }) {
  return (
    <ul className={cn("flex flex-wrap items-center gap-2.5", className)}>
      {siteConfig.socials.map((s) => (
        <li key={s.label}>
          <a
            href={s.href}
            aria-label={`${siteConfig.name} on ${s.label}`}
            {...(s.href.startsWith("http") && { target: "_blank", rel: "noopener noreferrer" })}
            className="glass grid size-10 place-items-center rounded-full text-fg-muted transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-blue/50 hover:text-fg"
          >
            <SocialIcon name={s.icon} className="size-4" />
          </a>
        </li>
      ))}
    </ul>
  );
}
