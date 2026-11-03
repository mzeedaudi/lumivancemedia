// A two-column table on white: what something is called, then what it is.
export default function SpecTable({ rows }) {
  return (
    <div className="overflow-hidden rounded-[18px] border border-rule bg-white">
      <table className="w-full table-fixed border-collapse text-left">
        <tbody className="[&>tr:last-child>*]:border-b-0">
          {rows.map(([k, v]) => (
            <tr key={k} className="align-top">
              <th scope="row" className="w-[36%] border-b border-rule px-4 py-3.5 text-[15px] font-medium text-graphite sm:w-[30%] sm:px-5">
                {k}
              </th>
              <td className="border-b border-rule px-4 py-3.5 [overflow-wrap:anywhere] sm:px-5">{v}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
