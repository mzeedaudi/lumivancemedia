import AdVideo from "@/components/AdVideo";
import { ads, work } from "@/lib/site";

// Desktop-only drops, by grid position, so each row zigzags instead of lining
// up in a tidy grid. Rows are 6+3+3, 3+3+6 and 3+6+3 columns wide.
const DROP = ["", "lg:mt-16", "lg:mt-6", "", "lg:mt-20", "lg:mt-8", "lg:mt-10", "", "lg:mt-16"];

// The one dark band, and the one section that runs past the content width:
// the grid goes nearly edge to edge. Every ad keeps its real shape. The line
// at the top is where the page says, once and in full, that this is spec work.
export default function WorkGrid() {
  return (
    <section id="work" className="bg-ink text-paper">
      <div className="wrap pt-16 lg:pt-24">
        <div className="grid-12 gap-y-5">
          <h2 className="display h2 col-span-12 lg:col-span-5">{work.title}</h2>
          <div className="col-span-12 lg:col-span-6 lg:col-start-7">
            <p className="lede">{work.statement}</p>
            <p className="mt-3 text-on-ink">{work.intro}</p>
          </div>
        </div>
      </div>

      <ul className="mx-auto mt-12 grid max-w-[1800px] grid-flow-row-dense grid-cols-2 items-start gap-x-3 gap-y-8 px-3 pb-16 sm:gap-x-5 sm:px-5 lg:mt-16 lg:grid-cols-12 lg:gap-y-12 lg:pb-24">
        {work.slugs.map((slug, i) => {
          const ad = ads[slug];
          const wide = ad.ratio !== "3 / 4";
          return (
            <li key={slug} className={`${wide ? "col-span-2 lg:col-span-6" : "col-span-1 lg:col-span-3"} ${DROP[i] || ""}`}>
              <figure>
                <AdVideo slug={slug} ad={ad} tag={`Spec · ${ad.length}`} ink />
                <figcaption className="mt-3">
                  <span className="block text-[15px] font-semibold leading-snug sm:text-[16px]">{ad.title}</span>
                  <span className="mt-0.5 block text-[14px] text-on-ink">{ad.category}</span>
                </figcaption>
              </figure>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
