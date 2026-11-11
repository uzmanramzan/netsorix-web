"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, Menu, X, ArrowUpRight } from "lucide-react";
import { mainNav } from "@/data/site";
import { services } from "@/data/services";
import { Logo } from "./Logo";
import { ButtonLink } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

function isActive(pathname: string, href: string) {
  return href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(`${href}/`);
}

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const dropdownRef = useRef<HTMLLIElement>(null);
  const dropdownId = useId();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll while the mobile menu is open; close on Escape.
  useEffect(() => {
    if (!mobileOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setMobileOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [mobileOpen]);

  // Close the services dropdown on outside click / Escape.
  useEffect(() => {
    if (!servicesOpen) return;
    const onClick = (e: MouseEvent) => {
      if (!dropdownRef.current?.contains(e.target as Node)) setServicesOpen(false);
    };
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setServicesOpen(false);
    document.addEventListener("mousedown", onClick);
    window.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onClick);
      window.removeEventListener("keydown", onKey);
    };
  }, [servicesOpen]);

  const closeAll = () => {
    setMobileOpen(false);
    setServicesOpen(false);
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-brand-blue focus:px-4 focus:py-2 focus:text-sm focus:text-white"
      >
        Skip to content
      </a>
      <div
        className={cn(
          "transition-all duration-500",
          scrolled ? "border-b border-line bg-ink-950/70 backdrop-blur-xl" : "border-b border-transparent bg-transparent",
        )}
      >
        <nav aria-label="Main" className="mx-auto flex h-18 max-w-7xl items-center justify-between px-5 sm:px-8">
          <Logo onClick={closeAll} />

          <ul className="hidden items-center gap-1 lg:flex">
            {mainNav.map((item) =>
              item.href === "/services" ? (
                <li
                  key={item.href}
                  ref={dropdownRef}
                  className="relative"
                  onMouseEnter={() => setServicesOpen(true)}
                  onMouseLeave={() => setServicesOpen(false)}
                >
                  <div className="flex items-center">
                    <Link
                      href={item.href}
                      onClick={closeAll}
                      className={cn(
                        "rounded-full py-2 pl-4 pr-1 text-sm transition-colors",
                        isActive(pathname, item.href) ? "text-fg" : "text-fg-muted hover:text-fg",
                      )}
                    >
                      {item.label}
                    </Link>
                    <button
                      type="button"
                      aria-expanded={servicesOpen}
                      aria-controls={dropdownId}
                      aria-label="Show services menu"
                      onClick={() => setServicesOpen((v) => !v)}
                      className="rounded-full p-1.5 pr-3 text-fg-muted transition-colors hover:text-fg"
                    >
                      <ChevronDown className={cn("size-4 transition-transform duration-300", servicesOpen && "rotate-180")} aria-hidden="true" />
                    </button>
                  </div>

                  <AnimatePresence>
                    {servicesOpen && (
                      <motion.div
                        id={dropdownId}
                        initial={{ opacity: 0, y: 8, scale: 0.98 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 8, scale: 0.98 }}
                        transition={{ duration: 0.2 }}
                        className="absolute left-1/2 top-full w-[640px] -translate-x-1/2 pt-3"
                      >
                        <div className="rounded-3xl border border-line bg-ink-900/95 p-3 shadow-card backdrop-blur-xl">
                          <ul className="grid grid-cols-2 gap-1">
                            {services.map((s) => (
                              <li key={s.slug}>
                                <Link
                                  href={`/services/${s.slug}`}
                                  onClick={closeAll}
                                  className="group flex gap-3.5 rounded-2xl p-3.5 transition-colors hover:bg-white/[0.04]"
                                >
                                  <span className={cn("grid size-10 shrink-0 place-items-center rounded-xl bg-gradient-to-br text-white", s.accent)}>
                                    <s.icon className="size-5" aria-hidden="true" />
                                  </span>
                                  <span>
                                    <span className="block text-sm font-medium text-fg">{s.shortTitle}</span>
                                    <span className="mt-0.5 block text-xs leading-relaxed text-fg-subtle">{s.tagline}</span>
                                  </span>
                                </Link>
                              </li>
                            ))}
                          </ul>
                          <Link
                            href="/services"
                            onClick={closeAll}
                            className="mt-2 flex items-center justify-between rounded-2xl bg-white/[0.03] px-4 py-3 text-sm text-fg-muted transition-colors hover:text-fg"
                          >
                            View all services
                            <ArrowUpRight className="size-4" aria-hidden="true" />
                          </Link>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </li>
              ) : (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={closeAll}
                    aria-current={isActive(pathname, item.href) ? "page" : undefined}
                    className={cn(
                      "relative rounded-full px-4 py-2 text-sm transition-colors",
                      isActive(pathname, item.href) ? "text-fg" : "text-fg-muted hover:text-fg",
                    )}
                  >
                    {item.label}
                    {isActive(pathname, item.href) && (
                      <motion.span layoutId="nav-active" className="absolute inset-x-4 -bottom-0.5 h-px bg-gradient-to-r from-brand-cyan to-brand-violet" />
                    )}
                  </Link>
                </li>
              ),
            )}
          </ul>

          <div className="flex items-center gap-3">
            <ButtonLink href="/contact" arrow className="hidden sm:inline-flex">
              Let&apos;s Talk
            </ButtonLink>
            <button
              type="button"
              onClick={() => setMobileOpen((v) => !v)}
              aria-expanded={mobileOpen}
              aria-controls="mobile-menu"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              className="glass grid size-11 place-items-center rounded-full text-fg lg:hidden"
            >
              {mobileOpen ? <X className="size-5" aria-hidden="true" /> : <Menu className="size-5" aria-hidden="true" />}
            </button>
          </div>
        </nav>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-x-0 bottom-0 top-18 overflow-y-auto border-t border-line bg-ink-950/98 backdrop-blur-xl lg:hidden"
          >
            <motion.ul
              initial="hidden"
              animate="show"
              variants={{ show: { transition: { staggerChildren: 0.05 } } }}
              className="flex flex-col gap-1 px-5 py-6"
            >
              {mainNav.map((item) => (
                <motion.li key={item.href} variants={{ hidden: { opacity: 0, x: -12 }, show: { opacity: 1, x: 0 } }}>
                  <Link
                    href={item.href}
                    onClick={closeAll}
                    aria-current={isActive(pathname, item.href) ? "page" : undefined}
                    className={cn(
                      "block rounded-2xl px-4 py-3.5 font-display text-2xl font-medium",
                      isActive(pathname, item.href) ? "bg-white/[0.04] text-fg" : "text-fg-muted",
                    )}
                  >
                    {item.label}
                  </Link>
                  {item.href === "/services" && (
                    <ul className="mb-2 ml-4 grid gap-0.5 border-l border-line pl-4">
                      {services.map((s) => (
                        <li key={s.slug}>
                          <Link href={`/services/${s.slug}`} onClick={closeAll} className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-fg-muted hover:text-fg">
                            <s.icon className="size-4 text-brand-sky" aria-hidden="true" />
                            {s.shortTitle}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </motion.li>
              ))}
              <motion.li variants={{ hidden: { opacity: 0, x: -12 }, show: { opacity: 1, x: 0 } }} className="mt-4">
                <ButtonLink href="/contact" arrow size="lg" onClick={closeAll} className="w-full">
                  Let&apos;s Talk
                </ButtonLink>
              </motion.li>
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
