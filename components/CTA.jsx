import Link from "next/link";
import Reveal from "@/components/Reveal";

export default function CTA({
  title = "Ready to make your growth compound?",
  body = "Book a free 30-minute teardown. We’ll audit your funnel and show you exactly where your next users will come from — no pitch deck required.",
}) {
  return (
    <section className="container-x py-20 sm:py-28">
      <Reveal className="ring-gradient relative overflow-hidden rounded-[2rem] bg-ink-panel px-6 py-14 text-center sm:px-12 sm:py-20">
        {/* glow */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-0 h-64 w-[42rem] max-w-full -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-violet/30 blur-[110px]"
        />
        <div className="relative">
          <h2 className="mx-auto max-w-2xl font-display text-3xl font-semibold leading-[1.1] tracking-tightest sm:text-[2.6rem]">
            {title}
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-ink2 sm:text-lg">
            {body}
          </p>
          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link href="/contact" className="btn-grad">
              Book your free teardown
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
            <Link href="/case-studies" className="btn-ghost">
              See client results
            </Link>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
