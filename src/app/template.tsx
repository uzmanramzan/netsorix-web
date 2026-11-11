"use client";

import { motion } from "framer-motion";
import { useEffect } from "react";

// The first page load renders immediately (better LCP); later client-side
// navigations get a short fade + lift.
let hasNavigated = false;

export default function Template({ children }: { children: React.ReactNode }) {
  const animateIn = hasNavigated;
  useEffect(() => {
    hasNavigated = true;
  }, []);

  return (
    <motion.div
      initial={animateIn ? { opacity: 0, y: 12 } : false}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease: [0.21, 0.47, 0.32, 0.98] }}
    >
      {children}
    </motion.div>
  );
}
