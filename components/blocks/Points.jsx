// Short points as rounded tiles, Apple style. The grid fills every row:
// five points become two wide tiles over three, four sit in one row, and so on.
const SPAN = { 3: "lg:col-span-3", 4: "lg:col-span-4", 6: "lg:col-span-6", 12: "lg:col-span-12" };

function spans(n) {
  if (n === 1) return [12];
  if (n % 3 === 0) return Array(n).fill(4);
  if (n % 3 === 2) return [6, 6, ...Array(n - 2).fill(4)];
  return [...Array(n - 4).fill(4), 3, 3, 3, 3];
}

export default function Points({ items }) {
  const s = spans(items.length);
  return (
    <dl className="grid gap-3 sm:grid-cols-2 lg:grid-cols-12 lg:gap-4">
      {items.map((it, i) => (
        <div key={it.title} className={`tile p-6 lg:p-7 ${SPAN[s[i]]} ${items.length % 2 && i === items.length - 1 ? "sm:col-span-2" : ""}`}>
          <dt className="h3">{it.title}</dt>
          <dd className="mt-2 text-[16px] leading-relaxed text-graphite">{it.text}</dd>
        </div>
      ))}
    </dl>
  );
}
