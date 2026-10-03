import { method } from "@/lib/site";

const CELL = {
  cut: "bg-[repeating-linear-gradient(135deg,transparent_0_7px,rgba(21,19,15,0.07)_7px_8px)]",
  iterate: "bg-ink/[0.06]",
  scale: "bg-tally text-white",
};

// The shape of a twenty-ad sprint: five hooks across four executions, with an
// illustrative read-out. Always shown with its "not client results" note.
export default function Matrix() {
  const { matrix } = method;
  let id = 0;

  return (
    <div>
      <table className="w-full table-fixed border-collapse border-t border-ink">
        <caption className="sr-only">{matrix.note}</caption>
        <thead>
          <tr>
            <td className="w-[92px] border-b border-rule sm:w-[180px]" />
            {matrix.cols.map((c) => (
              <th
                key={c}
                scope="col"
                className="label border-b border-rule py-2.5 pr-2 text-left align-bottom text-[10px] font-medium text-graphite sm:text-[10.5px]"
              >
                {c}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {matrix.rows.map((row, r) => (
            <tr key={row.name}>
              <th scope="row" className="border-b border-rule py-3 pr-3 text-left align-top font-normal">
                <span className="label block text-[10px] text-graphite">Hook {String.fromCharCode(65 + r)}</span>
                <span className="mt-0.5 block font-display text-[15px] font-bold leading-tight tracking-[-0.01em] sm:text-[17px]">
                  {row.name}
                </span>
                <span className="mt-0.5 hidden text-[14px] italic leading-snug text-graphite sm:block">{row.line}</span>
              </th>
              {row.states.map((state) => {
                id += 1;
                return (
                  <td key={id} className={`h-[76px] border-b border-l border-rule p-2 align-top sm:h-[88px] sm:p-3 ${CELL[state]}`}>
                    <span
                      className={`block font-mono text-[11px] font-semibold sm:text-[12px] ${
                        state === "cut" ? "text-graphite line-through" : ""
                      }`}
                    >
                      V{String(id).padStart(2, "0")}
                    </span>
                    <span
                      className={`label mt-5 block text-[9.5px] sm:mt-7 sm:text-[10.5px] ${
                        state === "scale" ? "text-white" : "text-graphite"
                      }`}
                    >
                      {state}
                    </span>
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
      <ul className="label mt-4 flex flex-wrap gap-x-6 gap-y-2 text-[10.5px] text-graphite">
        {Object.entries(matrix.legend).map(([state, text]) => (
          <li key={state} className="flex items-center gap-2">
            <span aria-hidden="true" className={`inline-block h-3 w-3 border border-rule ${CELL[state]}`} />
            {text}
          </li>
        ))}
      </ul>
      <p className="label mt-3 text-[10.5px] text-ink">{matrix.note}</p>
    </div>
  );
}
