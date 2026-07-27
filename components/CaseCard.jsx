import Link from "next/link";
import Reveal from "@/components/Reveal";
import BrandLogo from "@/components/BrandLogo";
import { CaseArt, catOf } from "@/components/CaseVisuals";

// Case-study card as a colorful "postcard": a brand-gradient band carrying the
// client's logo up top, metrics and story below. Flagship studies define their
// own brand colors; library entries fall back to their category palette.
export default function CaseCard({ c, delay = 0 }) {
  const { from, to } = c.brand || catOf(c.category);

  return (
    <Reveal
      id={c.id}
      delay={delay}
      className="group ring-gradient relative flex h-full scroll-mt-28 flex-col overflow-hidden rounded-3xl bg-ink-soft/70 transition-colors hover:bg-ink-panel"
    >
      {/* postcard band */}
      <div
        className="relative h-28 flex-none overflow-hidden p-5"
        style={{ backgroundImage: `linear-gradient(120deg, ${from}, ${to})` }}
      >
        {/* texture: fine diagonal lines + soft corner glow */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.18]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(135deg, rgba(255,255,255,0.55) 0 1px, transparent 1px 10px)",
          }}
        />
        <div className="pointer-events-none absolute -right-8 -top-10 h-32 w-32 rounded-full bg-white/25 blur-2xl" />
        <div className="relative z-10 flex h-full flex-col justify-between">
          <BrandLogo c={c} className="text-white drop-shadow-sm" />
          <span className="w-fit rounded-full bg-black/25 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-white backdrop-blur">
            {c.category}
          </span>
        </div>
      </div>

      {/* body */}
      <div className="relative flex flex-1 flex-col p-7">
        <CaseArt
          category={c.category}
          uid={c.id}
          className="pointer-events-none absolute -right-5 bottom-3 h-36 w-36 opacity-[0.13] transition-opacity duration-500 group-hover:opacity-25"
        />
        <div className="relative z-10 flex h-full flex-col">
          <p className="font-display text-4xl font-semibold tracking-tightest text-gradient">
            {c.metric}
          </p>
          <p className="mt-1 text-sm text-ink2">{c.metricLabel}</p>
          <h3 className="mt-5 font-display text-base font-semibold leading-snug text-white">
            {c.headline}
          </h3>
          {c.summary && (
            <p className="mt-3 flex-1 text-sm leading-relaxed text-ink2">{c.summary}</p>
          )}

          <Link
            href={`/case-studies/${c.id}`}
            className="mt-6 inline-flex w-fit items-center gap-1.5 text-sm font-semibold text-white/70 transition-colors group-hover:text-spark"
          >
            Read the story
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>
      </div>
    </Reveal>
  );
}
