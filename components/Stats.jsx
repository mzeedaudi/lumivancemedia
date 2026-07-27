import Reveal from "@/components/Reveal";
import Counter from "@/components/Counter";
import { stats } from "@/lib/site";

export default function Stats() {
  return (
    <section className="container-x py-10">
      <div className="grid grid-cols-2 gap-px overflow-hidden rounded-3xl border border-line bg-line lg:grid-cols-4">
        {stats.map((s, i) => (
          <Reveal
            key={s.label}
            delay={i * 80}
            className="bg-ink-soft p-7 sm:p-9"
          >
            <div className="font-display text-4xl font-semibold tracking-tightest text-white sm:text-5xl">
              <span className="text-gradient">
                <Counter
                  value={s.value}
                  prefix={s.prefix || ""}
                  suffix={s.suffix || ""}
                />
              </span>
            </div>
            <p className="mt-3 text-sm font-medium text-white">{s.label}</p>
            <p className="mt-1 text-sm text-ink2">{s.sub}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
