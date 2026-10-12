// A short list of points, each a plain heading and a sentence or two.
// `columns` lays them out two across for sections that sit under their heading.
export default function Points({ items, columns = false }) {
  if (columns) {
    return (
      <dl className="grid gap-x-14 gap-y-8 sm:grid-cols-2">
        {items.map((it) => (
          <div key={it.title}>
            <dt className="h3">{it.title}</dt>
            <dd className="mt-1.5 text-graphite">{it.text}</dd>
          </div>
        ))}
      </dl>
    );
  }
  return (
    <dl className="border-t border-rule">
      {items.map((it) => (
        <div key={it.title} className="border-b border-rule py-5">
          <dt className="h3">{it.title}</dt>
          <dd className="mt-1.5 text-graphite">{it.text}</dd>
        </div>
      ))}
    </dl>
  );
}
