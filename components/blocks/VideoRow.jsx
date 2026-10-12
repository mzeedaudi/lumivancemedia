import AdVideo from "@/components/AdVideo";
import { adTag, ads } from "@/lib/site";

const wide = (ratio) => {
  const [w, h] = ratio.split(" / ").map(Number);
  return w > h;
};

// Ads side by side and staggered, each with a line on what makes it
// different. Upright ads sit three to a row even when there are only two,
// leaving air; on phones the row scrolls sideways so each ad stays usable.
export default function VideoRow({ items }) {
  const landscape = items.some((it) => wide(ads[it.slug].ratio));
  return (
    <div
      className={`-mx-[var(--pad)] flex snap-x snap-mandatory scroll-px-[var(--pad)] gap-4 overflow-x-auto px-[var(--pad)] pb-2 sm:mx-0 sm:grid sm:snap-none sm:items-start sm:gap-6 sm:overflow-visible sm:px-0 sm:pb-0 ${
        landscape ? "sm:grid-cols-2" : "sm:grid-cols-3"
      }`}
    >
      {items.map((it, i) => {
        const ad = ads[it.slug];
        return (
          <figure
            key={it.slug}
            className={`${landscape ? "w-[86%]" : "w-[68%]"} flex-none snap-start sm:w-auto ${
              i === 1 ? "sm:mt-12" : i === 2 ? "sm:mt-5" : ""
            }`}
          >
            {/* Client ads carry the brand's own logo, so their tag goes underneath. */}
            <AdVideo slug={it.slug} ad={ad} tag={ad.client ? undefined : adTag(ad)} />
            <figcaption className="mt-3">
              {ad.client && <span className="tag mb-1.5 block text-graphite">{adTag(ad)}</span>}
              <span className="h3 block text-[16px]">{it.title || ad.title}</span>
              {it.text && <span className="meta mt-0.5 block">{it.text}</span>}
            </figcaption>
          </figure>
        );
      })}
    </div>
  );
}
