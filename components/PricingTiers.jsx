import Link from "next/link";
import Reveal from "@/components/Reveal";
import { pricing } from "@/lib/site";

export default function PricingTiers() {
  return (
    <div className="grid items-stretch gap-5 lg:grid-cols-3">
      {pricing.map((tier, i) => (
        <Reveal
          key={tier.name}
          delay={i * 90}
          className={`relative flex h-full flex-col rounded-[1.75rem] p-8 ${
            tier.featured
              ? "ring-gradient bg-ink-panel shadow-glow lg:-mt-4 lg:mb-4"
              : "border border-line bg-ink-soft/60"
          }`}
        >
          {tier.featured && (
            <span className="absolute right-6 top-6 rounded-full bg-gradient-to-r from-gold to-ember px-3 py-1 text-[0.66rem] font-bold uppercase tracking-wider text-ink">
              Most popular
            </span>
          )}
          <h2 className="font-display text-xl font-bold text-bone">{tier.name}</h2>
          <p className="mt-2 min-h-[2.5rem] text-sm leading-snug text-sand">{tier.tagline}</p>
          <div className="mt-6 flex items-end gap-1">
            <span className="display-tight font-display text-4xl font-bold text-bone">
              {tier.price}
            </span>
            <span className="pb-1 text-sm text-sand">{tier.cadence}</span>
          </div>
          {tier.note && <p className="mt-2 text-xs leading-snug text-sand">{tier.note}</p>}

          <Link
            href="/contact"
            className={`mt-7 w-full ${tier.featured ? "btn-primary" : "btn-ghost"}`}
          >
            {tier.cta}
          </Link>

          <ul className="mt-8 space-y-3.5 border-t border-line pt-7">
            {tier.features.map((f) => (
              <li key={f} className="flex items-start gap-3 text-sm text-bone/85">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true" className="mt-0.5 flex-none text-amber">
                  <path d="M5 12l4 4L19 7" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                {f}
              </li>
            ))}
            {tier.excluded?.map((f) => (
              <li key={f} className="flex items-start gap-3 text-sm text-sand/70">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true" className="mt-0.5 flex-none">
                  <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
                </svg>
                <span className="line-through decoration-sand/40">{f}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      ))}
    </div>
  );
}
