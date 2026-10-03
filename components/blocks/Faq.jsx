// Native <details>, so answers open without JavaScript and stay in the page
// for search engines.
export default function Faq({ items, ink = false }) {
  return (
    <div className={`border-t ${ink ? "border-rule-ink" : "border-ink"}`}>
      {items.map((it) => (
        <details key={it.q} className={`group border-b ${ink ? "border-rule-ink" : "border-rule"}`}>
          <summary className="flex cursor-pointer list-none items-start justify-between gap-6 py-5 [&::-webkit-details-marker]:hidden">
            <span className="h3 text-[20px] sm:text-[22px]">{it.q}</span>
            <span aria-hidden="true" className="font-mono text-[22px] leading-none transition-transform group-open:rotate-45">
              +
            </span>
          </summary>
          <p className={`max-w-[720px] pb-6 text-[17px] leading-relaxed sm:text-[18px] ${ink ? "text-on-ink" : "text-graphite"}`}>
            {it.a}
          </p>
        </details>
      ))}
    </div>
  );
}
