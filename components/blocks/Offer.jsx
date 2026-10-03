import Link from "next/link";
import { cta } from "@/lib/site";
import { notIncluded, retainer, sprint, usd } from "@/lib/offer";

function List({ head, items, mark = "text-tally", ink = false }) {
  return (
    <div>
      <h3 className={`label border-b pb-2.5 ${ink ? "border-rule-ink text-on-ink" : "border-ink"}`}>{head}</h3>
      <ul>
        {items.map((t) => (
          <li key={t} className={`flex gap-3 border-b py-3 text-[17px] leading-snug ${ink ? "border-rule-ink" : "border-rule"}`}>
            <span aria-hidden="true" className={`font-mono ${mark}`}>
              —
            </span>
            {t}
          </li>
        ))}
      </ul>
    </div>
  );
}

// The three sprint sizes side by side. No "most popular" badge: nobody has
// bought one yet, so the page doesn't pretend otherwise.
export function Tiers({ compact = false }) {
  return (
    <div>
      <div className="grid border-t border-ink sm:grid-cols-3">
        {sprint.tiers.map((t, i) => (
          <div
            key={t.name}
            className={`flex flex-col border-b border-rule py-6 sm:border-b-0 sm:py-7 ${i > 0 ? "sm:border-l sm:pl-6" : ""} ${
              i < 2 ? "sm:pr-6" : ""
            }`}
          >
            <span className="label text-graphite">{t.name}</span>
            <span className="display mt-3 text-[44px] leading-[0.9] sm:text-[48px] lg:text-[56px]">{usd(t.price)}</span>
            <span className="label mt-2 text-[11px] text-graphite">{usd(t.perAd)} per finished ad</span>
            <p className="mt-5 font-display text-[18px] font-bold tracking-[-0.01em]">{t.ads} ads</p>
            <p className="text-[17px]">{t.length}</p>
            <p className="mt-3 text-[16px] leading-snug text-graphite">{t.note}</p>
          </div>
        ))}
      </div>
      {!compact && (
        <div className="mt-12 grid gap-10 sm:grid-cols-2 sm:gap-8">
          <List head="In every sprint" items={sprint.included} />
          <List head="Terms" items={sprint.terms} />
        </div>
      )}
      <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3">
        <Link href={cta.href} className="btn">
          {cta.label}
          <span aria-hidden="true" className="font-mono font-medium">
            →
          </span>
        </Link>
        {compact && (
          <Link href="/pricing" className="label border-b-2 border-tally pb-0.5">
            Full pricing
          </Link>
        )}
      </div>
    </div>
  );
}

// The retainer as the page's dark panel: what's in it, how it's charged.
export function Retainer() {
  return (
    <div className="bg-ink p-6 text-paper sm:p-10">
      <span className="label text-on-ink">After a sprint</span>
      <h3 className="display mt-3 text-[32px] leading-[0.95] sm:text-[40px]">{retainer.name}</h3>
      <p className="mt-3 text-[17px] italic text-on-ink">{retainer.price}.</p>
      <div className="mt-8 grid gap-10 sm:grid-cols-2 sm:gap-8">
        <List head="Every month" items={retainer.included} ink />
        <List head="Terms" items={retainer.terms} ink />
      </div>
      <Link href={retainer.href} className="label mt-8 inline-block border-b-2 border-tally pb-0.5 text-paper">
        How the retainer works
      </Link>
    </div>
  );
}

export function NotIncluded() {
  return <List head="Not included in either" items={notIncluded} mark="text-graphite" />;
}
