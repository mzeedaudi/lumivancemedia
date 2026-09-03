import { ticker } from "@/lib/site";

// Endless ticker of what the studio makes. Doubled track + 50% translate =
// seamless loop; the second copy is hidden from assistive tech.
export default function Marquee() {
  return (
    <div className="mask-fade-x overflow-hidden border-y border-line py-5">
      <div className="flex w-max animate-marquee items-center">
        {[0, 1].map((copy) => (
          <div
            key={copy}
            aria-hidden={copy === 1 ? "true" : undefined}
            className="flex items-center"
          >
            {ticker.map((t) => (
              <span
                key={`${copy}-${t}`}
                className="flex items-center whitespace-nowrap font-display text-2xl font-semibold uppercase tracking-tight text-bone/65 sm:text-3xl"
              >
                <span className="px-6 sm:px-8">{t}</span>
                <span className="text-amber" aria-hidden="true">
                  ✦
                </span>
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
