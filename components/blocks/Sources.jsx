// The published pages a guide's figures come from.
export default function Sources({ items }) {
  return (
    <ol className="grid list-decimal gap-x-10 gap-y-2 pl-5 text-[15px] leading-snug text-graphite sm:grid-cols-2">
      {items.map((s) => (
        <li key={s.href}>
          <a href={s.href} target="_blank" rel="noopener noreferrer" className="link">
            {s.label}
          </a>
        </li>
      ))}
    </ol>
  );
}
