"use client";

import { motion, useReducedMotion } from "framer-motion";
import { BarChart3, Code2, Sparkles, TrendingUp } from "lucide-react";

const ease = [0.21, 0.47, 0.32, 0.98] as const;

/**
 * Abstract, animated "digital composition": a glowing orb with orbit rings
 * and floating glass panels that hint at code, design, and growth.
 * Decorative only — hidden from assistive technology.
 */
export function HeroVisual() {
  const reduce = useReducedMotion();
  const float = (d: number, dist = 12) =>
    reduce ? {} : { y: [0, -dist, 0], transition: { duration: d, repeat: Infinity, ease: "easeInOut" as const } };

  return (
    <div aria-hidden="true" className="relative mx-auto aspect-square w-full max-w-[560px] select-none">
      {/* ambient glow */}
      <div className="absolute inset-[12%] rounded-full bg-gradient-to-br from-brand-blue/40 via-indigo-500/30 to-brand-violet/40 blur-[80px]" />

      {/* orbit rings */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease }}
        className="absolute inset-0"
      >
        <div className="absolute inset-[6%] rounded-full border border-white/[0.07]" />
        <div className="absolute inset-[18%] animate-spin-slow rounded-full border border-dashed border-brand-sky/20" />
        <div className="absolute inset-[30%] rounded-full border border-white/[0.06]" />
        <div className="absolute inset-[6%] animate-spin-slow [animation-direction:reverse] [animation-duration:40s]">
          <span className="absolute left-1/2 top-0 size-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-cyan shadow-[0_0_18px_4px_rgb(34_211_238/0.7)]" />
        </div>
        <div className="absolute inset-[18%] animate-spin-slow [animation-duration:22s]">
          <span className="absolute bottom-0 left-1/2 size-2 -translate-x-1/2 translate-y-1/2 rounded-full bg-brand-violet shadow-[0_0_16px_4px_rgb(139_92_246/0.7)]" />
        </div>
      </motion.div>

      {/* core orb */}
      <motion.div
        initial={{ opacity: 0, scale: 0.6 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.1, delay: 0.2, ease }}
        className="absolute inset-[34%]"
      >
        <motion.div animate={float(8, 10)} className="relative size-full">
          <div className="absolute inset-0 rounded-full bg-[conic-gradient(from_200deg,#3b82f6,#22d3ee,#8b5cf6,#c026d3,#3b82f6)] opacity-90 blur-[2px]" />
          <div className="absolute inset-[3px] rounded-full bg-[radial-gradient(circle_at_30%_25%,rgba(255,255,255,0.55),rgba(59,130,246,0.25)_35%,rgba(5,7,15,0.95)_75%)]" />
          <div className="absolute inset-0 rounded-full shadow-[inset_0_0_40px_rgba(255,255,255,0.15),0_0_80px_10px_rgba(99,102,241,0.35)]" />
        </motion.div>
      </motion.div>

      {/* floating panels */}
      <motion.div
        initial={{ opacity: 0, x: -30, y: 10 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ duration: 0.9, delay: 0.55, ease }}
        className="absolute left-[-2%] top-[14%] w-[46%] sm:left-[0%]"
      >
        <motion.div animate={float(7)} className="glass rounded-2xl p-4 shadow-card">
          <div className="flex items-center gap-2 text-[0.7rem] text-fg-muted">
            <Code2 className="size-3.5 text-brand-sky" />
            <span>app/page.tsx</span>
          </div>
          <div className="mt-3 space-y-1.5 font-mono text-[0.62rem] leading-relaxed sm:text-[0.68rem]">
            <p><span className="text-brand-violet">export default</span> <span className="text-brand-sky">function</span> <span className="text-fg">Home</span>()</p>
            <p className="pl-3 text-fg-subtle">{"return <Experience fast seo />"}</p>
          </div>
          <div className="mt-3 flex gap-1.5">
            <span className="h-1.5 w-10 rounded-full bg-brand-blue/70" />
            <span className="h-1.5 w-6 rounded-full bg-brand-violet/60" />
            <span className="h-1.5 w-14 rounded-full bg-white/10" />
          </div>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 30, y: -10 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ duration: 0.9, delay: 0.7, ease }}
        className="absolute right-[-2%] top-[30%] w-[42%] sm:right-[0%]"
      >
        <motion.div animate={float(9, 16)} className="glass rounded-2xl p-4 shadow-card">
          <div className="flex items-center justify-between text-[0.7rem] text-fg-muted">
            <span className="flex items-center gap-1.5"><BarChart3 className="size-3.5 text-brand-cyan" />Growth</span>
            <TrendingUp className="size-3.5 text-success" />
          </div>
          <div className="mt-3 flex h-16 items-end gap-1.5">
            {[35, 50, 42, 65, 58, 80, 95].map((h, i) => (
              <motion.span
                key={i}
                initial={{ height: 0 }}
                animate={{ height: `${h}%` }}
                transition={{ duration: 0.8, delay: 0.9 + i * 0.07, ease }}
                className="flex-1 rounded-t-md bg-gradient-to-t from-brand-blue/40 to-brand-cyan"
              />
            ))}
          </div>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.85, ease }}
        className="absolute bottom-[8%] left-[14%] w-[52%]"
      >
        <motion.div animate={float(8.5, 10)} className="glass flex items-center gap-3 rounded-2xl p-3.5 shadow-card">
          <span className="grid size-9 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-brand-violet to-brand-fuchsia">
            <Sparkles className="size-4 text-white" />
          </span>
          <div className="min-w-0 flex-1">
            <p className="text-[0.72rem] font-medium text-fg">Design system ready</p>
            <div className="mt-1.5 flex gap-1">
              {["#3b82f6", "#22d3ee", "#8b5cf6", "#c026d3", "#f4f6fc"].map((c) => (
                <span key={c} className="size-3 rounded-full ring-1 ring-white/20" style={{ background: c }} />
              ))}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
