import Reveal from "@/components/Reveal";
import { process } from "@/lib/site";

export default function Process() {
  return (
    <div className="relative grid gap-5 md:grid-cols-2 lg:grid-cols-4">
      {/* connecting line on large screens */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-[3.2rem] hidden h-px bg-gradient-to-r from-transparent via-line to-transparent lg:block"
      />
      {process.map((p, i) => (
        <Reveal
          key={p.step}
          delay={i * 100}
          className="relative rounded-3xl border border-line bg-ink-soft/50 p-7"
        >
          <div className="flex items-center gap-3">
            <span className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-brand-violet to-brand-fuchsia font-display text-sm font-semibold text-white shadow-glow">
              {p.step}
            </span>
            <span className="font-serif text-2xl italic text-white/30">
              {p.title}
            </span>
          </div>
          <h3 className="mt-6 font-display text-lg font-semibold tracking-tight text-white">
            {p.title}
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-ink2">{p.body}</p>
        </Reveal>
      ))}
    </div>
  );
}
