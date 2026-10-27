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

const ROWS = [
  ["Price", (t) => <span className="display text-[16px] sm:text-[32px]">{usd(t.price)}</span>],
  ["Cost per ad", (t) => usd(Math.round(t.price / t.ads))],
  ["Number of ads", (t) => t.ads],
  ["Maximum length", (t) => t.maxLength],
  ["Who it’s for", (t) => <span className="text-[13px] leading-snug text-graphite sm:text-[15px]">{t.who}</span>],
];

// The three sprint sizes as one comparison table on white. There's no
// "most popular" column: nobody has bought one yet, so the page doesn't say so.
// `details` adds what's included and the terms underneath.
export function Tiers({ details = false }) {
  return (
    <div>
      <div className="overflow-hidden rounded-[18px] border border-rule bg-white">
        <table className="w-full table-fixed border-collapse text-left">
          <thead>
            <tr>
              <td className="w-[20%] border-b border-rule sm:w-[22%]" />
              {sprint.tiers.map((t) => (
                <th key={t.name} scope="col" className="border-b border-l border-rule px-1.5 py-3 text-[14px] font-semibold sm:px-5 sm:py-4 sm:text-[17px]">
                  {t.name}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="[&>tr:last-child>*]:border-b-0">
            {ROWS.map(([label, cell]) => (
              <tr key={label}>
                <th scope="row" className="border-b border-rule px-1.5 py-3 align-top text-[12px] font-medium leading-snug text-graphite sm:px-5 sm:py-4 sm:text-[15px]">
                  {label}
                </th>
                {sprint.tiers.map((t) => (
                  <td key={t.name} className="border-b border-l border-rule px-1.5 py-3 align-top text-[14px] sm:px-5 sm:py-4 sm:text-[17px]">
                    {cell(t)}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {details && (
        <div className="mt-10 grid gap-10 sm:grid-cols-[1.4fr_1fr] sm:gap-12">
          <List head="Every sprint includes" items={sprint.included} />
          <List head="Terms" items={sprint.terms} />
        </div>
      )}

      <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
        <Link href={cta.href} className="btn">
          {cta.label}
        </Link>
        {!details && (
          <Link href="/pricing" className="link">
            See full pricing
          </Link>
        )}
      </div>
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
