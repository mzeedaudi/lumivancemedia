import AdVideo from "@/components/AdVideo";
import { Lines } from "@/components/Tally";
import { ads, method } from "@/lib/site";

const CELL = {
  cut: "bg-[repeating-linear-gradient(135deg,transparent_0_7px,rgba(21,19,15,0.07)_7px_8px)]",
  iterate: "bg-ink/[0.06]",
  scale: "bg-tally text-white",
};

// 02 — Proof by method instead of borrowed logos: three real spec openers for
// one product, then the shape of a full twenty-ad sprint and how it's read.
export default function Method() {
  const { example, matrix } = method;
  let id = 0;

  return (
    <section id="method" className="wrap">
      <div className="grid-12 border-t border-rule py-16 lg:py-24">
        <div className="gut">
          <span className="label block">02</span>
          <span className="label mt-1 block text-graphite">How we work</span>
        </div>

        <div className="body">
          <h2 className="display h2">
            <Lines>{method.title}</Lines>
          </h2>
          <p className="mt-5 max-w-measure">{method.intro}</p>

          {/* One product, three openers. Scrolls sideways on phones. */}
          <div className="-mx-[var(--pad)] mt-12 flex snap-x snap-mandatory gap-4 overflow-x-auto px-[var(--pad)] pb-2 sm:mx-0 sm:grid sm:snap-none sm:grid-cols-3 sm:items-start sm:gap-6 sm:overflow-visible sm:px-0 sm:pb-0">
            {example.slugs.map((slug, i) => (
              <figure
                key={slug}
                className={`w-[68%] flex-none snap-start sm:w-auto ${i === 1 ? "sm:mt-12" : i === 2 ? "sm:mt-5" : ""}`}
              >
                <AdVideo slug={slug} ad={ads[slug]} tag={`Opener ${String.fromCharCode(65 + i)}`} />
                <figcaption className="mt-3 border-t border-rule pt-2.5">
                  <span className="h3 block text-[19px]">{ads[slug].title}</span>
                  <span className="mt-1 block text-[15px] leading-snug text-graphite">{example.openers[i]}</span>
                </figcaption>
              </figure>
            ))}
          </div>
          <p className="label mt-5 text-[11px] text-graphite">{example.caption}</p>

          {/* The shape of a sprint: five hooks across four executions. */}
          <h3 className="h3 mt-20">{matrix.title}</h3>
          <table className="mt-5 w-full table-fixed border-collapse border-t border-ink">
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
                    <span className="mt-0.5 hidden text-[14px] italic leading-snug text-graphite sm:block">
                      {row.line}
                    </span>
                  </th>
                  {row.states.map((state) => {
                    id += 1;
                    return (
                      <td
                        key={id}
                        className={`h-[76px] border-b border-l border-rule p-2 align-top sm:h-[88px] sm:p-3 ${CELL[state]}`}
                      >
                        <span
                          className={`block font-mono text-[11px] font-semibold sm:text-[12px] ${
                            state === "cut" ? "text-graphite line-through" : ""
                          }`}
                        >
                          V{String(id).padStart(2, "0")}
                        </span>
                        <span
                          className={`label mt-5 block text-[9.5px] sm:mt-7 sm:text-[10.5px] ${state === "scale" ? "text-white" : "text-graphite"}`}
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

          <dl className="mt-16 border-t border-ink">
            {method.commitments.map((c) => (
              <div key={c.label} className="grid gap-1 border-b border-rule py-4 sm:grid-cols-[180px_1fr] sm:gap-6">
                <dt className="label pt-1.5 text-graphite">{c.label}</dt>
                <dd className="h3 text-[21px] [text-wrap:balance] sm:text-[24px]">{c.text}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
