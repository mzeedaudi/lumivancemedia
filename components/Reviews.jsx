import Link from "next/link";
import Reveal from "@/components/Reveal";
import { reviewSummary, featuredReview } from "@/lib/site";

function Stars({ score = 5, size = 18 }) {
  const full = Math.round(score);
  return (
    <span className="inline-flex items-center gap-0.5" aria-hidden="true">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} width={size} height={size} viewBox="0 0 24 24" className={i < full ? "fill-[#FB6A45]" : "fill-current opacity-20"}>
          <path d="M12 2.6l2.85 5.95 6.55.86-4.8 4.55 1.2 6.49L12 17.9l-5.8 2.95 1.2-6.49-4.8-4.55 6.55-.86L12 2.6Z" />
        </svg>
      ))}
    </span>
  );
}

const metaIcons = {
  industry: <><rect x="3" y="7.5" width="18" height="12.5" rx="2" /><path d="M8 7.5V6a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1.5" /></>,
  location: <><path d="M12 21s-6-5.2-6-10a6 6 0 1 1 12 0c0 4.8-6 10-6 10Z" /><circle cx="12" cy="11" r="2.2" /></>,
  size: <><circle cx="9" cy="8" r="3" /><path d="M3.5 19.5a5.5 5.5 0 0 1 11 0" /><path d="M16 5.5a3 3 0 0 1 0 5M20.5 19.5a5.5 5.5 0 0 0-3-4.9" /></>,
  budget: <><circle cx="12" cy="12" r="9" /><path d="M12 7v10M14.5 9a2.6 2.6 0 0 0-2.5-1.3c-1.4 0-2.5.8-2.5 1.9 0 2.7 5 1.3 5 3.9 0 1.2-1.2 1.9-2.5 1.9A2.8 2.8 0 0 1 9.5 15" /></>,
  period: <><rect x="3.5" y="5" width="17" height="16" rx="2" /><path d="M3.5 9.5h17M8 3v4M16 3v4" /></>,
};

const metaRows = [
  ["industry", featuredReview.industry],
  ["location", featuredReview.location],
  ["size", featuredReview.size],
  ["budget", featuredReview.budget],
  ["period", featuredReview.period],
];

export default function Reviews() {
  return (
    <section className="container-x py-20 sm:py-28">
      <Reveal as="h2" className="mx-auto max-w-2xl text-center font-display text-3xl font-semibold leading-[1.1] tracking-tightest sm:text-[2.6rem]">
        Rated <span className="text-gradient">{reviewSummary.score}</span> across {reviewSummary.count}+ verified client reviews
      </Reveal>

      <div className="mt-14 grid gap-5 lg:grid-cols-[0.85fr_1.15fr]">
        {/* Light profile card */}
        <Reveal className="flex flex-col rounded-3xl bg-white p-7 text-slate-900 shadow-card sm:p-8">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="font-display text-xl font-bold tracking-tight">
                {reviewSummary.platform}
              </p>
              <div className="mt-2 flex items-center gap-2.5">
                <span className="font-display text-2xl font-bold">{reviewSummary.score}</span>
                <Stars score={reviewSummary.score} />
              </div>
            </div>
            <Link href={reviewSummary.profileHref} className="mt-1 whitespace-nowrap text-sm font-semibold text-slate-900 underline decoration-2 underline-offset-4 transition-colors hover:text-[#FB6A45]">
              View profile
            </Link>
          </div>
          <div className="mt-auto flex flex-wrap gap-2 pt-10">
            {reviewSummary.tags.map((t) => (
              <span key={t} className="rounded-full bg-slate-100 px-3 py-1.5 text-xs font-medium text-slate-600">
                {t}
              </span>
            ))}
          </div>
        </Reveal>

        {/* Dark featured review */}
        <Reveal delay={100} className="ring-gradient rounded-3xl bg-ink-panel p-7 sm:p-8">
          <div className="flex items-center gap-3">
            <span className="font-display text-xl font-semibold text-white">{featuredReview.score.toFixed(1)}</span>
            <Stars score={featuredReview.score} size={20} />
          </div>

          <div className="mt-7 grid gap-8 sm:grid-cols-[minmax(0,0.85fr)_1fr] sm:gap-10">
            <ul className="space-y-3.5 sm:border-r sm:border-line sm:pr-8">
              {metaRows.map(([key, label]) => (
                <li key={key} className="flex items-center gap-3 text-sm text-white/85">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="flex-none text-brand-violet">
                    {metaIcons[key]}
                  </svg>
                  {label}
                </li>
              ))}
            </ul>

            <div className="flex flex-col">
              <p className="font-display text-lg font-medium leading-snug text-white sm:text-xl">
                “{featuredReview.quote}”
              </p>
              <div className="mt-auto flex items-center gap-3 pt-8">
                <span className="grid h-11 w-11 flex-none place-items-center rounded-full bg-gradient-to-br from-brand-indigo to-brand-fuchsia font-display text-sm font-semibold text-white">
                  {featuredReview.name.split(" ").map((n) => n[0]).join("")}
                </span>
                <div>
                  <p className="text-sm font-semibold text-white">
                    {featuredReview.name}
                  </p>
                  <p className="text-xs text-ink2">
                    {featuredReview.role} · {featuredReview.company}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
