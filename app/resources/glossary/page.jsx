import CtaBand from "@/components/blocks/CtaBand";
import PageHero from "@/components/blocks/PageHero";
import { glossary } from "@/lib/resources";

export const metadata = {
  title: "Glossary",
  description:
    "Plain-English definitions of the terms used in performance creative and paid social: hook rate, hold rate, CPA, ROAS, MER, creative fatigue, Spark Ads and more.",
  alternates: { canonical: "/resources/glossary" },
};

export default function GlossaryPage() {
  const letters = [...new Set(glossary.map((g) => g.term[0].toUpperCase()))];
  return (
    <>
      <PageHero
        crumbs={[{ label: "Resources", href: "/resources" }, { label: "Glossary" }]}
        title="Glossary"
        lede="The terms that come up in briefs, test plans and weekly reports, defined the way we use them."
        media={{ stills: ["fizzbears-b-2", "emera-b-4"] }}
      />
      <section className="band">
        <div className="wrap py-12 lg:py-16">
          <nav aria-label="Jump to letter" className="mb-8 flex flex-wrap gap-x-4 gap-y-2 text-[15px] font-semibold">
            {letters.map((l) => (
              <a key={l} href={`#letter-${l}`} className="transition-colors hover:text-accent">
                {l}
              </a>
            ))}
          </nav>
          <div className="overflow-hidden rounded-[18px] border border-rule bg-white">
            <dl>
              {glossary.map((g, i) => {
                const letter = g.term[0].toUpperCase();
                const first = i === 0 || glossary[i - 1].term[0].toUpperCase() !== letter;
                return (
                  <div
                    key={g.term}
                    id={first ? `letter-${letter}` : undefined}
                    className="grid gap-1 border-b border-rule px-4 py-4 last:border-b-0 sm:grid-cols-[240px_1fr] sm:gap-8 sm:px-6"
                  >
                    <dt className="h3 text-[17px]">{g.term}</dt>
                    <dd className="text-graphite">{g.def}</dd>
                  </div>
                );
              })}
            </dl>
          </div>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
