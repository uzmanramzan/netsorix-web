import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Eyebrow } from "./Badge";
import { Reveal } from "./Reveal";

interface SectionHeadingProps {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  className?: string;
  as?: "h1" | "h2";
}

export function SectionHeading({ eyebrow, title, description, align = "center", className, as: Tag = "h2" }: SectionHeadingProps) {
  return (
    <Reveal
      className={cn(
        "flex flex-col gap-5",
        align === "center" ? "mx-auto max-w-3xl items-center text-center" : "max-w-2xl items-start",
        className,
      )}
    >
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      <Tag className="text-4xl font-semibold leading-[1.08] text-fg sm:text-5xl">{title}</Tag>
      {description && <p className="text-lg leading-relaxed text-fg-muted">{description}</p>}
    </Reveal>
  );
}
