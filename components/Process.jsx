import Reveal from "@/components/Reveal";
import { process } from "@/lib/site";

export default function Process() {
  return (
    <div className="relative grid gap-5 md:grid-cols-2 lg:grid-cols-4">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-[2.9rem] hidden h-px bg-gradient-to-r from-transparent via-amber/40 to-transparent lg:block"
      />
      {process.map((p, i) => (
        <Reveal
          key={p.step}
          delay={i * 100}
          className="relative rounded-3xl border border-line bg-ink-soft/60 p-7"
        >
          <span className="grid h-11 w-11 place-items-center rounded-full bg-gradient-to-br from-gold to-ember font-display text-sm font-bold text-ink shadow-ember">
            {p.step}
          </span>
          <h3 className="mt-6 font-display text-xl font-semibold tracking-tight text-bone">
            {p.title}
          </h3>
          <p className="mt-2.5 text-sm leading-relaxed text-sand">{p.body}</p>
        </Reveal>
      ))}
    </div>
  );
}
