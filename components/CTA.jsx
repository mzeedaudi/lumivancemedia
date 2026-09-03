import Link from "next/link";
import Reveal from "@/components/Reveal";

export default function CTA({
  title = "Your next commercial is one brief away.",
  body = "Tell us about the brand and the placements you’re buying. We’ll come back within a day with a treatment and a plan for your first month.",
}) {
  return (
    <section className="container-x py-20 sm:py-28">
      <Reveal className="ring-gradient relative overflow-hidden rounded-[2rem] bg-ink-panel px-6 py-16 text-center sm:px-12 sm:py-24">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-0 h-72 w-[46rem] max-w-full -translate-x-1/2 -translate-y-1/2 rounded-full bg-amber/25 blur-[120px]"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-amber/50 to-transparent"
        />
        <div className="relative">
          <h2 className="display-tight mx-auto max-w-3xl font-display text-4xl font-bold text-bone sm:text-[3.4rem]">
            {title}
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-sand sm:text-lg">{body}</p>
          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link href="/contact" className="btn-primary">
              Start a retainer
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
            <Link href="/pricing" className="btn-ghost">
              See the retainers
            </Link>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
