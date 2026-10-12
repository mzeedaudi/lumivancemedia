import AdVideo from "@/components/AdVideo";
import { ads } from "@/lib/site";

// Spec ads side by side and staggered, each with a line on what makes it
// different. Portrait ads sit three to a row even when there are only two,
// leaving air; on phones the row scrolls sideways so each ad stays usable.
export default function VideoRow({ items }) {
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
          <AdVideo slug={it.slug} ad={ads[it.slug]} tag={`Spec · ${ads[it.slug].length}`} />
          <figcaption className="mt-3">
            <span className="h3 block text-[16px]">{it.title || ads[it.slug].title}</span>
            {it.text && <span className="meta mt-0.5 block">{it.text}</span>}
          </figcaption>
        </figure>
      ))}
    </div>
  );
}
