import Reveal from "@/components/Reveal";
import { facts } from "@/lib/site";

// Offer terms, not track-record claims — nothing here needs a past client to be true.
export default function Facts() {
  return (
    <section className="container-x py-10">
      <div className="grid grid-cols-2 gap-px overflow-hidden rounded-3xl border border-line bg-line lg:grid-cols-4">
        {facts.map((f, i) => (
          <Reveal key={f.label} delay={i * 80} className="bg-ink-soft p-7 sm:p-9">
            <p className="display-tight font-display text-3xl font-bold text-gradient sm:text-4xl">
              {f.value}
            </p>
            <p className="mt-3 text-sm font-medium text-bone">{f.label}</p>
            <p className="mt-1 text-sm text-sand">{f.sub}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
