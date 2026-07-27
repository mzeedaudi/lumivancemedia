import Link from "next/link";
import Reveal from "@/components/Reveal";
import Counter from "@/components/Counter";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="container-x grid items-center gap-14 pb-10 pt-36 sm:pt-40 lg:grid-cols-[1.08fr_0.92fr] lg:pb-16 lg:pt-44">
        {/* Copy */}
        <div>
          <Reveal as="div" className="eyebrow">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-spark" />
            User acquisition for software & apps
          </Reveal>

          <Reveal
            as="h1"
            delay={70}
            className="mt-6 font-display text-[2.7rem] font-semibold leading-[1.02] tracking-tightest sm:text-6xl lg:text-[4.1rem]"
          >
            Turn budget into{" "}
            <span className="text-gradient">users that stay</span>
            <span className="block font-serif text-[2.4rem] font-normal italic text-white/70 sm:text-5xl lg:text-[3.4rem]">
              and revenue that compounds.
            </span>
          </Reveal>

          <Reveal
            as="p"
            delay={140}
            className="mt-7 max-w-xl text-base leading-relaxed text-ink2 sm:text-lg"
          >
            Lumivance is the growth partner for SaaS and mobile teams. We run
            full-funnel paid media, ASO, and performance creative — engineered
            to acquire qualified users at a cost that trends down, not up.
          </Reveal>

          <Reveal
            as="div"
            delay={210}
            className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center"
          >
            <Link href="/contact" className="btn-grad">
              Book a free teardown
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
            <Link href="/case-studies" className="btn-ghost">
              See the results
            </Link>
          </Reveal>

          <Reveal
            as="div"
            delay={280}
            className="mt-10 flex items-center gap-6 text-sm text-ink2"
          >
            <div className="flex -space-x-2.5">
              {["EM", "TR", "AB", "KW"].map((t, i) => (
                <span
                  key={t}
                  className="grid h-9 w-9 place-items-center rounded-full border-2 border-ink bg-gradient-to-br from-brand-indigo to-brand-fuchsia text-[11px] font-semibold text-white"
                  style={{ zIndex: 10 - i }}
                >
                  {t}
                </span>
              ))}
            </div>
            <p className="max-w-[15rem] leading-snug">
              A senior team trusted by{" "}
              <span className="font-semibold text-white">30+</span> software
              companies.
            </p>
          </Reveal>
        </div>

        {/* Visual */}
        <Reveal as="div" delay={160} className="relative">
          <HeroVisual />
        </Reveal>
      </div>
    </section>
  );
}

function HeroVisual() {
  return (
    <div className="relative mx-auto max-w-md lg:max-w-none">
      {/* main dashboard card */}
      <div className="ring-gradient relative overflow-hidden rounded-[1.75rem] bg-ink-panel/90 p-6 shadow-card backdrop-blur">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.16em] text-ink2">
              Qualified users
            </p>
            <p className="mt-1 font-display text-3xl font-semibold tracking-tight text-white">
              <Counter value={128400} />
            </p>
          </div>
          <span className="inline-flex items-center gap-1 rounded-full bg-emerald-500/15 px-3 py-1 text-xs font-semibold text-emerald-300">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M5 17l6-6 4 4 5-7" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            +42%
          </span>
        </div>

        {/* area chart */}
        <div className="mt-6">
          <svg viewBox="0 0 320 140" className="h-32 w-full" role="img" aria-label="Growth trend chart">
            <defs>
              <linearGradient id="area" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.45" />
                <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0" />
              </linearGradient>
              <linearGradient id="stroke" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#6366F1" />
                <stop offset="60%" stopColor="#8B5CF6" />
                <stop offset="100%" stopColor="#D946EF" />
              </linearGradient>
            </defs>
            <path
              d="M0 110 C40 104 60 96 90 84 C120 72 140 78 170 60 C200 42 220 46 250 30 C280 16 300 18 320 8 L320 140 L0 140 Z"
              fill="url(#area)"
            />
            <path
              d="M0 110 C40 104 60 96 90 84 C120 72 140 78 170 60 C200 42 220 46 250 30 C280 16 300 18 320 8"
              fill="none"
              stroke="url(#stroke)"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
            <circle cx="320" cy="8" r="4" fill="#F4C77B" />
          </svg>
        </div>

        <div className="mt-4 grid grid-cols-3 gap-3 border-t border-line pt-4">
          {[
            ["CPI", "−38%"],
            ["ROAS", "4.2x"],
            ["D30", "↑ 2.1x"],
          ].map(([k, v]) => (
            <div key={k}>
              <p className="text-[0.7rem] uppercase tracking-wider text-ink2">{k}</p>
              <p className="mt-0.5 font-display text-base font-semibold text-white">{v}</p>
            </div>
          ))}
        </div>
      </div>

      {/* floating rating badge */}
      <div className="absolute -left-4 -top-5 hidden animate-float rounded-2xl glass px-4 py-3 shadow-glow sm:flex sm:items-center sm:gap-3">
        <span className="grid h-9 w-9 place-items-center rounded-full bg-gradient-to-br from-spark to-amber-500 text-sm font-bold text-ink">
          ★
        </span>
        <div>
          <p className="font-display text-sm font-semibold text-white">4.9 / 5</p>
          <p className="text-[0.7rem] text-ink2">Avg client rating</p>
        </div>
      </div>

      {/* floating channel chip */}
      <div
        className="absolute -bottom-6 -right-3 hidden animate-float rounded-2xl glass px-4 py-3 shadow-glow sm:block"
        style={{ animationDelay: "1.2s" }}
      >
        <p className="text-[0.7rem] uppercase tracking-wider text-ink2">Channels live</p>
        <div className="mt-1.5 flex items-center gap-2">
          {["Meta", "Google", "TikTok", "ASA"].map((c) => (
            <span key={c} className="rounded-md bg-white/[0.06] px-2 py-0.5 text-[0.7rem] font-medium text-white/80">
              {c}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
