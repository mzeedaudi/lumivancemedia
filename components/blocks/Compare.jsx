// Lumivance beside the two usual alternatives, on the things that differ in
// how the work is set up. It compares set-ups, not results.
const OPTIONS = ["Lumivance", "An in-house team", "A generalist agency"];

export default function Compare({ rows }) {
  return (
    <div className="-mx-[var(--pad)] overflow-x-auto px-[var(--pad)] sm:mx-0 sm:px-0">
      <div className="min-w-[640px] border border-rule bg-white">
        <table className="w-full table-fixed border-collapse text-left">
          <thead>
            <tr>
              <td className="w-[22%] border-b border-rule" />
              {OPTIONS.map((o, i) => (
                <th key={o} scope="col" className={`border-b border-l border-rule px-4 py-3 text-[15px] font-semibold sm:px-5 ${i === 0 ? "text-accent" : ""}`}>
                  {o}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="[&>tr:last-child>*]:border-b-0">
            {rows.map(([label, ...cells]) => (
              <tr key={label}>
                <th scope="row" className="border-b border-rule px-4 py-3.5 align-top text-[14px] font-medium leading-snug text-graphite sm:px-5">
                  {label}
                </th>
                {cells.map((c, i) => (
                  <td key={i} className={`border-b border-l border-rule px-4 py-3.5 align-top text-[15px] leading-snug sm:px-5 ${i === 0 ? "font-medium" : "text-graphite"}`}>
                    {c}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
