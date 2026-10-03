// Two-column spec sheet: mono key, plain-language value.
export default function SpecTable({ rows }) {
  return (
    <table className="w-full border-collapse border-t border-ink text-left">
      <tbody>
        {rows.map(([k, v]) => (
          <tr key={k} className="border-b border-rule align-top">
            <th scope="row" className="label w-[38%] py-4 pr-4 font-medium text-graphite sm:w-[30%]">
              {k}
            </th>
            <td className="py-4 text-[17px] leading-snug sm:text-[18px]">{v}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
