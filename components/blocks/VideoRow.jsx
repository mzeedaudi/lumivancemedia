import AdVideo from "@/components/AdVideo";
import { adTag, ads } from "@/lib/site";

const wide = (ratio) => {
  const [w, h] = ratio.split(" / ").map(Number);
  return w > h;
};

// Ads side by side, each with a line on what makes it different. Upright
// ads sit three to a row, four when there are four; on phones the row
// scrolls sideways so each ad stays usable.
export default function VideoRow({ items }) {
  const landscape = items.some((it) => wide(ads[it.slug].ratio));
  // One or two upright ads sit beside their captions, so the row stays full.
  const pair = !landscape && items.length <= 2;
  return (
    <div
      className={`-mx-[var(--pad)] flex snap-x snap-mandatory scroll-px-[var(--pad)] gap-4 overflow-x-auto px-[var(--pad)] pb-2 sm:mx-0 sm:grid sm:snap-none sm:items-start sm:gap-6 sm:overflow-visible sm:px-0 sm:pb-0 ${
        landscape || pair ? "sm:grid-cols-2" : items.length >= 4 ? "sm:grid-cols-4" : "sm:grid-cols-3"
      }`}
    >
      {items.map((it) => {
        const ad = ads[it.slug];
        return (
          <figure
            key={it.slug}
            className={`${landscape ? "w-[86%]" : "w-[68%]"} flex-none snap-start sm:w-auto ${pair ? "sm:grid sm:grid-cols-2 sm:items-end sm:gap-5" : ""}`}
          >
            {/* Client ads carry the brand's own logo, so their tag goes underneath. */}
            <AdVideo slug={it.slug} ad={ad} tag={ad.client ? undefined : adTag(ad)} />
            <figcaption className={pair ? "mt-3 sm:mt-0 sm:pb-2" : "mt-3"}>
              {ad.client && <span className="tag mb-1.5 block text-graphite">{adTag(ad)}</span>}
              <span className={`h3 block ${pair ? "sm:text-[21px]" : "text-[17px]"}`}>{it.title || ad.title}</span>
              {it.text && <span className="meta mt-0.5 block">{it.text}</span>}
            </figcaption>
          </figure>
        );
      })}
    </div>
  );
}
