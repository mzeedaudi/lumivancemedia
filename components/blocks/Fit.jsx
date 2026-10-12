// Who a service is for and who it isn't. Saying no up front saves both sides a call.
export default function Fit({ yes, no }) {
  const columns = [
    { head: "It’s a good fit if", list: yes },
    { head: "It’s not a fit if", list: no },
  ];
  return (
    <div className="grid gap-10 sm:grid-cols-2 sm:gap-14">
      {columns.map((c) => (
        <div key={c.head}>
          <h3 className="h3">{c.head}</h3>
          <ul className="ticks mt-3 space-y-2 text-graphite">
            {c.list.map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
