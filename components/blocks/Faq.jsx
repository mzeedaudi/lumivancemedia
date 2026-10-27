// Native <details>, so answers open without JavaScript and stay in the page
// for search engines. Full-width rows, Apple's accordion style.
export default function Faq({ items }) {
  return (
    <div className="border-t border-rule">
      {items.map((it) => (
        <details key={it.q} className="group border-b border-rule">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5 [&::-webkit-details-marker]:hidden">
            <span className="text-[19px] font-semibold leading-snug tracking-[-0.016em]">{it.q}</span>
            <span aria-hidden="true" className="text-[26px] font-light leading-none text-accent transition-transform group-open:rotate-45">
              +
            </span>
          </summary>
          <p className="max-w-[820px] pb-6 text-[17px] text-graphite">{it.a}</p>
        </details>
      ))}
    </div>
  );
}
