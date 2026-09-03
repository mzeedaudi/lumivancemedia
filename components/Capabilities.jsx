import Reveal from "@/components/Reveal";
import { services } from "@/lib/site";

// Editorial rows: numeral, title and hook on the left, the argument and the
// deliverables on the right. Reads like a studio rate card, not a SaaS grid.
export default function Capabilities({ detailed = false }) {
  return (
    <div className="divide-y divide-line border-y border-line">
      {services.map((s, i) => (
        <Reveal
          key={s.id}
          id={s.id}
          delay={i * 60}
          className="group grid scroll-mt-28 gap-6 py-10 sm:py-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16"
        >
          <div>
            <span className="font-serif text-3xl italic text-amber/90">{s.num}</span>
            <h3 className="display-tight mt-3 font-display text-3xl font-bold text-bone sm:text-[2.6rem]">
              {s.title}
            </h3>
            <p className="mt-4 max-w-md font-serif text-xl italic leading-snug text-bone/70 sm:text-2xl">
              {s.hook}
            </p>
          </div>
          <div>
            <p className="text-[0.98rem] leading-relaxed text-sand sm:text-base">{s.blurb}</p>
            <ul className={`mt-6 flex flex-wrap gap-2 ${detailed ? "" : "lg:max-w-xl"}`}>
              {s.deliverables.map((d) => (
                <li
                  key={d}
                  className="rounded-full border border-line bg-bone/[0.03] px-3 py-1.5 text-xs font-medium text-bone/80 transition-colors group-hover:border-amber/30"
                >
                  {d}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      ))}
    </div>
  );
}
