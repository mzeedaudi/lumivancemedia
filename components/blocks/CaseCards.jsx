import Link from "next/link";
import Image from "next/image";
import { photo } from "@/lib/photos";

// Case study teasers: the headline number, who it was for and a link. A
// placeholder says so on the card; placeholders never reach the live site.
export default function CaseCards({ items }) {
  return (
    <ul className="grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((c) => {
        const ph = photo(c.photo);
        return (
          <li key={c.slug}>
            <Link href={`/case-studies/${c.slug}`} className="group block">
              <div className="relative aspect-[4/3] overflow-hidden bg-frame">
                <Image src={ph.src} alt="" fill sizes="(min-width: 1024px) 400px, (min-width: 640px) 45vw, 90vw" className="object-cover" />
                {c.placeholder && <span className="tag absolute left-3 top-3 bg-dot px-2 py-1 text-white">Placeholder</span>}
              </div>
              <p className="mt-4">
                <span className="display block text-[36px] leading-none">{c.metric.value}</span>
                <span className="meta mt-1 block">{c.metric.label}</span>
              </p>
              <h3 className="h3 mt-3 transition-colors group-hover:text-accent">{c.title}</h3>
              <p className="meta mt-1">
                {c.client} · {c.channels.join(", ")}
              </p>
              <span className="link mt-3 inline-block text-[15px]">
                Read the case study <span aria-hidden="true">→</span>
              </span>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
