import AdVideo from "@/components/AdVideo";
import { ads } from "@/lib/site";

// Spec ads side by side and staggered, each captioned with what makes it
// different. Portrait ads sit three to a row even when there are only two,
// leaving air; on phones the row scrolls sideways so each ad stays usable.
export default function VideoRow({ items, ink = false }) {
  const landscape = items.some((it) => ads[it.slug].ratio !== "3 / 4");
  return (
    <div
      className={`-mx-[var(--pad)] flex snap-x snap-mandatory gap-4 overflow-x-auto px-[var(--pad)] pb-2 sm:mx-0 sm:grid sm:snap-none sm:items-start sm:gap-6 sm:overflow-visible sm:px-0 sm:pb-0 ${
        landscape ? "sm:grid-cols-2" : "sm:grid-cols-3"
      }`}
    >
      {items.map((it, i) => (
        <figure
          key={it.slug}
          className={`${landscape ? "w-[86%]" : "w-[68%]"} flex-none snap-start sm:w-auto ${
            i === 1 ? "sm:mt-12" : i === 2 ? "sm:mt-5" : ""
          }`}
        >
          <AdVideo slug={it.slug} ad={ads[it.slug]} tag={it.tag || `Spec · ${ads[it.slug].length}`} />
          <figcaption className={`mt-3 border-t pt-2.5 ${ink ? "border-rule-ink" : "border-rule"}`}>
            <span className="h3 block text-[19px]">{it.title || ads[it.slug].title}</span>
            {it.text && (
              <span className={`mt-1 block text-[15px] leading-snug ${ink ? "text-on-ink" : "text-graphite"}`}>{it.text}</span>
            )}
          </figcaption>
        </figure>
      ))}
    </div>
  );
}
