import Link from "next/link";
import { cta } from "@/lib/site";
import { notIncluded, retainer, sprint, usd } from "@/lib/offer";

function List({ head, items }) {
  return (
    <div>
      <h3 className="h3">{head}</h3>
      <ul className="ticks mt-3 space-y-2 text-graphite">
        {items.map((t) => (
          <li key={t}>{t}</li>
        ))}
      </ul>
    </div>
  );
}

function Card({ name, price, unit, lines, who, action, ghost = false }) {
  return (
    <li className="tile flex flex-col p-7">
      <h3 className="h3">{name}</h3>
      <p className="mt-4">
        <span className="display block text-[44px] leading-none">{price}</span>
        <span className="meta mt-1.5 block">{unit}</span>
      </p>
      <ul className="ticks mt-6 flex-1 space-y-2 text-[16px]">
        {lines.map((l) => (
          <li key={l}>{l}</li>
        ))}
      </ul>
      <p className="meta mt-6">{who}</p>
      <Link href={action.href} className={`btn mt-5 w-full ${ghost ? "btn-ghost" : ""}`}>
        {action.label}
      </Link>
    </li>
  );
}

// The packages as plain cards: name, price, what you get, who it's for, one
// button. No "most popular" badge: nobody has bought one yet, so the page
// doesn't say so. `withRetainer` adds the monthly retainer as a fourth card,
// and `details` adds what every sprint includes underneath.
export function Tiers({ details = false, withRetainer = false }) {
  return (
    <div>
      <ul className={`grid gap-3 sm:grid-cols-2 lg:gap-4 ${withRetainer ? "lg:grid-cols-4" : "lg:grid-cols-3"}`}>
        {sprint.tiers.map((t) => (
          <Card
            key={t.name}
            name={t.name}
            price={usd(t.price)}
            unit="one batch, fixed price"
            lines={[`${t.ads} finished ads`, `Up to ${t.maxLength} each`, "First ads in 72 hours"]}
            who={t.who}
            action={{ href: cta.href, label: "Start a sprint" }}
          />
        ))}
        {withRetainer && (
          <Card
            name="Monthly retainer"
            price="Custom"
            unit="quoted after we see your ad account"
            lines={["20 to 40 new ads a month", "We run Meta, TikTok and YouTube", "Month to month"]}
            who="For brands that want new ads and someone to run them."
            action={{ href: cta.href, label: "Talk to us" }}
            ghost
          />
        )}
      </ul>

      {details ? (
        <div className="mt-3 grid gap-3 lg:mt-4 lg:grid-cols-[minmax(0,2fr)_minmax(0,1fr)] lg:gap-4">
          <div className="tile p-7">
            <h3 className="h3">Every sprint includes</h3>
            <ul className="ticks mt-4 grid gap-x-8 gap-y-2 text-[16px] sm:grid-cols-2">
              {sprint.included.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
          </div>
          <div className="tile p-7">
            <h3 className="h3">Simple terms</h3>
            <ul className="ticks mt-4 space-y-2 text-[16px]">
              {sprint.terms.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
          </div>
          <p className="meta lg:col-span-2">
            Ad spend isn’t included: you pay Meta, TikTok and Google directly. Real creators, physical shoots and website changes aren’t part of any package.
          </p>
        </div>
      ) : (
        <p className="mt-6">
          <Link href="/pricing" className="link">
            See full pricing <span aria-hidden="true">›</span>
          </Link>
        </p>
      )}
    </div>
  );
}

// The retainer: what's in it and how it's charged, in a white panel.
export function Retainer() {
  return (
    <div className="rounded-[18px] border border-rule bg-white p-6 sm:p-9">
      <h3 className="display text-[24px] sm:text-[28px]">{retainer.name}</h3>
      <p className="mt-2 text-graphite">{retainer.price}.</p>
      <div className="mt-8 grid gap-10 sm:grid-cols-[1.4fr_1fr] sm:gap-12">
        <List head="Every month" items={retainer.included} />
        <List head="Terms" items={retainer.terms} />
      </div>
      <Link href={retainer.href} className="link mt-8 inline-block">
        How the retainer works
      </Link>
    </div>
  );
}

export function NotIncluded() {
  return (
    <ul className="ticks space-y-2">
      {notIncluded.map((t) => (
        <li key={t}>{t}</li>
      ))}
    </ul>
  );
}
