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
    "Every Lumivance spec ad, playable and frame by frame: unboxings, try-ons, demos, product heroes and motion pieces. All of it is spec work made with AI.",
  alternates: { canonical: "/work" },
};

// Each spec ad with the ad itself, what it is, and six of its frames.
export default function WorkPage() {
  return (
    <>
      <PageHero
        crumbs={[{ label: "Work" }]}
        title="Our work"
        lede={`${work.statement} ${work.intro}`}
        media={{ pair: ["lookbook", "emera-a"] }}
        caption=""
      />
      {workGroups.map((g) => (
        <Block key={g.title} title={g.title} intro={g.intro}>
          {g.slugs.map((slug) => {
            const ad = ads[slug];
            const landscape = ad.ratio !== "3 / 4";
            return (
              <article
                key={slug}
                className={`grid items-start gap-6 border-t border-rule py-8 sm:gap-10 ${
                  landscape ? "" : "sm:grid-cols-[minmax(0,0.6fr)_minmax(0,1fr)]"
                }`}
              >
                <div className={landscape ? "max-w-[640px]" : "max-w-[360px]"}>
                  <AdVideo slug={slug} ad={ad} tag={`Spec · ${ad.length}`} />
                </div>
                <div>
                  <h3 className="display text-[24px] sm:text-[26px]">{ad.title}</h3>
                  <p className="meta mt-1">
                    {ad.category}, {ad.length.replace("0:", "")} seconds
                  </p>
                  <p className="mt-3 text-graphite">{ad.alt}.</p>
                  <div className="mt-6">
                    <FrameStrip slug={slug} dense />
                  </div>
                </div>
              </article>
            );
          })}
        </Block>
      ))}
      <CtaBand />
    </>
  );
}
