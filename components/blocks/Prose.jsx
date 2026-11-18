import Link from "next/link";
import Still from "@/components/Still";
import DataTable from "@/components/blocks/DataTable";

// Long-form guide text: plain subheads, short paragraphs, the odd still.
// A section can also carry a table, a closing line and a link to the next read.
export default function Prose({ sections }) {
  return (
    <div className="max-w-[760px] space-y-12">
      {sections.map((s) => (
        <section key={s.heading} id={s.id} className={s.id ? "scroll-mt-24" : undefined}>
          <h3 className="display text-[24px] sm:text-[26px]">{s.heading}</h3>
          <div className="mt-3 space-y-4">
            {s.paras?.map((p) => (
              <p key={p}>{p}</p>
            ))}
            {s.list && (
              <ul className="ticks space-y-2">
                {s.list.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
            )}
            {s.table && <DataTable {...s.table} />}
            {s.after && <p>{s.after}</p>}
            {s.link && (
              <p>
                <Link href={s.link.href} className="link">
                  {s.link.label} <span aria-hidden="true">›</span>
                </Link>
              </p>
            )}
          </div>
          {s.still && <Still id={s.still} caption={s.caption} className="mt-7 max-w-[320px]" sizes="320px" />}
        </section>
      ))}
    </div>
  );
}
