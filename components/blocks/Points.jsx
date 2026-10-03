// Rows of claims: a bold title on the left, the explanation on the right.
export default function Points({ items, ink = false }) {
  return (
    <dl className={`border-t ${ink ? "border-rule-ink" : "border-ink"}`}>
      {items.map((it) => (
        <div
          key={it.title}
          className={`grid gap-2 border-b py-5 sm:grid-cols-[minmax(0,0.85fr)_minmax(0,1.3fr)] sm:gap-8 ${
            ink ? "border-rule-ink" : "border-rule"
          }`}
        >
          <dt className="h3 text-[21px] [text-wrap:balance] sm:text-[22px]">{it.title}</dt>
          <dd className={`text-[17px] leading-relaxed sm:text-[18px] ${ink ? "text-on-ink" : "text-graphite"}`}>{it.text}</dd>
        </div>
      ))}
    </dl>
  );
}
