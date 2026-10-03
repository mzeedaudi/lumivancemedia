// Who a service is for and who it isn't. Saying no up front saves both sides a call.
export default function Fit({ yes, no }) {
  const columns = [
    { head: "Good fit if", list: yes, mark: "text-tally" },
    { head: "Not a fit if", list: no, mark: "text-graphite" },
  ];
  return (
    <div className="grid gap-10 sm:grid-cols-2 sm:gap-8">
      {columns.map((c) => (
        <div key={c.head}>
          <h3 className="label border-b border-ink pb-2.5">{c.head}</h3>
          <ul>
            {c.list.map((t) => (
              <li key={t} className="flex gap-3 border-b border-rule py-3.5 text-[17px] leading-snug">
                <span aria-hidden="true" className={`font-mono ${c.mark}`}>
                  —
                </span>
                {t}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
