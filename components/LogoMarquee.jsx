import Link from "next/link";
import BrandLogo from "@/components/BrandLogo";
import { getAllCaseStudies } from "@/lib/caseStudyContent";

// Infinite right-to-left client marquee. Doubled track + 50% translate = seamless
// loop. Every mark is a company we publish a case study for, so the strip and the
// case-studies page can never drift apart. Each links to its story.
//
// Resting colour is white/60: these marks are thin stroked outlines rather than
// solid glyphs, so they need more weight than a filled logo would to stay legible.
export default function LogoMarquee() {
  const clients = getAllCaseStudies();
  const row = [...clients, ...clients];

  return (
    <div className="mask-fade-x overflow-hidden">
      <div className="flex w-max animate-marquee items-center gap-10 sm:gap-14">
        {row.map((c, i) => (
          <Link
            key={`${c.id}-${i}`}
            href={`/case-studies/${c.id}`}
            aria-hidden={i >= clients.length ? "true" : undefined}
            tabIndex={i >= clients.length ? -1 : undefined}
            className="select-none whitespace-nowrap text-white/60 transition-colors duration-300 hover:text-white"
          >
            <BrandLogo c={c} />
          </Link>
        ))}
      </div>
    </div>
  );
}
