import { plan } from "@/lib/site";

const CELL = {
  cut: "bg-[repeating-linear-gradient(135deg,transparent_0_7px,rgba(21,19,15,0.06)_7px_8px)]",
  iterate: "bg-ink/[0.07]",
  scale: "bg-accent text-white",
};

// The shape of a twenty-ad sprint: five hooks across four executions, with an
// illustrative read-out. The note saying it's an illustration appears once,
// under the grid, and the table points to it for screen readers.
export default function Matrix() {
  let id = 0;

  return (
    <div>
      <div className="border border-rule bg-white">
        <table aria-label="How a twenty-ad sprint is laid out" aria-describedby="sprint-grid-note" className="w-full table-fixed border-collapse">
          <thead>
            <tr>
              <td className="w-[92px] border-b border-rule sm:w-[190px]" />
              {plan.cols.map((c) => (
                <th key={c} scope="col" className="border-b border-l border-rule px-1.5 py-3 text-left align-bottom text-[12px] font-semibold leading-tight sm:px-3 sm:text-[14px]">
                  {c}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="[&>tr:last-child>*]:border-b-0">
            {plan.rows.map((row) => (
              <tr key={row.name}>
                <th scope="row" className="border-b border-rule px-2 py-3 text-left align-top font-normal sm:px-3">
                  <span className="block text-[13px] font-semibold leading-tight sm:text-[16px]">{row.name}</span>
                  <span className="mt-1 hidden text-[14px] leading-snug text-graphite sm:block">{row.line}</span>
                </th>
                {row.states.map((state) => {
                  id += 1;
                  return (
                    <td key={id} className={`h-[72px] border-b border-l border-rule p-2 align-top sm:h-[84px] sm:p-3 ${CELL[state]}`}>
                      <span className={`tag block text-[11px] ${state === "cut" ? "text-graphite line-through" : ""}`}>
                        V{String(id).padStart(2, "0")}
                      </span>
                      <span className={`tag mt-4 block text-[10px] sm:mt-6 ${state === "scale" ? "text-white" : "text-graphite"}`}>
                        {state}
                      </span>
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <ul className="tag mt-4 flex flex-wrap gap-x-6 gap-y-2 text-graphite">
        {Object.entries(plan.legend).map(([state, text]) => (
          <li key={state} className="flex items-center gap-2">
            <span aria-hidden="true" className={`inline-block h-3 w-3 border border-rule ${state === "cut" ? "bg-white" : ""} ${CELL[state]}`} />
            {text}
          </li>
        ))}
      </ul>
      <p id="sprint-grid-note" className="meta mt-3">
        {plan.note}
      </p>
    </div>
  );
}
