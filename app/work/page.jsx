import AdVideo from "@/components/AdVideo";
import Block from "@/components/blocks/Block";
import CtaBand from "@/components/blocks/CtaBand";
import FrameStrip from "@/components/blocks/FrameStrip";
import PageHero from "@/components/blocks/PageHero";
import { workGroups } from "@/lib/company";
import { ads, work } from "@/lib/site";

export const metadata = {
  title: "Work",
  description:
    "Every Lumivance spec ad, playable and frame by frame: unboxings, try-ons, demos, product heroes and motion pieces. Spec work, labeled as spec work.",
  alternates: { canonical: "/work" },
};

// Each spec ad as a case file: the ad itself, what it is, and its frames.
export default function WorkPage() {
  return (
    <>
      <PageHero
        crumbs={[{ label: "Work" }]}
        title={work.title}
        lede={`${work.intro} ${work.hint}.`}
        media={{ pair: ["lookbook", "emera-a"] }}
      />
      {workGroups.map((g, gi) => (
        <Block key={g.label} num={String(gi + 1).padStart(2, "0")} label={g.label} title={g.title} intro={g.intro}>
          <div>
            {g.slugs.map((slug) => {
              const ad = ads[slug];
              const landscape = ad.ratio !== "3 / 4";
              return (
                <article
                  key={slug}
                  className={`grid items-start gap-6 border-t border-rule py-8 first:border-ink sm:gap-8 ${
                    landscape ? "" : "sm:grid-cols-[minmax(0,0.62fr)_minmax(0,1fr)]"
                  }`}
                >
                  <div className={landscape ? "max-w-[640px]" : "max-w-[360px]"}>
                    <AdVideo slug={slug} ad={ad} tag={`Spec · ${ad.length}`} />
                  </div>
                  <div>
                    <p className="label text-[11px] text-graphite">
                      {ad.category} · {ad.ratio.replace(/ /g, "")} · {ad.length}
                    </p>
                    <h3 className="h3 mt-2 text-[24px] sm:text-[28px]">{ad.title}</h3>
                    <p className="mt-2 text-[17px] text-graphite">{ad.alt}.</p>
                    <div className="mt-6">
                      <FrameStrip slug={slug} dense />
                    </div>
                  </div>
                </article>
              );
            })}
            <p className="label border-t border-ink pt-4 text-[10.5px] text-graphite">
              All spec work: made by Lumivance with AI-generated presenters, products and sets. None of it ran for a client.
            </p>
          </div>
        </Block>
      ))}
      <CtaBand />
    </>
  );
}
