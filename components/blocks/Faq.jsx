// Native <details>, so answers open without JavaScript and stay in the page
// for search engines.
export default function Faq({ items }) {
  return (
    <div className="border-t border-rule">
      {items.map((it) => (
        <details key={it.q} className="group border-b border-rule">
          <summary className="flex cursor-pointer list-none items-start justify-between gap-6 py-4 [&::-webkit-details-marker]:hidden">
            <span className="h3">{it.q}</span>
            <span aria-hidden="true" className="text-[22px] leading-none text-graphite transition-transform group-open:rotate-45">
              +
            </span>
          </summary>
          <p className="max-w-[680px] pb-5 text-graphite">{it.a}</p>
        </details>
      ))}
    </div>
  );
}
