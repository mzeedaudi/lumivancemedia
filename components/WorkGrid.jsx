import AdVideo from "@/components/AdVideo";
import { adTag, ads, hero, work } from "@/lib/site";

// The one dark band. Every ad keeps its real shape, the rows fill edge to
// edge, and the ads already playing in the hero aren't repeated. The line at
// the top is where the page says, once and in full, that this is spec work.
const ORDER = ["fizzbears-a", "lookbook", "blender-demo", "gold-cuff", "fizzbears-b"];

export default function WorkGrid() {
  const slugs = [...ORDER.filter((s) => work.slugs.includes(s)), ...work.slugs.filter((s) => !ORDER.includes(s))].filter(
    (s) => !hero.reel.includes(s)
  );
  return (
    <section id="work" className="bg-ink text-white">
      <div className="wrap py-12 lg:py-16">
        <div className="grid gap-x-12 gap-y-3 lg:grid-cols-2 lg:items-end">
          <h2 className="display h2">{work.title}</h2>
          <div className="lg:pb-1">
            <p className="text-[19px] leading-snug">{work.statement}</p>
            <p className="mt-2 text-on-ink">{work.intro}</p>
          </div>
        </div>

        <ul className="mt-8 grid grid-cols-2 items-start gap-3 lg:mt-10 lg:grid-cols-12 lg:gap-4">
          {slugs.map((slug) => {
            const ad = ads[slug];
            const wide = ad.ratio !== "3 / 4";
            return (
              <li key={slug} className={wide ? "col-span-2 lg:col-span-6" : "col-span-1 lg:col-span-3"}>
                <figure>
                  <AdVideo slug={slug} ad={ad} tag={adTag(ad)} ink />
                  <figcaption className="mt-3">
                    <span className="block text-[16px] font-semibold leading-snug">{ad.title}</span>
                    <span className="mt-0.5 block text-[14px] text-on-ink">{ad.category}</span>
                  </figcaption>
                </figure>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
