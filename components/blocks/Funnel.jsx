// The four stages where a sector loses money, left to right: what goes wrong,
// what we change in the ads, and the number each stage is judged on.
export default function Funnel({ stages }) {
  return (
    <ol className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4 lg:gap-4">
      {stages.map((s, i) => (
        <li key={s.stage} className="tile flex flex-col p-6">
          <span className="text-[14px] font-semibold text-accent">Stage {i + 1}</span>
          <h3 className="display mt-1 text-[26px]">{s.stage}</h3>
          <dl className="mt-4 flex-1 space-y-3 text-[15px] leading-relaxed">
            <div>
              <dt className="font-semibold">What goes wrong</dt>
              <dd className="text-graphite">{s.wrong}</dd>
            </div>
            <div>
              <dt className="font-semibold">What we change</dt>
              <dd className="text-graphite">{s.change}</dd>
            </div>
          </dl>
          <p className="mt-5 border-t border-rule pt-3 text-[15px]">
            <span className="meta block">Judged on</span>
            <span className="font-semibold">{s.metric}</span>
          </p>
        </li>
      ))}
    </ol>
  );
}
