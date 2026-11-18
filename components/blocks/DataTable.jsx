// A plain comparison table for guides. The first column labels each row, and
// the table scrolls sideways inside its own frame on narrow phones.
export default function DataTable({ label, columns, rows }) {
  return (
    <div tabIndex={0} role="region" aria-label={label} className="overflow-x-auto rounded-[18px] border border-rule bg-white">
      <table className="w-full min-w-[520px] border-collapse text-left text-[15px] leading-snug">
        <thead>
          <tr>
            {columns.map((c, i) => (
              <th key={c || i} scope="col" className="border-b border-rule px-4 py-3 align-bottom text-[14px] font-medium text-graphite">
                {c}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="[&>tr:last-child>*]:border-b-0">
          {rows.map((row) => (
            <tr key={row.join("|")}>
              {row.map((cell, i) =>
                i === 0 ? (
                  <th key={i} scope="row" className="border-b border-rule px-4 py-3 align-top font-semibold">
                    {cell}
                  </th>
                ) : (
                  <td key={i} className="border-b border-rule px-4 py-3 align-top text-graphite">
                    {cell}
                  </td>
                )
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
