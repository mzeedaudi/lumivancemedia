// Numbered stages with a timing column, read like a production schedule.
export default function Steps({ items }) {
  return (
    <ol className="border-t border-ink">
      {items.map((it, i) => (
        <li
          key={it.title}
          className="grid grid-cols-[52px_1fr] gap-x-4 gap-y-2 border-b border-rule py-6 sm:grid-cols-[84px_minmax(0,0.75fr)_minmax(0,1.45fr)_128px] sm:items-baseline sm:gap-x-6"
        >
          <span className="display row-span-3 text-[38px] leading-[0.8] sm:row-span-1 sm:text-[52px]">
            {String(i + 1).padStart(2, "0")}
          </span>
          <span className="h3">{it.title}</span>
          <p className="text-[17px] leading-relaxed text-graphite">{it.text}</p>
          {it.when && <span className="label text-graphite sm:text-right">{it.when}</span>}
        </li>
      ))}
    </ol>
  );
}
