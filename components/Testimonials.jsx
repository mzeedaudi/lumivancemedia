import Reveal from "@/components/Reveal";
import { testimonials } from "@/lib/site";

export default function Testimonials() {
  return (
    <div className="grid gap-5 lg:grid-cols-3">
      {testimonials.map((t, i) => (
        <Reveal
          key={t.name}
          delay={i * 100}
          className="flex h-full flex-col rounded-3xl border border-line bg-ink-soft/60 p-7"
        >
          <svg width="34" height="34" viewBox="0 0 24 24" fill="none" aria-hidden="true" className="text-brand-violet/70">
            <path d="M10 11H6a1 1 0 0 1-1-1V8a3 3 0 0 1 3-3M19 11h-4a1 1 0 0 1-1-1V8a3 3 0 0 1 3-3M6 11v3a3 3 0 0 0 3 3M15 11v3a3 3 0 0 0 3 3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <p className="mt-5 flex-1 text-[0.95rem] leading-relaxed text-white/90">
            “{t.quote}”
          </p>
          <div className="mt-7 flex items-center gap-3 border-t border-line pt-5">
            <span className="grid h-10 w-10 place-items-center rounded-full bg-gradient-to-br from-brand-indigo to-brand-fuchsia text-sm font-semibold text-white">
              {t.name.split(" ").map((n) => n[0]).join("")}
            </span>
            <div>
              <p className="text-sm font-semibold text-white">{t.name}</p>
              <p className="text-xs text-ink2">{t.role}</p>
            </div>
          </div>
        </Reveal>
      ))}
    </div>
  );
}
