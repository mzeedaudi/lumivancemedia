import Link from "next/link";
import AdVideo from "@/components/AdVideo";
import Block from "@/components/blocks/Block";
import CtaBand from "@/components/blocks/CtaBand";
import FrameStrip from "@/components/blocks/FrameStrip";
import PageHero from "@/components/blocks/PageHero";
import { workGroups } from "@/lib/company";
import { adTag, ads } from "@/lib/site";

const list = (items) => new Intl.ListFormat("en", { style: "long", type: "conjunction" }).format(items);
const clientSlugs = workGroups.filter((g) => g.kind === "client").flatMap((g) => g.slugs);
const specSlugs = workGroups.filter((g) => g.kind === "spec").flatMap((g) => g.slugs);
const clients = [...new Set(clientSlugs.filter((s) => !ads[s].pending).map((s) => ads[s].client))];

export const metadata = {
  title: "Work",
  description: `Every Lumivance ad, playable and frame by frame: client work for ${list(clients)}, and spec work made with AI to show the range.`,
  alternates: { canonical: "/work" },
};

const wide = (ratio) => {
  const [w, h] = ratio.split(" / ").map(Number);
  return w > h;
};

// Every ad on the site, once: client work first, grouped by sector, then the
// spec work. Each ad plays, says what it is, and shows six of its frames.
export default function WorkPage() {
  return (
    <>
      <PageHero
        crumbs={[{ label: "Work" }]}
        title="Our work"
        lede={`${clientSlugs.length} ads made for clients, including ${list(clients)}, then ${specSlugs.length} spec ads we made with AI to show the range. Spec work is labeled as spec. Tap any ad to hear it.`}
        media={{ trio: ["pool-anniversary", "fillows-cereal", "oraimo-scrubber"] }}
        caption="Client work for 8 Ball Pool, Bidco Africa and Oraimo."
      />
      {workGroups.map((g) => (
        <Block
          key={g.title}
          title={g.title}
          intro={
            g.href ? (
              <>
                {g.intro}{" "}
                <Link href={g.href} className="link">
                  See the sector <span aria-hidden="true">›</span>
                </Link>
              </>
            ) : (
              g.intro
            )
          }
        >
          {g.slugs.map((slug) => {
            const ad = ads[slug];
            const landscape = wide(ad.ratio);
            const upright = !landscape && ad.ratio !== "3 / 4";
            return (
              <article
                key={slug}
                className={`tile mb-4 grid items-start gap-6 p-4 last:mb-0 sm:gap-10 sm:p-6 ${
                  landscape
                    ? "lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)]"
                    : upright
                      ? "sm:grid-cols-[minmax(0,0.5fr)_minmax(0,1fr)] lg:grid-cols-[minmax(0,0.36fr)_minmax(0,1fr)]"
                      : "sm:grid-cols-[minmax(0,0.6fr)_minmax(0,1fr)] lg:grid-cols-[minmax(0,0.45fr)_minmax(0,1fr)]"
                }`}
              >
                <div className={upright ? "max-w-[240px] sm:max-w-none" : undefined}>
                  {/* Client ads carry their own captions and logos, so the label goes underneath. */}
                  <AdVideo slug={slug} ad={ad} tag={ad.client ? undefined : adTag(ad)} />
                  {ad.client && <span className="tag mt-2 block text-graphite">{adTag(ad)}</span>}
                </div>
                <div>
                  <h3 className="display text-[26px] sm:text-[30px]">{ad.title}</h3>
                  <p className="meta mt-1">
                    {ad.client ? `For ${ad.client} · ` : "Spec · "}
                    {ad.category}, {ad.length.replace(/^0:0?/, "")} seconds
                  </p>
                  <p className="mt-3 text-graphite">{ad.alt}.</p>
                  <div className="mt-6">
                    <FrameStrip slug={slug} dense={ad.ratio === "3 / 4"} />
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
