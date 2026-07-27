"use client";

import { useEffect, useRef, useState } from "react";

// Counts up to `value` when scrolled into view. Honors reduced motion.
export default function Counter({ value, prefix = "", suffix = "", decimals }) {
  const ref = useRef(null);
  const [display, setDisplay] = useState(0);
  const places =
    typeof decimals === "number"
      ? decimals
      : Number.isInteger(value)
      ? 0
      : 1;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (reduced || !("IntersectionObserver" in window)) {
      setDisplay(value);
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        if (!entries[0].isIntersecting) return;
        io.disconnect();
        const duration = 1500;
        const start = performance.now();
        const ease = (t) => 1 - Math.pow(1 - t, 3);
        const step = (now) => {
          const p = Math.min((now - start) / duration, 1);
          setDisplay(value * ease(p));
          if (p < 1) requestAnimationFrame(step);
          else setDisplay(value);
        };
        requestAnimationFrame(step);
      },
      { threshold: 0.4 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [value]);

  return (
    <span ref={ref}>
      {prefix}
      {display.toLocaleString(undefined, {
        minimumFractionDigits: places,
        maximumFractionDigits: places,
      })}
      {suffix}
    </span>
  );
}
