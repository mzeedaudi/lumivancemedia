// A sector's ad rules on white: the rule, then what we do about it.
export default function RulesTable({ rows }) {
  return (
    <div className="overflow-hidden rounded-[18px] border border-rule bg-white">
      <table className="w-full border-collapse text-left">
        <thead className="sr-only sm:not-sr-only">
          <tr>
            <th scope="col" className="w-[38%] border-b border-rule px-5 py-3 text-[14px] font-medium text-graphite">The rule</th>
            <th scope="col" className="border-b border-l border-rule px-5 py-3 text-[14px] font-medium text-graphite">What we do about it</th>
          </tr>
        </thead>
        <tbody className="[&>tr:last-child>*]:border-b-0">
          {rows.map((r) => (
            <tr key={r.rule} className="block border-b border-rule last:border-b-0 sm:table-row sm:border-b-0">
              <th scope="row" className="block px-4 pb-1 pt-4 align-top font-semibold sm:table-cell sm:border-b sm:border-rule sm:px-5 sm:py-4">
                {r.rule}
              </th>
              <td className="block px-4 pb-4 align-top text-graphite sm:table-cell sm:border-b sm:border-l sm:border-rule sm:px-5 sm:py-4">{r.handle}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
