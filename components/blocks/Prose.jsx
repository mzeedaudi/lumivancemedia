import Still from "@/components/Still";

// Long-form guide text: numbered subheads, short paragraphs, the odd still.
export default function Prose({ sections }) {
  return (
    <div className="max-w-[720px] space-y-14">
      {sections.map((s, i) => (
        <section key={s.heading}>
          <h3 className="h3 flex gap-4 text-[24px] sm:text-[28px]">
            <span className="label shrink-0 pt-1.5 text-graphite sm:pt-2.5">{String(i + 1).padStart(2, "0")}</span>
            {s.heading}
          </h3>
          <div className="mt-4 space-y-4 text-[18px] leading-relaxed sm:text-[19px]">
            {s.paras?.map((p) => (
              <p key={p}>{p}</p>
            ))}
            {s.list && (
              <ul className="space-y-2.5">
                {s.list.map((t) => (
                  <li key={t} className="flex gap-3">
                    <span aria-hidden="true" className="font-mono text-tally">
                      —
                    </span>
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
          {s.still && <Still id={s.still} caption={s.caption} className="mt-7 max-w-[340px]" sizes="340px" />}
        </section>
      ))}
    </div>
  );
}
