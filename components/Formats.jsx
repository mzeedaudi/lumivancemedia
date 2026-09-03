"use client";

import { useEffect, useRef } from "react";
import Reveal from "@/components/Reveal";
import { formats } from "@/lib/site";

// "One film, every placement." The same spot cropped live into each aspect
// ratio the retainer delivers. Videos are preload=none and only play while on
// screen, so four instances cost almost nothing until you scroll here.
function Frame({ f, delay }) {
  const ref = useRef(null);

  useEffect(() => {
    const v = ref.current;
    if (!v) return;
    v.muted = true;
    v.defaultMuted = true;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced || !("IntersectionObserver" in window)) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) v.play().catch(() => {});
        else v.pause();
      },
      { threshold: 0.3 }
    );
    io.observe(v);
    return () => io.disconnect();
  }, []);

  return (
    <Reveal delay={delay} className="flex flex-col gap-3">
      <div
        className="ring-gradient relative w-full overflow-hidden rounded-2xl bg-black shadow-card"
        style={{ aspectRatio: f.ratio }}
      >
        <video
          ref={ref}
          src="/video/hero.mp4"
          muted
          loop
          playsInline
          preload="none"
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <span className="absolute left-3 top-3 rounded-full bg-ink/60 px-2.5 py-1 font-mono text-[0.65rem] font-semibold text-bone backdrop-blur">
          {f.label}
        </span>
      </div>
      <p className="text-xs text-sand">{f.use}</p>
    </Reveal>
  );
}

export default function Formats() {
  return (
    <div className="grid grid-cols-2 items-end gap-4 sm:gap-5 lg:grid-cols-[1.9fr_0.72fr_1fr_0.86fr]">
      {formats.map((f, i) => (
        <Frame key={f.id} f={f} delay={i * 90} />
      ))}
    </div>
  );
}
