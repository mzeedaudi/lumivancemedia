import Link from "next/link";

// Contextual call-to-action card used inside blog posts.
export default function BlogCTA({ cta, variant = "card" }) {
  if (variant === "inline") {
    return (
      <div className="my-10 flex flex-col items-start gap-4 rounded-2xl border border-line bg-ink-soft/60 p-6 sm:flex-row sm:items-center sm:justify-between">
        <p className="font-display text-base font-semibold text-white">{cta.title}</p>
        <Link href={cta.href} className="btn-grad flex-none">
          {cta.label}
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </Link>
      </div>
    );
  }

  return (
    <div className="ring-gradient relative overflow-hidden rounded-[1.75rem] bg-ink-panel p-8 text-center sm:p-10">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 h-48 w-[34rem] max-w-full -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-violet/25 blur-[100px]"
      />
      <div className="relative">
        <h2 className="mx-auto max-w-xl font-display text-2xl font-semibold tracking-tight text-white sm:text-3xl">
          {cta.title}
        </h2>
        <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-ink2 sm:text-base">
          {cta.body}
        </p>
        <Link href={cta.href} className="btn-grad mt-7">
          {cta.label}
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </Link>
      </div>
    </div>
  );
}
