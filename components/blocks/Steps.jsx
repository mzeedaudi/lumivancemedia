// Steps as a row of numbered tiles, with the timing for each underneath.
const COLS = { 3: "lg:grid-cols-3", 4: "lg:grid-cols-4", 5: "lg:grid-cols-5", 6: "lg:grid-cols-3" };

export default function Steps({ items }) {
  return (
    <ol className={`grid gap-3 sm:grid-cols-2 lg:gap-4 ${COLS[items.length] ?? "lg:grid-cols-4"}`}>
      {items.map((it, i) => (
        <li key={it.title} className="tile flex flex-col p-6">
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-accent text-[15px] font-semibold text-white">{i + 1}</span>
          <h3 className="h3 mt-4">{it.title}</h3>
          <p className="mt-2 flex-1 text-[16px] leading-relaxed text-graphite">{it.text}</p>
          {it.when && <span className="mt-4 text-[14px] font-semibold text-accent">{it.when}</span>}
        </li>
      ))}
    </ol>
  );
}
