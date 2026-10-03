import AdVideo from "@/components/AdVideo";
import { Lines } from "@/components/Tally";
import { ads, work } from "@/lib/site";

// Desktop-only drops, by grid position, so each row zigzags instead of lining
// up like a template. Rows are 6+3+3, 3+3+6 and 3+6+3 columns wide.
const DROP = ["", "lg:mt-16", "lg:mt-6", "", "lg:mt-20", "lg:mt-8", "lg:mt-10", "", "lg:mt-16"];

// 03 — The one dark band. Every ad at its real shape: portrait files take a
// single cell, landscape files a double one. Phones get two columns, packed
// densely so no ad sits alone in a half-empty row.
export default function WorkGrid() {
  return (
    <section id="work" className="bg-ink text-paper">
      <div className="wrap grid-12 py-16 lg:py-24">
        <div className="gut">
          <span className="label block text-on-ink">03</span>
          <span className="label mt-1 block text-on-ink">Work</span>
        </div>

        <div className="body">
          <h2 className="display h2">
            <Lines>{work.title}</Lines>
          </h2>
          <div className="mt-5 flex flex-wrap items-end justify-between gap-x-10 gap-y-3">
            <p className="max-w-measure text-on-ink">{work.intro}</p>
            <span className="label text-on-ink">{work.hint}</span>
          </div>
        </div>

        <ul className="col-span-12 mt-12 grid grid-flow-row-dense grid-cols-2 items-start gap-x-4 gap-y-10 sm:gap-x-6 lg:mt-16 lg:grid-cols-12 lg:gap-y-14">
          {work.slugs.map((slug, i) => {
            const ad = ads[slug];
            const wide = ad.ratio !== "3 / 4";
            return (
              <li key={slug} className={`${wide ? "col-span-2 lg:col-span-6" : "col-span-1 lg:col-span-3"} ${DROP[i] || ""}`}>
                <figure>
                  <AdVideo slug={slug} ad={ad} tag={`Spec · ${ad.length}`} />
                  <figcaption className="mt-3 border-t border-rule-ink pt-2.5">
                    <span className="label block text-[10.5px] text-on-ink">
                      {ad.category} · {ad.ratio.replace(/ /g, "")}
                    </span>
                    <span className="mt-1 block font-display text-[16px] font-bold leading-snug tracking-[-0.01em] sm:text-[17px]">
                      {ad.title}
                    </span>
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
