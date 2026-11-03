// Who a service is for and who it isn't, as two tiles side by side.
export default function Fit({ yes, no }) {
  const columns = [
    { head: "It’s a good fit if", list: yes },
    { head: "It’s not a fit if", list: no },
  ];
  return (
    <div className="grid gap-3 sm:grid-cols-2 lg:gap-4">
      {columns.map((c) => (
        <div key={c.head} className="tile p-6 lg:p-8">
          <h3 className="h3">{c.head}</h3>
          <ul className="ticks mt-4 space-y-2.5 text-graphite">
            {c.list.map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
