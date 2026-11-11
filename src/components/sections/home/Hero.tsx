"use client";

import { motion } from "framer-motion";
import { Layers, MessagesSquare, Zap } from "lucide-react";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Badge";
import { HeroVisual } from "./HeroVisual";

const ease = [0.21, 0.47, 0.32, 0.98] as const;

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, delay, ease },
});

/** Qualitative trust indicators — no invented numbers. */
const trust = [
  { icon: Layers, label: "Strategy, design & engineering under one roof" },
  { icon: MessagesSquare, label: "Transparent, regular progress updates" },
  { icon: Zap, label: "Built on modern, high-performance stacks" },
];

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden pb-20 pt-32 sm:pb-28 sm:pt-40 lg:pt-44">
      <div aria-hidden="true" className="bg-grid absolute inset-0 -z-10" />
      <div aria-hidden="true" className="absolute -top-40 left-[-10%] -z-10 size-[620px] rounded-full bg-brand-blue/20 blur-[140px]" />
      <div aria-hidden="true" className="absolute right-[-10%] top-20 -z-10 size-[560px] rounded-full bg-brand-violet/20 blur-[140px]" />
      <div aria-hidden="true" className="noise pointer-events-none absolute inset-0 -z-10" />

      <Container>
        <div className="grid items-center gap-16 lg:grid-cols-[1.1fr_1fr] lg:gap-10">
          <div>
            <motion.div {...fadeUp(0)}>
              <Eyebrow>Digital agency · Web · Marketing · Design</Eyebrow>
            </motion.div>

            {/* Headline is the LCP element: animate position only, never hide it. */}
            <motion.h1
              initial={{ y: 20 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.8, ease }}
              className="mt-7 text-[2.9rem] font-semibold leading-[1.02] text-fg sm:text-6xl lg:text-7xl xl:text-[5.25rem]"
            >
              Transform Your Ideas Into <span className="text-gradient">Digital Success.</span>
            </motion.h1>

            <motion.p {...fadeUp(0.2)} className="mt-7 max-w-xl text-lg leading-relaxed text-fg-muted sm:text-xl">
              We build powerful digital experiences, grow brands, and help businesses reach their full potential through
              innovative technology and strategic marketing.
            </motion.p>

            <motion.div {...fadeUp(0.3)} className="mt-10 flex flex-wrap items-center gap-4">
              <ButtonLink href="/contact" size="lg" arrow>
                Let&apos;s Talk
              </ButtonLink>
              <ButtonLink href="/services" size="lg" variant="secondary">
                Explore Our Services
              </ButtonLink>
            </motion.div>

            <motion.ul {...fadeUp(0.45)} className="mt-12 grid gap-4 border-t border-line pt-8 sm:grid-cols-3">
              {trust.map(({ icon: Icon, label }) => (
                <li key={label} className="flex items-start gap-3 text-sm leading-snug text-fg-muted">
                  <span className="grid size-8 shrink-0 place-items-center rounded-lg border border-line bg-white/[0.03]">
                    <Icon className="size-4 text-brand-sky" aria-hidden="true" />
                  </span>
                  {label}
                </li>
              ))}
            </motion.ul>
          </div>

          <HeroVisual />
        </div>
      </Container>
    </section>
  );
}
