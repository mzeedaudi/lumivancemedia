import Link from "next/link";
import Reveal from "@/components/Reveal";
import { press } from "@/lib/site";

export default function FeaturedIn() {
  return (
    <section className="container-x py-20 sm:py-28">
      <Reveal as="h2" className="font-display text-3xl font-semibold tracking-tightest sm:text-4xl">
        As featured in
      </Reveal>

      <div className="mt-10 grid items-center gap-10 lg:grid-cols-2">
        <Reveal>
          <span className="font-serif text-6xl leading-none tracking-tight text-white/60 sm:text-7xl">
            {press.featured.name}
          </span>
        </Reveal>

        <Reveal delay={100} className="lg:pl-6">
          <p className="max-w-md text-base leading-relaxed text-ink2 sm:text-lg">
            {press.featured.blurb}
          </p>
          <Link
            href={press.featured.href}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost mt-7"
          >
            Read the article
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M7 17L17 7M9 7h8v8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </Reveal>
      </div>

      <Reveal className="mt-16 border-t border-line pt-10">
        <p className="mb-6 text-xs uppercase tracking-[0.2em] text-white/40">
          More coverage
        </p>
        <div className="flex flex-wrap items-center gap-x-10 gap-y-5">
          {press.outlets.map((o) => (
            <span
              key={o}
              className="font-display text-lg font-medium tracking-tight text-white/30 transition-colors hover:text-white/60"
            >
              {o}
            </span>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
