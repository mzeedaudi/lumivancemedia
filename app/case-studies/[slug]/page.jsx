import Link from "next/link";
import { notFound } from "next/navigation";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import CaseCard from "@/components/CaseCard";
import BrandLogo from "@/components/BrandLogo";
import { CaseArt, catOf } from "@/components/CaseVisuals";
import CTA from "@/components/CTA";
import {
  getCaseStudy,
  getCaseStudySlugs,
  getRelatedCaseStudies,
  buildNarrative,
} from "@/lib/caseStudyContent";

export function generateStaticParams() {
  return getCaseStudySlugs().map((slug) => ({ slug }));
}

export function generateMetadata({ params }) {
  const c = getCaseStudy(params.slug);
  if (!c) return {};
  return {
    title: `${c.client} case study — ${c.metric} ${c.metricLabel}`,
    description: c.summary,
    alternates: { canonical: `/case-studies/${c.id}` },
    openGraph: { title: `${c.client} — Lumivance case study`, description: c.summary },
  };
}

const PROFILE_LABELS = {
  what: "What they do",
  size: "Team size",
  hq: "Headquarters",
  engagement: "Engagement",
};

// Client website. Renders as a live external link when `website` is a full
// https:// URL; otherwise the domain shows as a plain label, so we never point
// a visitor at a site that isn't verifiably the client's.
function CompanyLink({ website }) {
  if (!website) return null;
  const isLive = /^https?:\/\//i.test(website);
  const label = website.replace(/^https?:\/\//i, "").replace(/\/$/, "");
  const cls =
    "inline-flex items-center gap-1.5 rounded-full border border-line px-3 py-1 text-xs font-medium text-ink2";
  const inner = (
    <>
      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.8" />
        <path
          d="M3.5 9h17M3.5 15h17M12 3c2.5 2.6 3.8 5.6 3.8 9S14.5 18.4 12 21c-2.5-2.6-3.8-5.6-3.8-9S9.5 5.6 12 3Z"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      {label}
    </>
  );

  if (!isLive) return <span className={cls}>{inner}</span>;
  return (
    <a
      href={website}
      target="_blank"
      rel="noopener noreferrer"
      className={`${cls} transition-colors hover:border-white/25 hover:text-white`}
    >
      {inner}
      <svg width="11" height="11" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M7 17L17 7M9 7h8v8"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </a>
  );
}

export default function CaseStudyPage({ params }) {
  const c = getCaseStudy(params.slug);
  if (!c) notFound();

  const { from, to } = c.brand || catOf(c.category);
  const related = getRelatedCaseStudies(c.id, 3);
  const hasStory = Boolean(c.timeline);
  const n = hasStory ? null : buildNarrative(c);

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="container-x pb-8 pt-36 sm:pt-44">
          <Reveal>
            <Link
              href="/case-studies"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-ink2 transition-colors hover:text-white"
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M19 12H5M11 18l-6-6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              All case studies
            </Link>
          </Reveal>

          <div className="mt-8 grid items-end gap-8 lg:grid-cols-[1.2fr_1fr]">
            <div>
              <Reveal as="div" className="flex flex-wrap items-center gap-3">
                <span
                  className="inline-flex items-center rounded-2xl px-4 py-2.5"
                  style={{ backgroundImage: `linear-gradient(120deg, ${from}, ${to})` }}
                >
                  <BrandLogo c={c} className="text-white" />
                </span>
                <span className="rounded-full border border-line px-3 py-1 text-xs font-medium uppercase tracking-wider text-ink2">
                  {c.category}
                </span>
                <CompanyLink website={c.website} />
              </Reveal>
              <Reveal
                as="h1"
                delay={70}
                className="mt-6 max-w-2xl font-display text-4xl font-semibold leading-[1.05] tracking-tightest text-white sm:text-5xl"
              >
                {c.headline}
              </Reveal>
            </div>

            {/* Headline metric plate, tinted to the brand */}
            <Reveal delay={120} className="relative overflow-hidden rounded-3xl p-8 ring-1 ring-white/15">
              <div
                className="absolute inset-0"
                style={{ backgroundImage: `linear-gradient(135deg, ${from}, ${to})` }}
              />
              <div
                className="absolute inset-0 opacity-[0.15]"
                style={{
                  backgroundImage:
                    "repeating-linear-gradient(135deg, rgba(255,255,255,0.55) 0 1px, transparent 1px 10px)",
                }}
              />
              <CaseArt
                category={c.category}
                uid={`hero-${c.id}`}
                className="pointer-events-none absolute -right-6 -bottom-6 h-40 w-40 opacity-20"
              />
              <p className="relative font-display text-6xl font-semibold tracking-tightest text-white sm:text-7xl">
                {c.metric}
              </p>
              <p className="relative mt-2 text-sm font-medium text-white/85">{c.metricLabel}</p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Company profile facts */}
      {c.profile && (
        <section className="container-x pt-2">
          <Reveal className="grid gap-px overflow-hidden rounded-3xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
            {Object.entries(c.profile).map(([k, v]) => (
              <div key={k} className="bg-ink-soft/70 p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-ink2">
                  {PROFILE_LABELS[k] || k}
                </p>
                <p className="mt-2 text-sm font-medium leading-snug text-white/90">{v}</p>
              </div>
            ))}
          </Reveal>
        </section>
      )}

      {/* Results grid — featured studies carry a results triple */}
      {c.results && (
        <section className="container-x py-6">
          <div className="grid gap-px overflow-hidden rounded-3xl border border-line bg-line sm:grid-cols-3">
            {c.results.map(([value, label]) => (
              <div key={label} className="bg-ink-soft p-8 text-center">
                <span className="font-display text-3xl font-semibold tracking-tightest text-gradient sm:text-4xl">
                  {value}
                </span>
                <p className="mx-auto mt-3 max-w-[16rem] text-sm text-ink2">{label}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Story */}
      <section className="container-x py-16 sm:py-20">
        <div className="mx-auto max-w-3xl">
          {hasStory ? (
            <>
              {c.about && (
                <Reveal className="mb-14">
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-spark">
                    About {c.client}
                  </p>
                  <p className="mt-4 text-[1.05rem] leading-relaxed text-white/85 sm:text-lg">
                    {c.about}
                  </p>
                </Reveal>
              )}

              <Reveal>
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-spark">
                  The challenge
                </p>
                <p className="mt-4 text-[1.05rem] leading-relaxed text-white/85 sm:text-lg">
                  {c.challenge}
                </p>
              </Reveal>

              {/* Step-by-step timeline */}
              <Reveal className="mt-14">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-spark">
                  How we did it, step by step
                </p>
              </Reveal>
              <ol className="mt-8 space-y-0">
                {c.timeline.map((step, i) => (
                  <Reveal as="li" key={step.title} delay={i * 60} className="relative flex gap-5 pb-10 last:pb-0">
                    {/* connector */}
                    {i < c.timeline.length - 1 && (
                      <span
                        aria-hidden="true"
                        className="absolute left-[1.05rem] top-10 h-[calc(100%-2.5rem)] w-px bg-gradient-to-b from-white/25 to-white/5"
                      />
                    )}
                    <span
                      className="z-10 grid h-9 w-9 flex-none place-items-center rounded-full font-display text-sm font-bold text-white ring-1 ring-white/25"
                      style={{ backgroundImage: `linear-gradient(135deg, ${from}, ${to})` }}
                    >
                      {i + 1}
                    </span>
                    <div className="pt-1">
                      <p className="text-xs font-semibold uppercase tracking-[0.14em] text-ink2">
                        {step.phase}
                      </p>
                      <h3 className="mt-1.5 font-display text-lg font-semibold tracking-tight text-white">
                        {step.title}
                      </h3>
                      <p className="mt-2.5 text-[0.98rem] leading-relaxed text-ink2">{step.body}</p>
                    </div>
                  </Reveal>
                ))}
              </ol>

              <Reveal className="mt-14">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-spark">
                  The result
                </p>
                <p className="mt-4 text-[1.05rem] leading-relaxed text-white/85 sm:text-lg">
                  {c.outcome}
                </p>
              </Reveal>

              {/* Client quote */}
              {c.quote && (
                <Reveal className="mt-14 overflow-hidden rounded-3xl p-[1px]">
                  <figure
                    className="rounded-3xl p-8 sm:p-10"
                    style={{
                      backgroundImage: `linear-gradient(120deg, ${from}22, ${to}22)`,
                      boxShadow: `inset 0 0 0 1px ${from}55`,
                    }}
                  >
                    <blockquote className="font-serif text-xl italic leading-snug text-white/90 sm:text-2xl">
                      “{c.quote.text}”
                    </blockquote>
                    <figcaption className="mt-6 flex items-center gap-3">
                      <span
                        className="grid h-10 w-10 place-items-center rounded-full text-sm font-semibold text-white"
                        style={{ backgroundImage: `linear-gradient(135deg, ${from}, ${to})` }}
                      >
                        {c.quote.name.split(" ").map((w) => w[0]).join("").slice(0, 2)}
                      </span>
                      <span>
                        <span className="block text-sm font-semibold text-white">{c.quote.name}</span>
                        <span className="block text-xs text-ink2">{c.quote.role}</span>
                      </span>
                    </figcaption>
                  </figure>
                </Reveal>
              )}
            </>
          ) : (
            <div className="space-y-12">
              {[
                { k: "The challenge", body: n.challenge },
                { k: "What we did", body: n.approach },
                { k: "The result", body: n.result },
              ].map((s, i) => (
                <Reveal key={s.k} delay={i * 60}>
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-spark">
                    {s.k}
                  </p>
                  <p className="mt-4 text-[1.05rem] leading-relaxed text-white/85 sm:text-lg">
                    {s.body}
                  </p>
                </Reveal>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Related */}
      {related.length > 0 && (
        <section className="container-x py-16 sm:py-24">
          <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
            <SectionHeading eyebrow="Keep reading" title="More growth stories" />
            <Reveal as="div" delay={100}>
              <Link href="/case-studies" className="btn-ghost">
                All case studies
              </Link>
            </Reveal>
          </div>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((r, i) => (
              <CaseCard key={r.id} c={r} delay={i * 80} />
            ))}
          </div>
        </section>
      )}

      <CTA
        title="Want results like these?"
        body="Every engagement starts with a free teardown. We’ll map where your next users come from before you commit to anything."
      />
    </>
  );
}
