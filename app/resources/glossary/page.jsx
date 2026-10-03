import Block from "@/components/blocks/Block";
import CtaBand from "@/components/blocks/CtaBand";
import PageHero from "@/components/blocks/PageHero";
import { glossary } from "@/lib/resources";

export const metadata = {
  title: "Performance creative glossary",
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
        title={["The words we use,", "in plain English."]}
        lede="The terms that come up in briefs, test plans and weekly reports, defined the way we use them."
        media={{ stills: ["fizzbears-b-2", "emera-b-4"] }}
      />
      <Block num="01" label="A–Z">
        <nav aria-label="Jump to letter" className="label mb-8 flex flex-wrap gap-x-4 gap-y-2 text-graphite">
          {letters.map((l) => (
            <a key={l} href={`#letter-${l}`} className="transition-colors hover:text-tally">
              {l}
            </a>
          ))}
        </nav>
        <dl className="border-t border-ink">
          {glossary.map((g, i) => {
            const letter = g.term[0].toUpperCase();
            const first = i === 0 || glossary[i - 1].term[0].toUpperCase() !== letter;
            return (
              <div
                key={g.term}
                id={first ? `letter-${letter}` : undefined}
                className="grid gap-1 border-b border-rule py-4 sm:grid-cols-[220px_1fr] sm:gap-8"
              >
                <dt className="h3 text-[20px]">{g.term}</dt>
                <dd className="text-[17px] leading-relaxed text-graphite">{g.def}</dd>
              </div>
            );
          })}
        </dl>
      </Block>
      <CtaBand />
    </>
  );
}
