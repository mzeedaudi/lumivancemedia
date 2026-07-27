import Reveal from "@/components/Reveal";
import { awards } from "@/lib/site";

// A laurel branch built from leaves placed along a curved stem. Mirrored for
// the right side. Inherits colour from `currentColor`.
function Laurel({ side = "left", className = "" }) {
  const N = 8;
  const leaves = [];
  for (let i = 0; i < N; i++) {
    const t = i / (N - 1);
    const x = 58 - t * 30 - Math.sin(t * Math.PI) * 11;
    const y = 122 - t * 106;
    const rot = 152 - t * 78;
    leaves.push(
      <ellipse key={i} cx={x} cy={y} rx="11" ry="4.3" transform={`rotate(${rot} ${x} ${y})`} />
    );
  }
  return (
    <svg
      viewBox="0 0 80 130"
      className={`${className} ${side === "right" ? "-scale-x-100" : ""}`}
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M58 125 C45 98 31 62 29 14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.55" />
      {leaves}
    </svg>
  );
}

export default function Awards() {
  return (
    <section className="container-x py-20 sm:py-28">
      <Reveal as="h2" className="mx-auto max-w-2xl text-center font-display text-3xl font-semibold leading-[1.1] tracking-tightest sm:text-[2.6rem]">
        An <span className="text-gradient">award-winning</span> growth partner
      </Reveal>

      <div className="mt-16 grid gap-12 sm:grid-cols-3 sm:gap-6">
        {awards.map((a, i) => (
          <Reveal key={a.org} delay={i * 110} className="flex items-center justify-center gap-1">
            <Laurel side="left" className="h-28 w-14 flex-none text-white/[0.16]" />
            <div className="px-1 text-center">
              <p className="font-display text-lg font-semibold tracking-tight text-white">
                {a.org}
              </p>
              <p className="mx-auto mt-3 max-w-[12rem] text-xs leading-relaxed text-ink2">
                {a.title}
              </p>
            </div>
            <Laurel side="right" className="h-28 w-14 flex-none text-white/[0.16]" />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
