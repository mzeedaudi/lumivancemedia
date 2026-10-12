// Steps as a plain numbered list, with the timing for each on the right.
export default function Steps({ items }) {
  return (
    <ol className="border-t border-rule">
      {items.map((it, i) => (
        <li key={it.title} className="grid grid-cols-[1.75rem_1fr] gap-x-3 border-b border-rule py-5 sm:grid-cols-[2.25rem_1fr_auto] sm:gap-x-5">
          <span className="text-graphite">{i + 1}.</span>
          <div>
            <h3 className="h3">{it.title}</h3>
            <p className="mt-1 text-graphite">{it.text}</p>
          </div>
          {it.when && (
            <span className="meta col-start-2 mt-1.5 sm:col-start-3 sm:mt-0.5 sm:whitespace-nowrap sm:text-right">{it.when}</span>
          )}
        </li>
      ))}
    </ol>
  );
}
