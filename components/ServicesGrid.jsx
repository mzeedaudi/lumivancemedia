import Reveal from "@/components/Reveal";
import { services } from "@/lib/site";

const icons = {
  "paid-acquisition": (
    <path d="M3 17l5-5 4 4 8-9M16 5h5v5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  ),
  "aso-seo": (
    <>
      <circle cx="11" cy="11" r="6.5" stroke="currentColor" strokeWidth="1.8" />
      <path d="M20 20l-3.5-3.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </>
  ),
  lifecycle: (
    <path d="M4 12a8 8 0 1 1 2.3 5.6M4 18v-3h3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  ),
  creative: (
    <>
      <path d="M12 3l2.2 5.6L20 9.7l-4 4.2.9 6.1L12 17l-4.9 3 .9-6.1-4-4.2 5.8-1.1z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
    </>
  ),
  analytics: (
    <path d="M4 20V10M10 20V4M16 20v-7M22 20H2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  ),
  strategy: (
    <>
      <circle cx="12" cy="12" r="8.5" stroke="currentColor" strokeWidth="1.6" />
      <path d="M12 12l4-4M12 12v4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </>
  ),
};

export default function ServicesGrid() {
  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {services.map((s, i) => (
        <Reveal
          key={s.id}
          id={s.id}
          delay={(i % 3) * 90}
          className="group relative scroll-mt-28"
        >
          <div className="ring-gradient h-full rounded-3xl bg-ink-soft/70 p-7 transition-colors duration-300 hover:bg-ink-panel">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-line bg-white/[0.03] text-brand-fuchsia transition-colors group-hover:text-spark">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                {icons[s.id]}
              </svg>
            </div>
            <h3 className="mt-6 font-display text-xl font-semibold tracking-tight text-white">
              {s.title}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-ink2">{s.blurb}</p>
            <ul className="mt-6 space-y-2.5">
              {s.points.map((p) => (
                <li key={p} className="flex items-center gap-2.5 text-sm text-white/80">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true" className="flex-none text-brand-violet">
                    <path d="M5 12l4 4L19 7" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  {p}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      ))}
    </div>
  );
}
